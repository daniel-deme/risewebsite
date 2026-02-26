import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-gf1lw988da";

function Head() {
  return <div className="h-[80px] pointer-events-auto sticky top-0 w-full" data-name="head" />;
}

function Cta() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">book a meeting</p>
    </div>
  );
}

function HeroLogoBlock() {
  return (
    <div className="relative z-10 flex justify-center shrink-0 mb-16" data-name="hero-logo-block">
      <div className="size-10 md:size-[40px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path clipRule="evenodd" d={svgPaths.p59e3b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function HeroBlock1() {
  return (
    <div className="relative z-10 text-center w-full max-w-[703px] mb-8" data-name="hero-block-1">
      <p className="font-['Be Vietnam Pro',sans-serif] font-light text-white whitespace-pre-wrap leading-tight text-[40px] sm:text-[80px] sm:leading-[80px]" style={{ letterSpacing: '-0.03em' }}>
        {`Integrate.\nCentralize.\nSimplify.`}
      </p>
    </div>
  );
}

const HERO_FLOWS_PATHS: { d: string; stroke: string; opacity: number }[] = [
  { d: "M709.5 511.5C690.635 512.81 674.057 513.527 655.148 513.325C487.68 522.192 337.509 401.293 222.76 298.228C103.411 193.909 -36.3701 150.941 -186.627 157.271C-202.9 157.756 -219.213 158.67 -236.5 160C-236.5 106.667 -236.5 53.3333 -236.5 0C-216.529 1.3367 -197.605 3.15458 -178.663 5.47999C-5.00916 21.3345 172.159 111.358 278.049 240.408C383.336 365.447 489.426 485.868 655.808 505.353C674.251 508.192 690.639 510.143 709.5 511.5Z", stroke: "#28536B", opacity: 0.5 },
  { d: "M709.5 511.5C691.683 512.845 675.04 515.435 658.214 519.385C500.89 553.925 431.305 708.346 272.932 786.345C106.173 865.726 -79.4821 798.371 -222.898 731.687C-238.964 724.118 -255.406 715.979 -272.237 707.249C-244.412 661.749 -216.588 616.25 -188.763 570.75C-174.771 580.87 -161.183 590.421 -147.983 599.43C-27.0805 680.444 110.758 752.147 243.699 711.878C377.234 674.989 491.947 521.476 656.986 511.48C674.648 510.099 691.682 510.179 709.5 511.5Z", stroke: "#E17480", opacity: 0.1 },
  { d: "M709.5 511.5C692.936 513.589 677.282 516.277 661.23 519.583C515.919 547.269 405.014 636.221 249.904 686.274C92.2883 739.036 -90.3259 705.575 -238.178 646.038C-254.465 639.742 -270.929 632.968 -287.778 625.592C-245.926 553.531 -204.074 481.469 -162.222 409.408C-150.071 418.873 -138.304 427.801 -126.735 436.307C-18.3582 514.909 94.7559 570.361 226.999 563.391C358.823 557.996 510.874 496.667 660.281 507.119C676.966 507.943 692.935 509.422 709.5 511.5Z", stroke: "#7EA8BE", opacity: 0.5 },
  { d: "M709.5 511.5C692.771 512.995 677.331 514.251 660.764 515.225C515.331 527.474 362.547 497.844 225.846 495.407C90.1893 494.232 -27.3309 558.463 -142.434 637.188C-154.887 645.813 -167.3 654.643 -180.345 664.061C-210.782 612.354 -241.218 560.647 -271.655 508.94C-255.838 501.372 -240.659 494.414 -225.378 487.652C-88.0579 426.2 76.5496 373.746 234.004 405.778C385.798 437.61 514.493 490.941 661.053 506.229C677.424 508.251 692.772 509.995 709.5 511.5Z", stroke: "#7EA8BE", opacity: 0.4 },
  { d: "M709.5 511.5C692.278 512.913 676.125 513.983 659.67 514.671C332.398 569.546 122.713 207.901 -155.073 270.279C-170.217 271.001 -185.007 272.087 -201 273.5C-201 216.833 -201 160.166 -201 103.5C-182.506 104.922 -165.307 106.719 -147.599 108.952C222.097 118.116 338.382 510.508 660.049 506.18C676.243 508.316 692.278 510.08 709.5 511.5Z", stroke: "#7EA8BE", opacity: 0.9 },
  { d: "M709.5 511.498C693.195 512.331 677.481 513.018 662.323 513.566C522.356 517.633 374.73 514.228 241.039 451.09C114.468 382.82 -12.5698 366.045 -152.214 371.536C-166.864 372.015 -182.043 372.667 -198 373.5C-198 340.167 -198 306.833 -198 273.5C-181.279 274.334 -165.334 275.357 -149.91 276.564C-7.0274 284.245 149.148 325.638 263.732 406.536C380.116 478.105 522.535 497.915 662.417 508.567C677.51 509.685 693.195 510.664 709.5 511.498Z", stroke: "#D9AFB6", opacity: 0.4 },
  { d: "M709.5 511.497C692.917 512.831 677.286 514.136 660.792 515.439C361.892 519.464 101.42 624.835 -117.58 813.538C-129.922 823.36 -142.098 833.196 -154.808 843.513C-184.936 799.504 -215.064 755.496 -245.192 711.487C-230.444 703.007 -216.233 695.015 -201.832 687.025C51.2823 529.16 375.252 459.946 660.807 507.439C677.296 508.803 692.917 510.164 709.5 511.497Z", stroke: "#28536B", opacity: 0.9 },
  { d: "M731 511.5C749.865 510.19 766.443 509.473 785.352 509.675C952.82 500.808 1102.99 621.707 1217.74 724.772C1337.09 829.091 1476.87 872.059 1627.13 865.729C1643.4 865.244 1659.71 864.33 1677 863C1677 916.333 1677 969.667 1677 1023C1657.03 1021.66 1638.11 1019.85 1619.16 1017.52C1445.51 1001.67 1268.34 911.642 1162.45 782.592C1057.16 657.553 951.074 537.132 784.692 517.647C766.249 514.808 749.861 512.857 731 511.5Z", stroke: "#28536B", opacity: 0.5 },
  { d: "M731 511.5C748.346 509.572 764.451 506.66 780.859 502.657C933.047 468.955 1007.79 331.816 1165.8 253.536C1329.09 173.771 1518.47 212.853 1670.14 262.727C1687.01 268.256 1704.26 274.305 1721.93 280.892C1687.98 349.631 1654.02 418.37 1620.07 487.109C1606.32 478.177 1592.98 469.744 1580.04 461.783C1460.09 389.496 1332.8 332.738 1205.04 361.632C1077 386.793 942.912 516.239 782.307 514.065C764.911 514.329 748.348 513.405 731 511.5Z", stroke: "#E17480", opacity: 0.1 },
  { d: "M731 511.5C747.564 509.411 763.218 506.723 779.27 503.417C924.581 475.731 1035.49 386.779 1190.6 336.726C1348.21 283.964 1530.83 317.425 1678.68 376.962C1694.97 383.258 1711.43 390.032 1728.28 397.408C1686.43 469.469 1644.57 541.531 1602.72 613.592C1590.57 604.127 1578.8 595.199 1567.24 586.693C1458.86 508.091 1345.74 452.639 1213.5 459.609C1081.68 465.004 929.626 526.333 780.219 515.881C763.534 515.057 747.565 513.578 731 511.5Z", stroke: "#7EA8BE", opacity: 0.5 },
  { d: "M731 511.5C747.729 510.005 763.169 508.749 779.736 507.775C925.169 495.526 1077.95 525.156 1214.65 527.593C1350.31 528.768 1467.83 464.537 1582.93 385.812C1595.39 377.187 1607.8 368.357 1620.85 358.939C1651.28 410.646 1681.72 462.353 1712.15 514.06C1696.34 521.628 1681.16 528.586 1665.88 535.348C1528.56 596.8 1363.95 649.254 1206.5 617.222C1054.7 585.39 926.007 532.059 779.447 516.771C763.076 514.749 747.728 513.005 731 511.5Z", stroke: "#7EA8BE", opacity: 0.8 },
  { d: "M731 511.5C748.222 510.587 764.354 510.017 780.763 509.828C1107.05 463.873 1300.25 830.943 1594.25 781.19C1609.85 780.991 1625.07 780.413 1641.5 779.5C1641.5 816.167 1641.5 852.834 1641.5 889.5C1623.45 888.579 1606.67 887.29 1589.42 885.578C1235.94 889.04 1103.17 502.074 780.518 515.322C764.278 513.684 748.222 512.42 731 511.5Z", stroke: "#7EA8BE", opacity: 0.3 },
  { d: "M731 511.502C747.305 510.669 763.019 509.982 778.177 509.434C918.144 505.367 1065.77 508.772 1199.46 571.91C1326.03 640.18 1453.07 656.955 1592.71 651.464C1607.36 650.985 1622.54 650.333 1638.5 649.5C1638.5 682.833 1638.5 716.167 1638.5 749.5C1621.78 748.666 1605.83 747.643 1590.41 746.436C1447.53 738.755 1291.35 697.362 1176.77 616.464C1060.38 544.895 917.965 525.085 778.083 514.433C762.99 513.315 747.305 512.336 731 511.502Z", stroke: "#FFD49F", opacity: 0.39 },
  { d: "M731 511.503C747.583 510.169 763.214 508.864 779.708 507.561C1078.61 503.536 1339.08 398.165 1558.08 209.462C1570.42 199.64 1582.6 189.804 1595.31 179.487C1625.44 223.496 1655.56 267.504 1685.69 311.513C1670.94 319.993 1656.73 327.985 1642.33 335.975C1389.22 493.84 1065.25 563.054 779.693 515.561C763.204 514.197 747.583 512.836 731 511.503Z", stroke: "#28536B", opacity: 0.9 },
];

const FLOW_SHINE_DURATIONS = [5.5, 6, 4.5, 5, 6.5, 4, 5.5, 5, 4.5, 6, 5.5, 4, 6.5, 5];
const FLOW_SHINE_DELAYS = [0, 1.2, 2.6, 0.4, 1.8, 2.9, 0.7, 2.1, 0.3, 1.5, 2.4, 0.9, 1.1, 2.2];

function HeroFlowsIllustration() {
  return (
    <div
      className="flex items-center justify-center w-full h-full min-h-[320px] overflow-visible"
      data-name="hero-flows-illustration"
    >
      <svg
        className="w-full min-w-[1440px] h-auto max-h-[2240px] sm:max-h-[2720px]"
        viewBox="0 0 1440 1023"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {HERO_FLOWS_PATHS.map(({ stroke }, i) => {
            const isLeft = i < 7;
            const dur = FLOW_SHINE_DURATIONS[i];
            const delay = FLOW_SHINE_DELAYS[i];
            const gradId = `flowShine-${i}`;
            return (
              <linearGradient
                key={gradId}
                id={gradId}
                gradientUnits="objectBoundingBox"
                x1={isLeft ? 0 : 1}
                x2={isLeft ? 1 : 0}
                y1={0.5}
                y2={0.5}
              >
                <stop offset="0" stopColor="white" stopOpacity="0" />
                <stop offset="0.08" stopColor="white" stopOpacity="0">
                  <animate attributeName="offset" values="0.08;0.48" dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} />
                </stop>
                <stop offset="0.14" stopColor="red" stopOpacity={0.5}>
                  <animate attributeName="offset" values="0.14;0.54" dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} />
                </stop>
                <stop offset="0.5" stopColor="red" stopOpacity={0.5}>
                  <animate attributeName="offset" values="0.5;0.9" dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} />
                </stop>
                <stop offset="0.86" stopColor="red" stopOpacity={0.5}>
                  <animate attributeName="offset" values="0.86;0.46" dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} />
                </stop>
                <stop offset="0.92" stopColor="white" stopOpacity="0">
                  <animate attributeName="offset" values="0.92;0.52" dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} />
                </stop>
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>
        <g style={{ mixBlendMode: "hard-light" }}>
          {HERO_FLOWS_PATHS.map(({ d, stroke, opacity }, i) => (
            <g key={i} opacity={opacity}>
              <path d={d} fill={stroke} />
              <path d={d} fill={`url(#flowShine-${i})`} />
            </g>
          ))}
        </g>
        <circle cx="720" cy="511.5" r="5.5" fill="white" stroke="#08344C" strokeWidth={5} />
      </svg>
    </div>
  );
}

