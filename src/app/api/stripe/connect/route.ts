import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-04-10',
})

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const user = await currentUser()
    if (!user) return new NextResponse('User not authenticated', { status: 401 })

    const account = await createStripeAccount()
    if (!account) return new NextResponse('Failed to create Stripe account', { status: 500 })

    const updatedAccount = await updateStripeAccount(account.id)
    if (!updatedAccount) return new NextResponse('Failed to update Stripe account', { status: 500 })

    const person = await createStripePerson(account.id)
    if (!person) return new NextResponse('Failed to create Stripe person', { status: 500 })

    const updatedPerson = await updateStripePerson(account.id, person.id)
    if (!updatedPerson) return new NextResponse('Failed to update Stripe person', { status: 500 })

    const owner = await createStripeOwner(account.id)
    if (!owner) return new NextResponse('Failed to create Stripe owner', { status: 500 })

    const completedAccount = await completeStripeAccount(account.id)
    if (!completedAccount) return new NextResponse('Failed to complete Stripe account', { status: 500 })

    const savedAccount = await saveAccountIdToUser(user.id, account.id)
    if (!savedAccount) return new NextResponse('Failed to save account ID', { status: 500 })

    const accountLink = await createAccountLink(account.id)
    if (!accountLink) return new NextResponse('Failed to create account link', { status: 500 })

    return new NextResponse(JSON.stringify({ success: true, accountLink }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in Stripe connect:', error)
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

async function createStripeAccount() {
  return await stripe.accounts.create({
    country: 'US',
    type: 'custom',
    business_type: 'company',
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    external_account: 'btok_us',
    tos_acceptance: { date: 1547923073, ip: '172.18.80.19' },
  })
}

async function updateStripeAccount(accountId: string) {
  return await stripe.accounts.update(accountId, {
    business_profile: {
      mcc: '5045',
      url: 'https://bestcookieco.com',
    },
    company: {
      address: {
        city: 'Fairfax',
        line1: '123 State St',
        postal_code: '22031',
        state: 'VA',
      },
      tax_id: '000000000',
      name: 'The Best Cookie Co',
      phone: '8888675309',
    },
  })
}

async function createStripePerson(accountId: string) {
  return await stripe.accounts.createPerson(accountId, {
    first_name: 'Jenny',
    last_name: 'Rosen',
    relationship: {
      representative: true,
      title: 'CEO',
    },
  })
}

async function updateStripePerson(accountId: string, personId: string) {
  return await stripe.accounts.updatePerson(accountId, personId, {
    address: {
      city: 'victoria ',
      line1: '123 State St',
      postal_code: 'V8P 1A1',
      state: 'BC',
    },
    dob: { day: 10, month: 11, year: 1980 },
    ssn_last_4: '0000',
    phone: '8888675309',
    email: 'jenny@bestcookieco.com',
    relationship: { executive: true },
  })
}

async function createStripeOwner(accountId: string) {
  return await stripe.accounts.createPerson(accountId, {
    first_name: 'Kathleen',
    last_name: 'Banks',
    email: 'kathleen@bestcookieco.com',
    address: {
      city: 'victoria ',
      line1: '123 State St',
      postal_code: 'V8P 1A1',
      state: 'BC',
    },
    dob: { day: 10, month: 11, year: 1980 },
    phone: '8888675309',
    relationship: {
      owner: true,
      percent_ownership: 80,
    },
  })
}

async function completeStripeAccount(accountId: string) {
  return await stripe.accounts.update(accountId, {
    company: { owners_provided: true },
  })
}

async function saveAccountIdToUser(userId: string, accountId: string) {
  return await client.user.update({
    where: { clerkId: userId },
    data: { stripeId: accountId },
  })
}

async function createAccountLink(accountId: string) {
  return await stripe.accountLinks.create({
    account: accountId,
    refresh_url: 'http://localhost:3000/callback/stripe/refresh',
    return_url: 'http://localhost:3000/callback/stripe/success',
    type: 'account_onboarding',
    collection_options: { fields: 'currently_due' },
  })
}