// portfolio-detail.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("포트폴리오 상세 페이지 JavaScript가 로드되었습니다!");

  // 네비게이션 바 스크롤 시 그림자 추가 (선택 사항)
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg"); // Bootstrap 그림자 클래스
    } else {
      navbar.classList.remove("shadow-lg");
    }
  });

  // 만약 URL 파라미터 등을 통해 특정 프로젝트를 로드해야 한다면 여기에 로직 추가
  // 예: const urlParams = new URLSearchParams(window.location.search);
  //     const projectId = urlParams.get('id');
  //     if (projectId) {
  //         loadProjectDetails(projectId);
  //     }
});

// function loadProjectDetails(projectId) {
//     // 실제 프로젝트 데이터를 불러와서 페이지에 렌더링하는 로직 (API 호출 등)
//     console.log(`Loading details for project: ${projectId}`);
//     // 예시: fetch('/api/projects/' + projectId).then(response => response.json()).then(data => { ... });
// }
