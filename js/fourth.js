const fourthTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    start: "top center",
  },
});

fourthTL.to("#our__life", {
  text: "僕たちの人生は...",
  duration: 3,
  yoyo: true,
  repeat: 1,
});

const fourthTL1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    start: "10% center",
    end: "bottom bottom",
    pin: true,
    scrub: 3,
  },
});
fourthTL1.to(".slider", {
  x: -1800,
  duration: 20,
});
fourthTL1.to(".slide_text", {
  y: 0,
  duration: 1,
});
fourthTL1.to("#slide_text_first", { opacity: 1, x: 0, duration: 2 });
fourthTL1.to("#slide_text_second", { opacity: 1, x: 0, duration: 2 }, "<");
fourthTL1.to("#slide_text_third", { opacity: 1, x: 0, duration: 2 }, "<");
fourthTL1.to("#slide_text_fourth", { opacity: 1, x: 0, duration: 2 }, "<");
fourthTL1.to("#slide_text_special", { text: "다른 접근 방식" });
fourthTL1.to("#slide_text_special1", { text: "월클 곽경섭" }, "<");
