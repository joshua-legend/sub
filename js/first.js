gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to("#brand_name", {
  delay: 1,
  duration: 2,
  text: {
    value: "경섭이, 이번 학기 우수성적 받다니! ",
  },
});

gsap.to("#brand_desc", {
  delay: 5,
  duration: 4,
  text: {
    value:
      "경섭아, 우수 성적까지 챙기다니 정말 대단해! 보드게임 마스터로서의 전략뿐만 아니라, 친구들을 열심히 코칭하고 스터디도 빡세게 해주다니 우리 반의 슈퍼 히어로 맞지? 매일 출결도 완벽하게 지키는 너 덕분에 강사새끼도 한숨 돌릴 수 있었어. 앞으로도 너의 다재다능함을 기대할게! 우수학생 진심으로 축하해",
  },
});
