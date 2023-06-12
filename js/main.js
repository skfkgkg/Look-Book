//swiper slide
new Swiper('.promotion .promotion-slide', {
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true,
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
  },
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next', //이전버튼
    prevEl: '.swiper-button-prev', //다음버튼
  },

});


// swiper2 area
new Swiper('.girl .swiper2-slide', {
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true,
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
  },
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.girl .swiper-pagination',
    clickable: true, //클릭여부 설정
  },
});

new Swiper('.man .swiper3-slide', {
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true,
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
  },
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.man .swiper-pagination',
    clickable: true, //클릭여부 설정
  },
});




//main visual 이미지 순차적으로 등장---------------------------------------------
//gsap.to(요소, 지속시간초단위설정, 옵션)
const fadeEl = document.querySelectorAll('.animate .fade-in');
fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay : (index + 1) * 0.7, //0.7 , 1.4, 2.1, 2.8
    opacity : 1
  })
});

// Scroll Magic-----------------------------------
const spyEl = document.querySelectorAll('.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  //show넣었다가 뺐다가
  //.setClassToggle(토글할요소, '넣었다뺄 class이름')
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});



// 더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  const first = Array.from(hide).slice(0,6); //한줄에 6개씩 보이게
  first.forEach(item =>{
    item.classList.remove('hide');
  });
  if(hide.length <= 6){
    hideMoreButton();
  }
}


// 보일 내용이 끝나면 더보기 버튼이 사라짐.
function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}


//top버튼
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    //뱃지 숨기기
    gsap.to(badgeEl, 0.6,{
      opacity : 0,
      display : 'none'
    });

    //탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0
    });
  } else{
    //뱃지 보이기
    gsap.to(badgeEl, 0.6,{
      opacity : 1,
      display : 'block'
    });

    //탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100
    });
  }
},300));

//top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo : 0
  })
});



