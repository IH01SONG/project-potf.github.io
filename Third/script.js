// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("포트폴리오 웹사이트 JavaScript가 로드되었습니다!");

  // 네비게이션 링크 클릭 시 부드러운 스크롤 (Bootstrap의 scrollspy와 함께 사용하면 좋음)
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // 스크롤 시 네비게이션 바에 그림자 추가 (선택 사항)
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg"); // Bootstrap 그림자 클래스
    } else {
      navbar.classList.remove("shadow-lg");
    }
  });
});
