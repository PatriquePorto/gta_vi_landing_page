import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useMaskSettings } from "../../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const scrollIndicator = useRef(null);

  useGSAP(
    () => {
      const bounceTimeline = gsap.timeline({
        repeat: Infinity,
        yoyo: true,
      });

      bounceTimeline.to(scrollIndicator.current, {
        y: 12,
        opacity: 0.6,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: scrollIndicator }
  );

  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", { marginTop: "40vh", opacity: 0 });

    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper",{ maskPosition: maskPos, maskSize, ease: "power1.inOut" }, "<" )
      .to(".mask-wrapper", { opacity: 0 })
      .to(".overlay-logo", {opacity: 1, onComplete: () => {
            gsap.to(".overlay-logo", { opacity: 0, duration: 1 }); }, },"<")
      .to(".entrance-message",{duration: 1, ease: "power1.inOut", maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)", }, "<");
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
      </div>

      <div className="play-img cursor-pointer w-33 h-33 flex top-123 left-238  z-1 hover:scale-105 transition duration-300 ease-in-out fade-out">
        <img
          src="/images/play.svg"
          alt="play"
          className="w-12 ml-1 color-black"
        />
      </div>

      <div ref={scrollIndicator} className="scroll-indicator">
        <svg
          width="34"
          height="14"
          viewBox="0 0 34 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="_1smfa210"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.5609 1.54346C34.0381 2.5875 33.6881 3.87821 32.7791 4.42633L17.0387 13.9181L1.48663 4.42115C0.580153 3.86761 0.235986 2.57483 0.717909 1.53365C1.19983 0.492464 2.32535 0.097152 3.23182 0.650692L17.0497 9.08858L31.051 0.64551C31.96 0.0973872 33.0837 0.499411 33.5609 1.54346Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper w-40 h-41 top-40">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>
      <ComingSoon />
    </section>
  );
};

export default Hero;