function HeroBlock2() {
  return (
    <div className="relative z-10 text-center" data-name="hero-block-2">
      <p className="font-['Be Vietnam',sans-serif] font-normal text-white leading-normal text-[18px] md:text-[20.472px] md:tracking-[-0.4094px]">
        with Rise Engine<sup className="ml-0.5 font-light align-super text-[0.6em] md:text-[0.75em] relative top-[0.15em]">®</sup>
      </p>
    </div>
  );
}

function HeroFlowsSlot() {
  return (
    <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none overflow-visible" data-name="hero-flows-slot">
      <HeroFlowsIllustration />
    </div>
  );
}

function HeroGapWithFlows() {
  return (
    <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 h-[304px] overflow-visible" data-name="hero-gap-with-flows">
      <HeroFlowsSlot />
    </div>
  );
}

function HeroBlock3() {
  return (
    <div className="relative z-10 w-full max-w-[510px] px-4 md:px-0 flex flex-col gap-[24px] items-center text-center" data-name="hero-block-3">
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[40px] not-italic text-[32px] text-white tracking-[-0.96px] whitespace-pre-wrap">
        {`Make your systems\nwork together`}
      </p>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-white tracking-[-0.32px] whitespace-pre-wrap">
        {`Rise Engine is an integration layer that connects disconnected systems and replaces scattered tools with a clear, consistent operational structure. `}
      </p>
      <Cta />
    </div>
  );
}

