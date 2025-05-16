const btnTop = document.querySelector(".btn-top");
const footer = document.querySelector("footer");

// 스크롤 시 버튼 노출 및 푸터 오버랩 방지
window.addEventListener("scroll", () => {
  // 1. 스크롤 시 버튼 보이기/숨기기
  if (window.scrollY > 0) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }

  // 2. 푸터 아래로 버튼이 내려가지 않게 처리
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const footerTop = footer.offsetTop;
  if (scrollY + windowHeight > footerTop) {
    btnTop.style.position = "absolute";
    btnTop.style.bottom = windowHeight + scrollY - footerTop + 20 + "px";
  } else {
    btnTop.style.position = "fixed";
    btnTop.style.bottom = "50px";
  }
});

// 3. 부드럽게 최상단으로 스크롤
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 모달 구현부
// 요소 선택
const form = document.querySelector('form[action="subscribe"]');
const emailInput = document.getElementById("subscribe-email");
const modalOverlay = document.querySelector(".modal-overlay");
const okBtn = document.querySelector(".ok-btn");

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 폼 제출 이벤트
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email) {
    alert("이메일을 입력해주세요.");
    emailInput.focus();
    return;
  }
  if (!isValidEmail(email)) {
    alert("올바른 이메일 형식이 아닙니다.");
    emailInput.focus();
    return;
  }

  // 모달 표시
  modalOverlay.classList.add("show");
});

// OK 버튼 클릭 시 모달 닫기
okBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("show");
});

// 오버레이 클릭 시 모달 닫기
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("show");
  }
});

// 햄버거 시작
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-btn");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

// 햄버거 버튼 클릭 시 토글
hamburgerBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("active");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// 닫기 버튼, 오버레이, 메뉴 내 링크 클릭 시 모두 닫기
closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);
mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMenu));

function openMenu() {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
}
function closeMenu() {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
}
