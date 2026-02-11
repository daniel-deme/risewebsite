import { useState, useEffect } from "react";
import svgPaths from "./svg-gf1lw988da";

function Head() {
  return <div className="h-[80px] pointer-events-auto sticky top-0 w-full" data-name="head" />;
}

function Cta() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">book a meeting</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[465px] top-[838px] w-[510px]">
      <div className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[40px] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Make your systems `}</p>
        <p>work together</p>
      </div>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] w-[min-content] whitespace-pre-wrap">{`Rise Engine is an integration layer that connects disconnected systems and replaces scattered tools with a clear, consistent operational structure. `}</p>
      <Cta />
    </div>
  );
}

function Component2nd() {
  return (
    <div className="absolute contents left-[465px] top-[838px]" data-name="2nd">
      <Frame1 />
    </div>
  );
}

function Component1st() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[112px] pointer-events-none" data-name="1st">
      <div className="-translate-x-1/2 absolute font-['Be_Vietnam_Pro:Light',sans-serif] leading-[80px] left-[720.5px] not-italic text-[80px] text-center text-white top-[221px] tracking-[-3.2px] w-[703px] whitespace-pre-wrap">
        <p className="mb-0">Integrate.</p>
        <p className="mb-0">Centralize.</p>
        <p>Simplify.</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Be_Vietnam:Regular',sans-serif] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[0] left-[720.5px] not-italic text-[0px] text-center text-white top-[491px] tracking-[-0.84px]">
        <span className="leading-[normal] text-[20.472px] tracking-[-0.4094px]">with Rise Engine</span>
        <span className="leading-[normal] text-[25.931px] tracking-[-0.5186px]">®</span>
      </p>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.38px)] size-[40px] top-[112px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path clipRule="evenodd" d={svgPaths.p59e3b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="absolute contents left-[-236.5px] top-[232.5px]" data-name="left">
      <div className="absolute flex h-[431.5px] items-center justify-center left-[-236.5px] mix-blend-hard-light top-[232.5px] w-[946px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[431.5px] relative w-[946px]">
            <div className="absolute inset-[-18.54%_0_-0.53%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 946 513.786">
                <g id="Vector 7" opacity="0.5" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p356d0b80} fill="var(--stroke-0, #28536B)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[260.244px] items-center justify-center left-[-230.5px] mix-blend-hard-light top-[664px] w-[940px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[260.244px] relative w-[940px]">
            <div className="absolute inset-[-0.39%_-4.44%_-19.43%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 981.737 311.83">
                <g id="Vector 22" opacity="0.1" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p17fc5b80} fill="var(--stroke-0, #E17480)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.687px] items-center justify-center left-[-225px] mix-blend-hard-light top-[664px] w-[934.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[122.687px] relative w-[934.5px]">
            <div className="absolute inset-[-83.21%_-6.72%_-63.89%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997.278 303.159">
                <g id="Vector 25" opacity="0.5" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p3cd48800} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[138.384px] items-center justify-center left-[-226px] mix-blend-hard-light top-[600.62px] w-[935.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[138.384px] relative w-[935.5px]">
            <div className="absolute inset-[-37.61%_-4.88%_-56.05%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 981.155 267.985">
                <g id="Vector 24" opacity="0.4" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p225f4600} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[323px] items-center justify-center left-[-201px] mix-blend-hard-light top-[341px] w-[910.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[323px] relative w-[910.5px]">
            <div className="absolute inset-[-26.32%_0_-2.74%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 910.5 416.862">
                <g id="Vector 10" opacity="0.9" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p1c1a8fb0} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[187.998px] items-center justify-center left-[-198px] mix-blend-hard-light top-[476px] w-[907.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[187.998px] relative w-[907.5px]">
            <div className="absolute inset-[-26.6%_0_-1.72%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 907.5 241.236">
                <g id="Vector 16" opacity="0.4" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p1a378d00} fill="var(--stroke-0, #D9AFB6)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[266.118px] items-center justify-center left-[-200px] mix-blend-hard-light top-[663.88px] w-[909.5px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[266.118px] relative w-[909.5px]">
            <div className="absolute inset-[-7.02%_-4.97%_-24.81%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 954.692 350.815">
                <g id="Vector 20" opacity="0.9" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p2c1afc80} fill="var(--stroke-0, #28536B)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute contents left-[731px] top-[398px]" data-name="right">
      <div className="absolute flex h-[431.5px] items-center justify-center left-[731px] mix-blend-hard-light top-[664px] w-[946px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[431.5px] relative w-[946px]">
            <div className="absolute inset-[-18.54%_0_-0.53%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 946 513.786">
                <g id="Vector 7" opacity="0.5" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p356d0b80} fill="var(--stroke-0, #28536B)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[227.657px] items-center justify-center left-[731px] mix-blend-hard-light top-[436.34px] w-[940px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[227.657px] relative w-[940px]">
            <div className="absolute inset-[-1.15%_-5.42%_-33.35%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 990.928 306.199">
                <g id="Vector 22" opacity="0.1" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p18a8a700} fill="var(--stroke-0, #E17480)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.687px] items-center justify-center left-[731px] mix-blend-hard-light top-[541.31px] w-[934.5px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[122.687px] relative w-[934.5px]">
            <div className="absolute inset-[-83.21%_-6.72%_-63.89%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997.278 303.159">
                <g id="Vector 25" opacity="0.5" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p3cd48800} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[138.384px] items-center justify-center left-[731px] mix-blend-hard-light top-[589px] w-[935.5px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[138.384px] relative w-[935.5px]">
            <div className="absolute inset-[-37.61%_-4.88%_-56.05%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 981.155 267.985">
                <g id="Vector 24" opacity="0.8" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p225f4600} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[323px] items-center justify-center left-[731px] mix-blend-hard-light top-[664px] w-[910.5px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[323px] relative w-[910.5px]">
            <div className="absolute inset-[-17.03%_0_-1.75%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 910.5 383.664">
                <g id="Vector 10" opacity="0.3" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p5187e20} fill="var(--stroke-0, #7EA8BE)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[187.998px] items-center justify-center left-[731px] mix-blend-hard-light top-[664px] w-[907.5px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[187.998px] relative w-[907.5px]">
            <div className="absolute inset-[-26.6%_0_-1.72%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 907.5 241.236">
                <g id="Vector 16" opacity="0.39" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p1a378d00} fill="var(--stroke-0, #FFD49F)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[266.118px] items-center justify-center left-[731px] mix-blend-hard-light top-[398px] w-[909.5px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[266.118px] relative w-[909.5px]">
            <div className="absolute inset-[-7.02%_-4.97%_-24.81%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 954.692 350.815">
                <g id="Vector 20" opacity="0.9" style={{ mixBlendMode: "hard-light" }}>
                  <path d={svgPaths.p2c1afc80} fill="var(--stroke-0, #28536B)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Flows() {
  return (
    <div className="absolute contents left-[-236.5px] top-[232.5px] pointer-events-none" data-name="flows">
      <Left />
      <Right />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#08344c] h-[1213px] overflow-clip relative shrink-0 w-full mx-auto z-[4]">
      <div className="absolute bottom-0 h-[1213px] left-0 pointer-events-none top-0">
        <Head />
      </div>
      <Component2nd />
      <Component1st />
      <Flows />
      <div className="absolute left-[712px] size-[16px] top-[656px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 788" r="5.5" stroke="var(--stroke-0, #08344C)" strokeWidth="5" />
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[13.576px] h-[28px] items-center relative shrink-0" data-name="logo">
      <div className="relative shrink-0 size-[27.152px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1514 27.1514">
          <path d={svgPaths.p24cb2c80} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <p className="font-['Be_Vietnam:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.4094px]">
        <span className="leading-[normal] text-[20.472px]">Rise Engine</span>
        <span className="leading-[normal] text-[25.931px]">®</span>
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex h-full items-end opacity-60 pt-[11px] relative shrink-0" data-name="menu">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.52px] w-[483px]">
        <p className="leading-[normal] whitespace-pre-wrap">Integrate. Centralize. Simplify</p>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" data-name="spacer" />;
}

function Cta1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">BOOK A MEETING</p>
    </div>
  );
}

function Head1() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show header when scrolled past the hero section (~1200px)
      // Hide when scrolling back up into the hero section
      if (scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`bg-[#08344c] content-stretch flex flex-col md:flex-row items-center px-[56px] py-[24px] shrink-0 sticky w-screen z-[3] transition-transform duration-500 ease-in-out gap-4 md:gap-0 ${
        isVisible ? 'top-0 translate-y-0' : '-top-[100px] -translate-y-full'
      }`}
      data-name="head"
    >
      <Logo />
      <div className="hidden md:flex flex-row items-center self-stretch md:ml-12">
        <Menu />
      </div>
      <Spacer />
      <Cta1 />
    </div>
  );
}

function Ilu() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="ilu">
      <div className="absolute inset-[0_-9.53%_-2.08%_-13.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.75 73.5">
          <g id="ilu">
            <rect fill="var(--fill-0, #D4DDE1)" height="36" id="Rectangle 35" transform="matrix(1 0 0 -1 16.3125 54)" width="33.75" />
            <rect fill="var(--fill-0, #426D84)" height="18.75" id="Rectangle 37" transform="matrix(1 0 0 -1 87.5625 54)" width="48.75" />
            <rect fill="var(--fill-0, #7EA8BE)" height="54" id="Rectangle 36" transform="matrix(1 0 0 -1 59.0625 54)" width="20.25" />
            <path d="M0 72H147.75" id="Line 26" stroke="url(#paint0_linear_1_681)" strokeWidth="3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_681" x1="147.75" x2="147.722" y1="72" y2="69.9498">
              <stop stopColor="#FD0144" />
              <stop offset="1" stopColor="#FD8551" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-[319.5px]">
        <p className="leading-[32px] whitespace-pre-wrap">One normalized data layer</p>
      </div>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-[319.5px] whitespace-pre-wrap">Rise reconciles inconsistent data from multiple systems, giving every tool a shared structure without changing how they work.</p>
      <p className="decoration-solid font-['Be_Vietnam:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-[319.5px] whitespace-pre-wrap">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px w-full lg:min-w-px relative rounded-[8px]" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-12 lg:gap-[96px] items-center pb-12 pt-16 px-8 lg:pb-[80px] lg:pt-[120px] lg:px-[120px] relative w-full">
          <Ilu />
          <Txt />
        </div>
      </div>
    </div>
  );
}

function Ilu1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="ilu">
      <div className="absolute inset-[-33.33%_-24.84%_-12.75%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.812 105.179">
          <g id="ilu">
            <circle cx="59.75" cy="64" id="Ellipse 791" r="24" stroke="url(#paint0_linear_1_600)" strokeWidth="4" />
            <path d={svgPaths.p3cba7c00} id="Line 18" stroke="var(--stroke-0, #7EA8BE)" strokeLinecap="round" strokeWidth="3" />
            <path d="M59.8125 1.5L59.8125 39.75" id="Line 20" stroke="var(--stroke-0, #D4DDE1)" strokeLinecap="round" strokeWidth="3" />
            <path d="M83.0625 63.75H148.312" id="Line 19" stroke="var(--stroke-0, #426D84)" strokeLinecap="round" strokeWidth="3" />
            <path d={svgPaths.p188f3d00} fill="var(--fill-0, #D4DDE1)" id="Polygon 1" />
            <path d={svgPaths.p25f54200} fill="var(--fill-0, #426D84)" id="Polygon 2" />
            <path d={svgPaths.p24040000} fill="var(--fill-0, #7EA8BE)" id="Polygon 3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_600" x1="59.75" x2="59.75" y1="38" y2="90">
              <stop stopColor="#FD8551" />
              <stop offset="1" stopColor="#FD0144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-[319.5px]">
        <p className="leading-[32px] whitespace-pre-wrap">Unified operational view</p>
      </div>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-[319.5px] whitespace-pre-wrap">Rise generates a single, real-time view across all connected tools — allowing teams to see, understand, and act from one place</p>
      <p className="decoration-solid font-['Be_Vietnam:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-[319.5px] whitespace-pre-wrap">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[96px] items-center pb-[80px] pt-[120px] px-[120px] relative w-full">
          <Ilu1 />
          <Txt1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-px items-center relative shrink-0 w-full">
      <Benefit />
      <Benefit1 />
    </div>
  );
}

function Ilu2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="ilu">
      <div className="absolute inset-[0_-32.66%_0_-36.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.25 72">
          <g id="ilu">
            <g id="Frame 19">
              <line id="Line 25" stroke="var(--stroke-0, #7EA8BE)" strokeLinecap="round" strokeWidth="7.5" x1="46.6274" x2="74.3774" y1="58.1572" y2="10.0928" />
              <line id="Line 24" stroke="var(--stroke-0, #D4DDE1)" strokeLinecap="round" strokeWidth="7.5" x1="66.8774" x2="94.6274" y1="58.1572" y2="10.0928" />
              <line id="Line 21" stroke="var(--stroke-0, #426D84)" strokeLinecap="round" strokeWidth="7.5" x1="87.1274" x2="114.877" y1="58.1572" y2="10.0928" />
              <line id="Line 22" stroke="var(--stroke-0, #F4F6F8)" strokeLinecap="round" strokeWidth="7.5" x1="107.377" x2="135.127" y1="58.1572" y2="10.0928" />
              <line id="Line 23" stroke="var(--stroke-0, #DAE4E8)" strokeLinecap="round" strokeWidth="7.5" x1="127.627" x2="155.377" y1="58.1572" y2="10.0928" />
            </g>
            <path d={svgPaths.p33da8ec0} fill="url(#paint0_linear_1_590)" id="Line 29" />
            <path d="M1.5 36L41.25 36" id="Line 30" stroke="url(#paint1_linear_1_590)" strokeLinecap="round" strokeWidth="3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_590" x1="162" x2="201.75" y1="36.5" y2="36.5">
              <stop stopColor="#FD8551" />
              <stop offset="1" stopColor="#FD0144" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_590" x1="1.5" x2="204.375" y1="36.5" y2="36.5">
              <stop stopColor="#FD8551" />
              <stop offset="1" stopColor="#FD0144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Txt2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-[319.5px]">
        <p className="leading-[32px] whitespace-pre-wrap">Logic and workflows aligned</p>
      </div>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-[319.5px] whitespace-pre-wrap">Each system keeps its role, but Rise translates their logic into one coherent operational model that eliminates duplication.</p>
      <p className="decoration-solid font-['Be_Vietnam:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-[319.5px] whitespace-pre-wrap">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[96px] items-center pb-[80px] pt-[120px] px-[120px] relative w-full">
          <Ilu2 />
          <Txt2 />
        </div>
      </div>
    </div>
  );
}

function Ilu3() {
  return (
    <div className="h-[72px] relative shrink-0 w-[120px]" data-name="ilu">
      <div className="absolute inset-[-17.71%_0_-30.21%_-3.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.938 106.5">
          <g id="ilu">
            <g id="Group 19">
              <circle cx="45" cy="61.5" fill="var(--fill-0, #D4DDE1)" id="Ellipse 791" r="45" />
              <circle cx="89.25" cy="30.75" fill="var(--fill-0, #7EA8BE)" id="Ellipse 792" r="30.75" />
            </g>
            <g id="Intersect">
              <mask fill="white" id="path-3-inside-1_1_582">
                <path d={svgPaths.p2e387100} />
              </mask>
              <path d={svgPaths.p2e387100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3cea8100} fill="url(#paint0_linear_1_582)" mask="url(#path-3-inside-1_1_582)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_582" x1="74.2476" x2="74.2476" y1="19.2671" y2="61.1255">
              <stop stopColor="#FD8551" />
              <stop offset="1" stopColor="#FD0144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Txt3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['Be_Vietnam_Pro:SemiBold',sans-serif] justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-[319.5px]">
        <p className="leading-[32px] whitespace-pre-wrap">Fewer tools, less complexity</p>
      </div>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-[319.5px] whitespace-pre-wrap">By centralizing data and logic, Rise reduces the need for overlapping tools — lowering complexity without forcing teams to change how they work.</p>
      <p className="decoration-solid font-['Be_Vietnam:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-[319.5px] whitespace-pre-wrap">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[96px] items-center pb-[80px] pt-[120px] px-[120px] relative w-full">
          <Ilu3 />
          <Txt3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-px items-start justify-center relative shrink-0 w-full">
      <Benefit2 />
      <Benefit3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full z-[2]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 text-center text-white w-full whitespace-pre-wrap">
      <div className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[40px] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">
        <p className="mb-0">{`Built for complex `}</p>
        <p>operational systems</p>
      </div>
      <div className="font-['Be_Vietnam:Regular',sans-serif] leading-[23px] relative shrink-0 text-[13px] w-full">
        <p className="mb-0">{`Rise is designed for environments where operations span multiple systems, teams, and layers `}</p>
        <p>— and where consistency, control, and change must coexist without friction.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Be_Vietnam_Pro:Light',sans-serif] items-center justify-center leading-[normal] pb-[24px] relative shrink-0 text-[80px] w-full -space-y-[24px]">
      <p className="relative shrink-0 text-white tracking-[-3.2px]">Real estate</p>
      <p className="relative shrink-0 text-[#d4dde1] tracking-[-3.2px]">Manufacturing</p>
      <p className="relative shrink-0 text-[#7ea8be] tracking-[-3.2px]">Smart City</p>
      <p className="relative shrink-0 text-[#426d84] tracking-[-3.2px]">Defense</p>
      <p className="relative shrink-0 text-[#28536b] tracking-[-3.2px]">Space</p>
    </div>
  );
}

function Rtb() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center not-italic py-[120px] relative shrink-0 w-full z-[1]" data-name="RTB">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Features() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Features">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col isolate items-center px-[160px] py-px relative w-full">
          <Head1 />
          <Frame8 />
          <Rtb />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-white">
      <p className="font-['Be_Vietnam_Pro:Light',sans-serif] leading-[58px] relative shrink-0 text-[56px] text-center tracking-[-2.24px] w-[536px] whitespace-pre-wrap">Let’s talk about your systems</p>
      <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] tracking-[-0.32px]">And how Rise can finally make them work as one.</p>
    </div>
  );
}

function Cta3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">contact us</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Cta3 />
    </div>
  );
}

function Cta2() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="cta">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[320px] py-[120px] relative w-full">
          <div className="relative shrink-0 size-[40px]" data-name="Subtract">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path clipRule="evenodd" d={svgPaths.p59e3b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
          <Frame5 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Foot() {
  return (
    <div className="shrink-0 sticky top-0 w-full z-[1]" data-name="foot">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Be_Vietnam_Pro:Regular',sans-serif] items-start justify-between leading-[0] not-italic px-[56px] py-[23px] relative text-[13px] text-white tracking-[-0.26px] w-full whitespace-nowrap">
          <div className="flex flex-col justify-center opacity-40 relative shrink-0">
            <p>
              <span className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[normal] not-italic">Rise Engine™</span>
              <span className="leading-[normal]">{` 2026 - All Rights reserved.`}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center opacity-40 relative shrink-0">
            <p className="leading-[normal]">Integrate. Centralize. Simplify.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#08344c] content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop - 7">
      <Frame />
      <Features />
      <Cta2 />
      <Foot />
    </div>
  );
}