gsap.registerPlugin(ScrollTrigger);

const thirdTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "top center",
  },
});

thirdTL.to(".fadeText", {
  duration: 0.1,
  opacity: 1,
  y: 0,
  stagger: 0.2,
});

thirdTL.to("#strategy", {
  text: "戦略",
});
thirdTL.to(
  "#ui",
  {
    text: "ユーザー",
    repeat: 1,
    yoyo: true,
    repeatDelay: 1.2,
  },
  "<"
);
thirdTL.to(
  "#website",
  {
    text: "ウェブサイト",
    duration: 2,
  },
  "<"
);
