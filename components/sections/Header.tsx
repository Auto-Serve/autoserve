import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <Image src="/assets/logo.svg" alt="logo" width={38} height={38} />
            </div>
          </div>
          <div className="text-2xl font-semibold">
            Auto Serve
          </div>
          <div className="flex gap-4 items-center">
              <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_btop,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                <span className="relative z-10 text-slate-200"><a href="/sign-in">Log In</a></span>
              </button>
              <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_btop,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                <span className="relative z-10 text-slate-200"><a href="/sign-up">Sign Up</a></span>
              </button>
            <Image src="/assets/icon-menu.svg" alt="menu" width={38} height={38} />
          </div>
        </div>
      </div>
    </header>
  );
};
