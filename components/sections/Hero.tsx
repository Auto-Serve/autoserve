import Image from "next/image";
import starsBg from "@/assets/stars.png"

export const Hero = () => {
  return( 
    <section className="h-[492px] flex items-center overflow-hidden relative" style={({ backgroundImage: `url(${starsBg.src})`})}>
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="absolute h-[344px] w-[344px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 ">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded full">
          </div>
        </div>
      </div>
      <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bordder-dashed">

      </div>
      <div className="container relative">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">Chatbot Builder</h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Build Intelligent Chatbots Effortlessly, Enhance Customer Engagement Today!
        </p>
        <div className="flex gap-4 justify-center items-center mt-5">
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
          </div>
      </div>
    </section>
  );
};
