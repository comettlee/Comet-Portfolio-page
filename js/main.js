//COMMON

// 현재 연도 
// document.querySelector('.this-year').textContent = new Date().getFullYear();


// HOME

// HOME SLIDE 애니메이션
const profileHead = document.querySelector('.home__head');
const profileInfo = document.querySelector('.home__info');

setTimeout(function () {
    profileHead.classList.remove('hidden');
    profileHead.classList.add('show');
}, 1000);

setTimeout(function () {
    profileInfo.classList.remove('hidden');
    profileInfo.classList.add('show');
}, 1500);

// 상단 메뉴바 메뉴리스트 클릭시 보이게
const mainMenu = document.querySelector('.main-menu');

document.querySelector('.list-icon').addEventListener('click', () => {
        mainMenu.classList.toggle('active');
})



// 상단 메뉴 클릭시 해당 View로 이동 (화살표 함수 사용)
document.querySelector('.main-menu').addEventListener('click', e => {
    let scrollToView = '#' + e.target.textContent;
    document.querySelector(scrollToView).scrollIntoView({
        behavior: 'smooth'
    });
});