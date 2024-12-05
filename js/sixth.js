const sixthTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  },
});

const sixthText = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth",
    start: "top top",
    end: "5% top", // 핀핑 기간을 늘림
  },
});

// 애니메이션 추가
sixthText.to(".sixth__title h3", {
  opacity: 1,
  x: 0,
  stagger: 0.3,
  duration: 1, // 필요에 따라 조정
});
