const scTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

scTL.to(".second_title", {
  opacity: 1,
  stagger: 1,
});