function HeroWrapper() {
  return (
    <div
      className="relative flex flex-col items-center pt-12 pb-16 md:pt-16 md:pb-20 w-full max-w-full px-4"
      data-name="hero-wrapper"
    >
      <HeroLogoBlock />
      <HeroBlock1 />
      <HeroBlock2 />
      <HeroGapWithFlows />
      <HeroBlock3 />
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
    <div className="hidden md:block absolute contents left-[-236.5px] top-[232.5px] pointer-events-none" data-name="flows">
      <Left />
      <Right />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#08344c] min-h-[100svh] md:min-h-[1213px] overflow-clip relative shrink-0 w-full max-w-full mx-auto z-[4] flex flex-col items-center">
      <div className="absolute bottom-0 left-0 pointer-events-none top-0 h-full min-h-[100svh] md:min-h-[1213px] w-full">
        <Head />
      </div>
      <HeroWrapper />
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
      <p className="font-['Be Vietnam',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.4094px]">
        <span className="leading-[normal] text-[20.472px]">Rise Engine</span>
        <span className="leading-[normal] text-[25.931px]">®</span>
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex h-full items-end opacity-60 pt-[11px] relative shrink-0" data-name="menu">
      <div className="flex flex-col font-['Be Vietnam Pro',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.52px] w-[483px]">
        <p className="leading-[normal] whitespace-pre-wrap">Integrate. Centralize. Simplify</p>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px sm:min-w-0" data-name="spacer" />;
}

function Cta1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">BOOK A MEETING</p>
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
      className={`bg-[#08344c] shrink-0 sticky w-full z-[3] transition-transform duration-500 ease-in-out ${
        isVisible ? 'top-0 translate-y-0' : '-top-[100px] -translate-y-full'
      }`}
      data-name="head"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[1600px] mx-auto px-4 py-4 sm:px-[56px] sm:py-[24px] gap-4 sm:gap-0 min-w-0">
        <Logo />
        <div className="hidden sm:flex flex-row items-center self-stretch sm:ml-12 min-w-0">
          <Menu />
        </div>
        <Spacer />
        <Cta1 />
      </div>
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full max-w-[319.5px]" data-name="txt">
      <div className="flex flex-col font-['Be Vietnam Pro',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">One normalized data layer</p>
      </div>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap">Rise reconciles inconsistent data from multiple systems, giving every tool a shared structure without changing how they work.</p>
      <p className="decoration-solid font-['Be Vietnam',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-full whitespace-pre-wrap cursor-pointer transition-colors duration-300 hover:text-[#FD8551]">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit() {
  return (
    <div className="bg-white w-full lg:w-[400px] lg:min-w-[400px] lg:max-w-[400px] shrink-0 relative rounded-[8px] box-border" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-12 md:gap-[96px] items-center pb-12 pt-16 px-8 md:pb-[80px] md:pt-[120px] md:px-[120px] relative w-full">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full max-w-[319.5px]" data-name="txt">
      <div className="flex flex-col font-['Be Vietnam Pro',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Unified operational view</p>
      </div>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap">Rise generates a single, real-time view across all connected tools — allowing teams to see, understand, and act from one place</p>
      <p className="decoration-solid font-['Be Vietnam',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-full whitespace-pre-wrap cursor-pointer transition-colors duration-300 hover:text-[#FD8551]">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit1() {
  return (
    <div className="bg-white w-full lg:w-[400px] lg:min-w-[400px] lg:max-w-[400px] shrink-0 relative rounded-[8px] box-border" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-12 md:gap-[96px] items-center pb-12 pt-16 px-8 md:pb-[80px] md:pt-[120px] md:px-[120px] relative w-full">
          <Ilu1 />
          <Txt1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <>
      <Benefit />
      <Benefit1 />
    </>
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full max-w-[319.5px]" data-name="txt">
      <div className="flex flex-col font-['Be Vietnam Pro',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Logic and workflows aligned</p>
      </div>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap">Each system keeps its role, but Rise translates their logic into one coherent operational model that eliminates duplication.</p>
      <p className="decoration-solid font-['Be Vietnam',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-full whitespace-pre-wrap cursor-pointer transition-colors duration-300 hover:text-[#FD8551]">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit2() {
  return (
    <div className="bg-white w-full lg:w-[400px] lg:min-w-[400px] lg:max-w-[400px] shrink-0 relative rounded-[8px] box-border" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-12 md:gap-[96px] items-center pb-12 pt-16 px-8 md:pb-[80px] md:pt-[120px] md:px-[120px] relative w-full">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full max-w-[319.5px]" data-name="txt">
      <div className="flex flex-col font-['Be Vietnam Pro',sans-serif] font-semibold justify-end leading-[0] relative shrink-0 text-[#08344c] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Fewer tools, less complexity</p>
      </div>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#08344c] text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap">By centralizing data and logic, Rise reduces the need for overlapping tools — lowering complexity without forcing teams to change how they work.</p>
      <p className="decoration-solid font-['Be Vietnam',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#426d84] text-[13px] underline w-full whitespace-pre-wrap cursor-pointer transition-colors duration-300 hover:text-[#FD8551]">Learn more, book a meeting</p>
    </div>
  );
}

function Benefit3() {
  return (
    <div className="bg-white w-full lg:w-[400px] lg:min-w-[400px] lg:max-w-[400px] shrink-0 relative rounded-[8px] box-border" data-name="benefit">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-12 md:gap-[96px] items-center pb-12 pt-16 px-8 md:pb-[80px] md:pt-[120px] md:px-[120px] relative w-full">
          <Ilu3 />
          <Txt3 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <>
      <Benefit2 />
      <Benefit3 />
    </>
  );
}

function Frame8() {
  return (
    <div className="flex flex-wrap justify-center gap-px items-stretch w-full max-w-full z-[2] py-0" data-name="benefits">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-2 md:gap-[10px] items-center justify-center relative shrink-0 text-center text-white w-full max-w-full px-2 whitespace-pre-wrap">
      <div className="font-['Be Vietnam Pro',sans-serif] font-normal leading-snug md:leading-[40px] relative shrink-0 text-2xl md:text-[32px] tracking-tight md:tracking-[-0.96px] w-full">
        <p className="mb-0">{`Built for complex `}</p>
        <p>operational systems</p>
      </div>
      <div className="font-['Be Vietnam',sans-serif] font-normal leading-[23px] relative shrink-0 text-[13px] w-full max-w-full">
        <p className="mb-0">{`Rise is designed for environments where operations span multiple systems, teams, and layers `}</p>
        <p>— and where consistency, control, and change must coexist without friction.</p>
      </div>
    </div>
  );
}

const RTB_WORDS = ["Real estate", "Manufacturing", "Smart City", "Defense", "Space"];
const RTB_LEVEL_COLORS = ["#ffffff", "#d4dde1", "#7ea8be", "#426d84", "#28536b"]; // 1–5. szint

function Frame4() {
  const wordRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [centerIndex, setCenterIndex] = useState(0);
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCenter = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDist = Infinity;
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const wordCenter = rect.top + rect.height / 2;
        const dist = Math.abs(wordCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      setCenterIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    const onScrollOrResize = () => {
      if (tickRef.current != null) cancelAnimationFrame(tickRef.current);
      tickRef.current = requestAnimationFrame(() => {
        updateCenter();
        tickRef.current = null;
      });
    };

    updateCenter();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (tickRef.current != null) cancelAnimationFrame(tickRef.current);
    };
  }, []);

  return (
    <div className="content-stretch flex flex-col font-['Be Vietnam Pro',sans-serif] font-light items-center justify-center leading-[normal] pb-6 sm:pb-[24px] relative shrink-0 text-[40px] sm:text-[80px] w-full -space-y-3 sm:-space-y-[24px]">
      {RTB_WORDS.map((label, i) => {
        const level = Math.min(5, Math.abs(i - centerIndex) + 1);
        const color = RTB_LEVEL_COLORS[level - 1];
        return (
          <p
            key={label}
            ref={(el) => { wordRefs.current[i] = el; }}
            className="relative shrink-0 tracking-tight sm:tracking-[-3.2px] transition-colors duration-300"
            style={{ color }}
          >
            {label}
          </p>
        );
      })}
    </div>
  );
}

function Rtb() {
  return (
    <div className="content-stretch flex flex-col gap-12 md:gap-[80px] items-center not-italic py-16 md:py-[120px] relative shrink-0 w-full max-w-full z-[1]" data-name="RTB">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Features() {
  return (
    <div className="relative shrink-0 w-full z-[3] flex justify-center" data-name="Features">
      <div className="flex flex-col items-center w-full max-w-full">
        <div className="content-stretch flex flex-col isolate items-center w-full px-4 py-0 md:px-[160px] relative max-w-[1600px] mx-auto">
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
    <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-center not-italic relative shrink-0 text-white text-center w-full max-w-full px-4">
      <p className="font-['Be Vietnam Pro',sans-serif] font-light leading-tight md:leading-[58px] relative shrink-0 text-3xl md:text-[56px] tracking-tight md:tracking-[-2.24px] w-full max-w-[536px] whitespace-pre-wrap">Let’s talk about your systems</p>
      <p className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] tracking-[-0.32px]">And how Rise can finally make them work as one.</p>
    </div>
  );
}

function Cta3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[2px] shrink-0 transition-all duration-300 hover:bg-[#FD8551] hover:scale-110 cursor-pointer" data-name="cta">
      <p className="font-['Rajdhani',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] uppercase">contact us</p>
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
    <div className="relative shrink-0 w-full z-[2] flex justify-center" data-name="cta">
      <div className="flex flex-col items-center w-full max-w-full">
        <div className="content-stretch flex flex-col gap-8 md:gap-[48px] items-center w-full px-4 py-16 md:px-[160px] md:py-[120px] relative max-w-[1600px] mx-auto">
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
        <div className="content-stretch flex flex-col sm:flex-row font-['Be Vietnam Pro',sans-serif] font-normal items-center justify-between gap-2 leading-[0] not-italic px-4 py-4 sm:px-[56px] sm:py-[23px] relative text-[13px] text-white tracking-[-0.26px] w-full max-w-[1600px] mx-auto text-center sm:text-left min-w-0">
          <div className="flex flex-col justify-center opacity-40 relative shrink-0">
            <p>
              <span className="font-['Be Vietnam Pro',sans-serif] font-normal leading-[normal] not-italic">Rise Engine™</span>
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