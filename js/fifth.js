// GSAP 타임라인 생성 및 ScrollTrigger 설정
const fifthTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth",
    start: "top top",
    end: "bottom top", // 핀핑 기간을 늘림
    pin: true,
    pinSpacing: false,
    scrub: 1,
  },
});

const fifthTLText = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth",
    start: "top top",
    end: "5% top", // 핀핑 기간을 늘림
    scrub: 1,
  },
});

// 애니메이션 추가
fifthTLText.to(".fifth__title h3", {
  opacity: 1,
  y: 0,
  stagger: 0.3,
  duration: 1, // 필요에 따라 조정
});
