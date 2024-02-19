/***************************************************
==================== JS INDEX ======================
****************************************************
// 00. PreLoader
// 02. Mobile Menu Js
// 03. Sidebar
// 04. Sticky Header Js
// 05. Data Background
// 06. Data Mask
// 07. side - info
// 08. service hover Js
// 09. Mouse Custom Cursor
// 10. Active Odometer Counter  
// 11. magnificPopup js 
// 12. award scroll  
// 13. testimonial slider   
// 14. portfolio slider  
// 15. brand activation
// 16. team slider
// 17. service slider
// 18. gallery slider 
// 19. blogpost slider
// 20. video play 
// 21. case slider
// 22. TEAM ACTIVE
// 23. capabilities accordion Active
// 24. hero-2__img-box Active
// 25. Gsap RegisterPlugin 
// 26. Config GSAP
// 27. Smooth Scroll
// 28. Hero-2 text animation 
// 29. Title-2 Animation 
// 30. Charchater Come Animation
// 31. Inner Page Text Animation  
// 32. Inner Page Text Animation-2  
// 33. Paragraph Animation 
// 34. anim-skewinup Animation 
// 35. Fade In Up Animation |  bdFadeUp 
// 36. Blog Image Mouse Move 
// 37. Work Content Mouse Move 
// 38. Button Movein Animation JS
// 39. animate-image 
// 40. Fade in Left Animation
// 41. Fade in Right Animation 
// 42. portfolio Section
// 43. strategy Section 
// 44. Charchater Come long Animation 
// 45. page shaking fix js 
// 46. Accordion fix js 
// 47. Position Sticky js
// 48. bd one by one Show animation 
// 49. Service 3 Animation 
// 50. Folks Text Animation 
// 51. About Image Trigger
// 52. Project Animation
// 53. Image Tilt JS
// 54. Hero-3 Image Animation JS
// 55. Slider activation Js
// 56. Progress Bar Animation JS
// 57. Testimonial Active JS
// 58. Parallax animation JS

****************************************************/

(function ($) {
  ("use strict");

  var windowOn = $(window);
  let larger = 1600;
  let xxl = 1400;
  let xl = 1200;
  let lg = 992;
  let md = 768;
  let sm = 576;
  let device_width = window.innerWidth;

  /*======================================
	00. PreLoader
	========================================*/
  windowOn.on("load", function () {
    $("#ax-loader-wrap").fadeOut(500);
  });

  /*======================================
	Mobile Menu Js
	========================================*/
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  $("#mobile-menu-media-all").meanmenu({
    meanMenuContainer: ".mobile-menu-media-all",
    meanScreenWidth: "8000",
    meanExpand: ['<i class="fal fa-plus"></i>'],
    meanContract: ['<i class="fal fa-minus"></i>'],
  });

  /*======================================
	03. Sidebar
	========================================*/
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar__area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".sidebar__close-btn").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  /*======================================
	04. Sticky Header Js
	========================================*/
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky");
    } else {
      $("#header-sticky").addClass("sticky");
    }
  });

  /*======================================
	05. Data Background
	========================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  /*======================================
	06. Data mask
	========================================*/
  $("[data-mask").each(function () {
    $(this).css(
      "-webkit-mask-image",
      "url( " + $(this).attr("data-mask") + "  )"
    );
    $(this).css("mask-image", "url( " + $(this).attr("data-mask") + "  )");
  });

  /*======================================
	07. side - info
	========================================*/
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(".offset-btn").on("click", function () {
    $(".offset-content-wrapper").addClass("offset-show");
  });
  $(".offset-content-close").on("click", function () {
    $(".offset-content-wrapper").removeClass("offset-show");
  });

  /*======================================
	08. service hover Js
	========================================*/
  $(".single-service").on("mouseenter", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // /*======================================
  // process hover Js
  // ========================================*/
  // $(document).on('mouseover', '.mouse-over', function () {
  // 	$(this).addClass('active');
  // 	$('.mouse-over').removeClass('active');
  // 	$(this).addClass('active');
  // });

  /*======================================
	09. Mouse Custom Cursor
	========================================*/
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  /*======================================
	10. Active Odometer Counter 
	========================================*/
  jQuery(".odometer").appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });

  /*======================================
	11. magnificPopup js 
	========================================*/
  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    // disableOn: 700,
    type: "iframe",
    mainClass: ".popup-video",
    // removalDelay: 160,
    preloader: true,
    fixedContentPos: false,
  });

  /*======================================
	12. award scroll  
	========================================*/
  let award__scroll = new Swiper(".text__scroll", {
    loop: true,
    freemode: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    speed: 15000,
    simulateTouch: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  /*======================================
	13. testimonial slider  
	========================================*/
  let testimonialSlider = new Swiper(".testimonial-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-button-next",
      prevEl: ".testimonial-slider-button-prev",
    },
  });

  let testimonialSlider2 = new Swiper(".testimonial-slider-2", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".testimonial-slider-2-button-next",
      prevEl: ".testimonial-slider-2-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  /*======================================
	14. portfolio slider  
	========================================*/
  let portfolio = new Swiper(".portfolio__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
    navigation: {
      nextEl: ".portfolio-slider-button-next",
      prevEl: ".portfolio-slider-button-prev",
    },
  });

  /*======================================
	14.1. portfolio slider 
	========================================*/
  let portfolioSlider2 = new Swiper(".strategy__slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
    },
  });

  /*======================================
	15. brand activation 
	========================================*/
  $(".brand-active").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    draggable: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  /*======================================
	15.1. brand activation 
	========================================*/
  var brand2 = new Swiper(".brand-active-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".brand-2-button-next",
      prevEl: ".brand-2-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*======================================
	15.2. brand activation 
	========================================*/
  var brand3 = new Swiper(".swiper-round-active", {
    slidesPerView: 6,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1600: {
        slidesPerView: 6.3,
      },
      1400: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4.5,
      },
      992: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      576: {
        slidesPerView: 2,
      },
      450: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1.1,
      },
    },
  });

  /*======================================
	16. team slider  
	========================================*/
  let teamSlider = new Swiper(".team-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".team-slider-button-next",
      prevEl: ".team-slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  /*======================================
	17. service slider  
	========================================*/
  let serviceSlider = new Swiper(".service-slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".service-slider-button-next",
      prevEl: ".service-slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  /*======================================
	18. gallery slider 
	========================================*/
  let gallerySlider = new Swiper(".gallery-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".gallery-slider-button-next",
      prevEl: ".gallery-slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  /*======================================
	19. blogpost slider
	========================================*/
  let blogpostSlider = new Swiper(".blogpost-slider", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".blogpost-slider-button-next",
      prevEl: ".blogpost-slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  /*======================================
	19.1. blogpost slider
	========================================*/
  let teamSlider5 = new Swiper(".team-slider-active", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  /*======================================
	20. video play 
	========================================*/
  if ($(".video-area").length > 0) {
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");
    const videoOverlay = document.getElementById("video__overlay");
    const areaBtnText = document.getElementById("area-btn-text");

    function togglePlay() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
      circlePlayButton.style.opacity = 0;
      areaBtnText.style.opacity = 0;
      videoOverlay.classList.add("closed");
    });
    video.addEventListener("pause", function () {
      circlePlayButton.style.opacity = 1;
      areaBtnText.style.opacity = 1;
      videoOverlay.classList.remove("closed");
    });
  }

  /*======================================
	21. case slider
	========================================*/
  var caseSlider = new Swiper(".case-slider-active", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    observeParents: true,
    observer: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: "auto",
      },
      992: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      576: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      0: {
        slidesPerView: "auto",
      },
    },
  });

  /*======================================
	22. TEAM ACTIVE
	========================================*/
  $(document).on("mouseover", ".team-item-2", function () {
    $(".team-item-2").removeClass("active");
    $(this).addClass("active");
  });

  /*======================================
	24. hero-2__img-box Active
	========================================*/
  $(document).on("mouseover", ".hero-2__img-box", function () {
    $(this).addClass("active");
    $(".hero-2__img-box").removeClass("active");
    $(this).addClass("active");
  });

  /*======================================
	25. Gsap RegisterPlugin
	========================================*/
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

  /*======================================
	26. Config GSAP
	========================================*/
  gsap.config({
    nullTargetWarn: false,
  });

  /*======================================
	27. Smooth Scroll
	========================================*/
  if ($("#smooth-wrapper").length > 0) {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      ignoreMobileResize: true,
      //preventDefault: true,
      smooth: 0.8,
      ease: "Power3.easeOut",
      effects: true,
      onUpdate: (self) => {
        progress = self.progress;
      },
    });
  }

  /*======================================
	28. Hero-2 text animation
	========================================*/
  var tl = gsap.timeline();
  (split = new SplitText(".hero-2__title, .hero-2__subtitle", {
    type: "chars",
  })),
    tl.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "back",
      stagger: 0.05,
    });
  tl.fromTo(
    ".secondary-img",
    { opacity: 0, ease: "back", scale: 0.7 },
    { opacity: 1, ease: "back", scale: 1 },
    "-=1"
  );
  tl.fromTo(
    ".main-img",
    { opacity: 0, ease: "back", scale: 0.7 },
    { opacity: 1, ease: "back", scale: 1 },
    ">-0.2"
  );

  /*======================================
	29. Title Animation
	========================================*/
  if (device_width > 576) {
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
      });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.3,
      });
    });
  }

  /*======================================
	30. Charchater Come Animation 
	========================================*/
  let char_come = document.querySelectorAll(".animation__char_come");

  char_come.forEach((char_come) => {
    let split_char = new SplitText(char_come, { type: "chars, words," });
    gsap.from(split_char.chars, {
      duration: 1,
      x: 70,
      autoAlpha: 0,
      stagger: 0.06,
    });
  });

  /*======================================
	31. Inner Page Text Animation  
	========================================*/

  let word_come = document.querySelectorAll(".animation__word_come");
  word_come.forEach((word_come) => {
    let split_word_come = new SplitText(word_come, {
      type: "chars words",
      position: "absolute",
    });
    gsap.from(split_word_come.words, {
      duration: 1,
      x: 50,
      autoAlpha: 0,
      stagger: 0.05,
    });
  });
  /*======================================
	32. Inner Page Text Animation-2  
	========================================*/
  let word_come_long = document.querySelectorAll(".animation__word_come_long");
  word_come_long.forEach((word_come_long) => {
    let split_word_come_long = new SplitText(word_come_long, {
      type: "chars words",
      position: "absolute",
    });
    gsap.from(split_word_come_long.words, {
      duration: 1,
      x: 50,
      autoAlpha: 0,
      stagger: 0.5,
    });
  });

  /*======================================
	33. Paragraph Animation
	========================================*/
  if (device_width > 576) {
    let textIntoView = $(".p-text");

    gsap.utils.toArray(textIntoView).forEach(function (elem) {
      const innerSplit = new SplitText(elem, {
        type: "lines",
        linesClass: "text-line",
      });
      const outerSplit = new SplitText(elem, {
        type: "lines",
        linesClass: "text-mask",
      });

      const splitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          scrub: false,
          pin: false,
          start: "top 90%",
          end: "bottom 0%",
        },
        onComplete: () => {
          outerSplit.revert(), innerSplit.revert();
        },
      });

      splitTimeline
        .to(innerSplit.lines, {
          duration: 1.1,
          autoAlpha: 1,
          y: 0,
          ease: "Power4.easeOut",
          stagger: 0.2,
        })
        .to(
          elem,
          {
            duration: 0,
            autoAlpha: 1,
          },
          "<"
        );
    });
  }

  /*======================================
	34. anim-skewinup Animation
	========================================*/
  if (device_width > 576) {
    $(".anim-skewinup").each(function () {
      let tl_SkewInUp = gsap.timeline({
        scrollTrigger: {
          trigger: this,
          start: "top bottom",
          markers: false,
        },
      });

      tl_SkewInUp.from(
        this,
        {
          duration: 1.5,
          skewY: 5,
          transformOrigin: "left top",
          autoAlpha: 0,
          y: 100,
          ease: Expo.easeOut,
          clearProps: "all",
        },
        "+=0.3"
      );
    });
  }
  /*======================================
	35. Fade In Up Animation |  bdFadeUp
	========================================*/
  if (device_width > 576) {
    gsap.set(".bdFadeUp", { y: 30, opacity: 0 });
    const fadeUpArray = gsap.utils.toArray(".bdFadeUp");
    fadeUpArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=150",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.3,
      });
    });
  }
  /*======================================
	36. Blog Image Mouse Move
	========================================*/
  if (device_width > 576) {
    const blogImgItem = document.querySelectorAll(".blog__item-1");

    function followImageCursor(event, blogImgItem) {
      const contentBox = blogImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      blogImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    blogImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 1000);
      });
    });
  }
  /*======================================
	37. Work Content Mouse Move
	========================================*/
  if (device_width > 576) {
    const workContentItem = document.querySelectorAll(".work__item-list");

    function followContentCursor(event, workContentItem) {
      const contentBox2 = workContentItem.getBoundingClientRect();
      const dx = event.clientX - contentBox2.x;
      const dy = event.clientY - contentBox2.y;
      workContentItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    workContentItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followContentCursor(event, item), 1000);
      });
    });
  }
  /*======================================
	38. Button Movein Animation JS
	========================================*/

  const nxfy_all_btns = gsap.utils.toArray(".btn_wrapper");
  if (nxfy_all_btns.length > 0) {
    var nxfy_all_btn = gsap.utils.toArray(".btn_wrapper");
  } else {
    var nxfy_all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const nxfy_all_btn_cirlce = gsap.utils.toArray(".btn-moving");
  nxfy_all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, nxfy_all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(nxfy_all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  /*======================================
	39. animate-image
	========================================*/
  if (device_width > 576) {
    gsap.utils.toArray(".animate-image").forEach((el, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "-990 top",
          end: "990 top",
          toggleActions: "play none none none",
          markers: false,
        },
      });
      tl.set(el, { transformOrigin: "center center" }).fromTo(
        el,
        {
          opacity: 0,
          scale: 0,
          y: "+=990",
        },
        {
          opacity: 1,
          scale: 1,
          y: 10,
          duration: 1,
          immediateRender: false,
        }
      );
    });
  }
  /*======================================
	40. Fade in Left Animation
	========================================*/
  // Get Device width
  if (device_width > sm) {
    gsap.set(".bdFadeLeft", { x: -80, opacity: 0 });
    const fadeArray = gsap.utils.toArray(".bdFadeLeft");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      });
    });
  }

  /*======================================
	41. Fade in Right Animation
	========================================*/
  if (device_width > sm) {
    gsap.set(".bdFadeRight", { x: 80, opacity: 0 });
    const fadeArray = gsap.utils.toArray(".bdFadeRight");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      });
    });
  }

  /*======================================
	42. portfolio Section
	========================================*/
  if (device_width > 1199) {
    var portfolio__wrapper = document.querySelector(".portfolio__wrapper");
    if (portfolio__wrapper) {
      let duration = 1,
        sections = gsap.utils.toArray(".wf_panel"),
        sectionIncrement = duration / (sections.length - 1),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".portfolio__wrapper",
            pin: true,
            scrub: 1,
            start: "top 90",
            end: "+=5000",
          },
        });

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none",
      });

      sections.forEach((section, index) => {
        let tween = gsap.from(section, {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          force3D: true,
          paused: true,
        });
        addSectionCallbacks(tl, {
          start: sectionIncrement * (index - 0.99),
          end: sectionIncrement * (index + 0.99),
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse(),
        });
        index || tween.progress(1);
      });

      function addSectionCallbacks(
        timeline,
        { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
      ) {
        let trackDirection = (animation) => {
            let onUpdate = animation.eventCallback("onUpdate"),
              prevTime = animation.time();
            animation.direction = animation.reversed() ? -1 : 1;
            animation.eventCallback("onUpdate", () => {
              let time = animation.time();
              if (prevTime !== time) {
                animation.direction = time < prevTime ? -1 : 1;
                prevTime = time;
              }
              onUpdate && onUpdate.call(animation);
            });
          },
          empty = (v) => v;
        timeline.direction || trackDirection(timeline);
        start >= 0 &&
          timeline.add(
            () =>
              ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                param
              ),
            start
          );
        end <= timeline.duration() &&
          timeline.add(
            () =>
              ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                param
              ),
            end
          );
      }
    }
  }

  /*======================================
	43. strategy Section
	========================================*/
  if (device_width > 1199) {
    var strategy_wrapper = document.querySelector(".strategy-wrapper");
    if (strategy_wrapper) {
      let duration = 1,
        sections = gsap.utils.toArray(".wf_panel"),
        sectionIncrement = duration / (sections.length - 1),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-wrapper",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=5000",
          },
        });

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none",
      });

      sections.forEach((section, index) => {
        let tween = gsap.from(section, {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          force3D: true,
          paused: true,
        });
        addSectionCallbacks(tl, {
          start: sectionIncrement * (index - 0.99),
          end: sectionIncrement * (index + 0.99),
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse(),
        });
        index || tween.progress(1);
      });

      function addSectionCallbacks(
        timeline,
        { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
      ) {
        let trackDirection = (animation) => {
            let onUpdate = animation.eventCallback("onUpdate"),
              prevTime = animation.time();
            animation.direction = animation.reversed() ? -1 : 1;
            animation.eventCallback("onUpdate", () => {
              let time = animation.time();
              if (prevTime !== time) {
                animation.direction = time < prevTime ? -1 : 1;
                prevTime = time;
              }
              onUpdate && onUpdate.call(animation);
            });
          },
          empty = (v) => v;
        timeline.direction || trackDirection(timeline);
        start >= 0 &&
          timeline.add(
            () =>
              ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                param
              ),
            start
          );
        end <= timeline.duration() &&
          timeline.add(
            () =>
              ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                param
              ),
            end
          );
      }
    }
  }

  /*======================================
	44. Charchater Come long Animation
	========================================*/
  let homebd_banner__anim = gsap.timeline();
  let bd_banner__anim = document.querySelector(".bd_banner__anim");
  let split_bd_banner__anim = new SplitText(bd_banner__anim, { type: "chars" });

  homebd_banner__anim.from(split_bd_banner__anim.chars, {
    duration: 0.5,
    x: 70,
    autoAlpha: 0,
    stagger: 0.08,
  });

  /*======================================
	46. Accordion fix js
	========================================*/
  if ($(".tp-accordion-fix").length > 0) {
    ScrollTrigger.create({
      trigger: ".tp-accordion-fix",
      start: "top top",
      end: "+=0",
      pin: true,
      pinSpacing: "margin",
    });
  }

  /*======================================
	47. Position Sticky js
	========================================*/
  let testInner = window.innerWidth;

  function init() {
    if (testInner <= 991) {
      ScrollTrigger.create({
        trigger: ".bd-position-sticky",
        start: "-100 top",
        end: "10% +20px center",
        pin: ".column.two",
        pinSpacing: false,
      });
    } else {
      ScrollTrigger.create({
        trigger: ".bd-position-sticky",
        start: "-100 top",
        end: "90% +110px center",
        pin: ".column.two",
        pinSpacing: false,
      });
    }
  }
  window.addEventListener("load", function () {
    init();
  });

  /*======================================
	48. bd one by one Show animation
	========================================*/
  if (device_width > 576) {
    var cipro_item = document.querySelectorAll(".bd-one-by-one");
    gsap.set(cipro_item, {
      x: -30,
      opacity: 0,
    });
    gsap.to(cipro_item, {
      scrollTrigger: {
        trigger: cipro_item,
        start: "top center+=250",
      },
      x: 0,
      opacity: 1,
      ease: "back.out(1)",
      duration: 1,
      stagger: 0.3,
    });
  }

  /*======================================
	50. Folks Text Animation
	========================================*/
  if (device_width > 576) {
    let folksBD = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".folks-text",
        start: "bottom 100%-=50px",
      },
    });
    gsap.set(".folks-text", {
      opacity: 0,
    });
    gsap.to(".folks-text", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".folks-text",
        start: "bottom 100%-=50px",
        once: true,
      },
    });
    let mySplitText = new SplitText(".folks-text", {
      type: "words,chars,capitalize",
    });
    let chars = mySplitText.chars;
    let folksGradient = chroma.scale(["#1961C9", "#F8EC3A"]);
    folksBD.to(chars, {
      duration: 0.5,
      scaleY: 0.6,
      ease: "power3.out",
      stagger: 0.04,
      transformOrigin: "center bottom",
    });
    folksBD.to(
      chars,
      {
        yPercent: -20,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8,
      },
      0.5
    );
    folksBD.to(
      chars,
      {
        scaleY: 1,
        ease: "elastic.out(2.5, 0.2)",
        stagger: 0.03,
        duration: 1.5,
      },
      0.5
    );
    folksBD.to(
      chars,
      {
        color: (i, el, arr) => {
          return folksGradient(i / arr.length).hex();
        },
        ease: "power2.out",
        stagger: 0.03,
        duration: 0.3,
      },
      0.5
    );
    folksBD.to(
      chars,
      {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8,
      },
      0.7
    );
    folksBD.to(chars, {
      color: "#1961C9",
      duration: 1.4,
      stagger: 0.05,
    });
  }

  /*======================================
	52. Project Animation
	========================================*/
  if (device_width > 767) {
    let projectline = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-area-2",
        start: "top center-=200",
        pin: ".project__text",
        end: "bottom bottom+=200",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      },
    });

    projectline.to(".project__text", {
      scale: 1.4,
      duration: 1,
    });
    projectline.to(".project__text", {
      scale: 1.4,
      duration: 1,
    });
    projectline.to(
      ".project__text",
      {
        scale: 1,
        duration: 1,
      },
      "+=2"
    );
  }

  let project_lists = gsap.utils.toArray(".project__item");
  project_lists.forEach((project, i) => {
    gsap.set(project, { opacity: 0.7 });
    let t1 = gsap.timeline();

    t1.set(project, {
      position: "relative",
    });
    t1.to(project, {
      scrollTrigger: {
        trigger: project,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false,
      },
      scale: 1,
      opacity: 1,
      rotateX: 0,
    });
  });

  /*======================================
	53. Image Tilt JS
	========================================*/
  let topylotilt = document.querySelectorAll(".topylo-tilt");

  if (topylotilt) {
    VanillaTilt.init(document.querySelectorAll(".topylo-tilt"), {
      max: 5,
      speed: 3000,
    });
  }

  /*======================================
	54. Hero-3 Image Animation JS
	========================================*/

  const hero_3_imgs = gsap.utils.toArray(".hero-3_wrapper");
  if (hero_3_imgs.length > 0) {
    var hero_3_img = gsap.utils.toArray(".hero-3_wrapper");
  } else {
    var hero_3_img = gsap.utils.toArray("#hero-3_wrapper");
  }
  const hero_3_img_cirlce = gsap.utils.toArray(".hero-3-item");
  hero_3_img.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, hero_3_img_cirlce[i], 500);

      if (device_width < 1600 && device_width > 1400) {
        parallaxIt(e, hero_3_img_cirlce[i], 200);
      }
      if (device_width < 1400 && device_width > 1200) {
        parallaxIt(e, hero_3_img_cirlce[i], 80);
      }
      if (device_width < 1200 && device_width > 992) {
        parallaxIt(e, hero_3_img_cirlce[i], 50);
      }
      if (device_width < 992 && device_width > 0) {
        parallaxIt(e, hero_3_img_cirlce[i], 0);
      }
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hero_3_img_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  /*----------------------------------------
	 55. Slider activation Js 
	 Personal Portfolio Hero Slider Activation
	-----------------------------------------*/
  if (jQuery(".slider-active").length > 0) {
    let slider_active = new Swiper(".slider-active", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      autoplay: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
  /*======================================
	56. Progress Bar Animation JS
	========================================*/
  if (device_width > sm) {
    const ax_progress_bar = document.querySelectorAll(".progress__wrapper");
    ax_progress_bar.forEach((element) => {
      const w = element.querySelector(".progress__border");
      const p = element.querySelector(".progress__percent");

      const target = p.textContent;

      const ax_bartl = gsap.timeline({
        defaults: {
          duration: 2,
        },
        scrollTrigger: {
          trigger: element,
        },
      });

      ax_bartl.fromTo(
        w,
        { width: 0 },
        {
          width: target,
        }
      );
      ax_bartl.from(
        p,
        {
          textContent: 0 + "%",
          snap: { textContent: 5 },
        },
        "<"
      );
    });
  }
  /*======================================
	57. Testimonial Active JS
	========================================*/
  var ax_testimonial_active = new Swiper(".ax_testimonial_active", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".ax-testi-button-next",
      prevEl: ".ax-testi-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1601: {
        slidesPerView: 4,
      },
    },
  });

  /*======================================
	58. Parallax animation JS
	========================================*/
  gsap.to(".parallax-image", {
    y: "-30%", // Adjust the value to control the intensity of the parallax effect
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top bottom",
      end: "bottom top", // Adjust the scroll range to reduce padding at the bottom
      scrub: 0.8, // Enables smooth scrolling effect
    },
  });
})(jQuery);




"use strict";
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
var canvas = document.getElementById("fluidCanvas");
canvas.addEventListener("mousemove", function (evt) {
  var mousePos = getMousePos(canvas, evt);
  var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
  // document.getElementsByTagName("h2")[0].innerText = message;
});

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

var config = {
  TEXTURE_DOWNSAMPLE: 1,
  DENSITY_DISSIPATION: 0.98,
  VELOCITY_DISSIPATION: 0.99,
  PRESSURE_DISSIPATION: 0.8,
  PRESSURE_ITERATIONS: 25,
  CURL: 30,
  SPLAT_RADIUS: 0.005,
};

var pointers = [];
var splatStack = [];

var _getWebGLContext = getWebGLContext(canvas);
var gl = _getWebGLContext.gl;
var ext = _getWebGLContext.ext;
var support_linear_float = _getWebGLContext.support_linear_float;

function getWebGLContext(canvas) {
  var params = {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false,
  };

  var gl = canvas.getContext("webgl2", params);

  var isWebGL2 = !!gl;

  if (!isWebGL2)
    gl =
      canvas.getContext("webgl", params) ||
      canvas.getContext("experimental-webgl", params);

  var halfFloat = gl.getExtension("OES_texture_half_float");
  var support_linear_float = gl.getExtension(
    "OES_texture_half_float_linear"
  );

  if (isWebGL2) {
    gl.getExtension("EXT_color_buffer_float");
    support_linear_float = gl.getExtension("OES_texture_float_linear");
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  var internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA;
  var internalFormatRG = isWebGL2 ? gl.RG16F : gl.RGBA;
  var formatRG = isWebGL2 ? gl.RG : gl.RGBA;
  var texType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

  return {
    gl: gl,
    ext: {
      internalFormat: internalFormat,
      internalFormatRG: internalFormatRG,
      formatRG: formatRG,
      texType: texType,
    },
    support_linear_float: support_linear_float,
  };
}

function pointerPrototype() {
  this.id = -1;
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;
  this.down = false;
  this.moved = false;
  this.color = [30, 0, 300];
}

pointers.push(new pointerPrototype());

var GLProgram = (function () {
  function GLProgram(vertexShader, fragmentShader) {
    if (!(this instanceof GLProgram))
      throw new TypeError("Cannot call a class as a function");

    this.uniforms = {};
    this.program = gl.createProgram();

    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
      throw gl.getProgramInfoLog(this.program);

    var uniformCount = gl.getProgramParameter(
      this.program,
      gl.ACTIVE_UNIFORMS
    );

    for (var i = 0; i < uniformCount; i++) {
      var uniformName = gl.getActiveUniform(this.program, i).name;

      this.uniforms[uniformName] = gl.getUniformLocation(
        this.program,
        uniformName
      );
    }
  }

  GLProgram.prototype.bind = function bind() {
    gl.useProgram(this.program);
  };

  return GLProgram;
})();

function compileShader(type, source) {
  var shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    throw gl.getShaderInfoLog(shader);

  return shader;
}

var baseVertexShader = compileShader(
  gl.VERTEX_SHADER,
  "precision highp float; precision mediump sampler2D; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main () {     vUv = aPosition * 0.5 + 0.5;     vL = vUv - vec2(texelSize.x, 0.0);     vR = vUv + vec2(texelSize.x, 0.0);     vT = vUv + vec2(0.0, texelSize.y);     vB = vUv - vec2(0.0, texelSize.y);     gl_Position = vec4(aPosition, 0.0, 1.0); }"
);
var clearShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform float value; void main () {     gl_FragColor = value * texture2D(uTexture, vUv); }"
);
var displayShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; void main () {     gl_FragColor = texture2D(uTexture, vUv); }"
);
var splatShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main () {     vec2 p = vUv - point.xy;     p.x *= aspectRatio;     vec3 splat = exp(-dot(p, p) / radius) * color;     vec3 base = texture2D(uTarget, vUv).xyz;     gl_FragColor = vec4(base + splat, 1.0); }"
);
var advectionManualFilteringShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; vec4 bilerp (in sampler2D sam, in vec2 p) {     vec4 st;     st.xy = floor(p - 0.5) + 0.5;     st.zw = st.xy + 1.0;     vec4 uv = st * texelSize.xyxy;     vec4 a = texture2D(sam, uv.xy);     vec4 b = texture2D(sam, uv.zy);     vec4 c = texture2D(sam, uv.xw);     vec4 d = texture2D(sam, uv.zw);     vec2 f = p - st.xy;     return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); } void main () {     vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;     gl_FragColor = dissipation * bilerp(uSource, coord);     gl_FragColor.a = 1.0; }"
);
var advectionShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; void main () {     vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;     gl_FragColor = dissipation * texture2D(uSource, coord); }"
);
var divergenceShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; vec2 sampleVelocity (in vec2 uv) {     vec2 multiplier = vec2(1.0, 1.0);     if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }     if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }     if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }     if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }     return multiplier * texture2D(uVelocity, uv).xy; } void main () {     float L = sampleVelocity(vL).x;     float R = sampleVelocity(vR).x;     float T = sampleVelocity(vT).y;     float B = sampleVelocity(vB).y;     float div = 0.5 * (R - L + T - B);     gl_FragColor = vec4(div, 0.0, 0.0, 1.0); }"
);
var curlShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; void main () {     float L = texture2D(uVelocity, vL).y;     float R = texture2D(uVelocity, vR).y;     float T = texture2D(uVelocity, vT).x;     float B = texture2D(uVelocity, vB).x;     float vorticity = R - L - T + B;     gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0); }"
);
var vorticityShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main () {     float L = texture2D(uCurl, vL).y;     float R = texture2D(uCurl, vR).y;     float T = texture2D(uCurl, vT).x;     float B = texture2D(uCurl, vB).x;     float C = texture2D(uCurl, vUv).x;     vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));     force *= 1.0 / length(force + 0.00001) * curl * C;     vec2 vel = texture2D(uVelocity, vUv).xy;     gl_FragColor = vec4(vel + force * dt, 0.0, 1.0); }"
);
var pressureShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     float C = texture2D(uPressure, vUv).x;     float divergence = texture2D(uDivergence, vUv).x;     float pressure = (L + R + B + T - divergence) * 0.25;     gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0); }"
);
var gradientSubtractShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     vec2 velocity = texture2D(uVelocity, vUv).xy;     velocity.xy -= vec2(R - L, T - B);     gl_FragColor = vec4(velocity, 0.0, 1.0); }"
);

var textureWidth = void 0;
var textureHeight = void 0;
var density = void 0;
var velocity = void 0;
var divergence = void 0;
var curl = void 0;
var pressure = void 0;

initFramebuffers();

var clearProgram = new GLProgram(baseVertexShader, clearShader);
var displayProgram = new GLProgram(baseVertexShader, displayShader);
var splatProgram = new GLProgram(baseVertexShader, splatShader);
var advectionProgram = new GLProgram(
  baseVertexShader,
  support_linear_float ? advectionShader : advectionManualFilteringShader
);
var divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
var curlProgram = new GLProgram(baseVertexShader, curlShader);
var vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
var pressureProgram = new GLProgram(baseVertexShader, pressureShader);
var gradienSubtractProgram = new GLProgram(
  baseVertexShader,
  gradientSubtractShader
);

function initFramebuffers() {
  textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
  textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

  var iFormat = ext.internalFormat;
  var iFormatRG = ext.internalFormatRG;
  var formatRG = ext.formatRG;
  var texType = ext.texType;

  density = createDoubleFBO(
    0,
    textureWidth,
    textureHeight,
    iFormat,
    gl.RGBA,
    texType,
    support_linear_float ? gl.LINEAR : gl.NEAREST
  );
  velocity = createDoubleFBO(
    2,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    support_linear_float ? gl.LINEAR : gl.NEAREST
  );
  divergence = createFBO(
    4,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
  curl = createFBO(
    5,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
  pressure = createDoubleFBO(
    6,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
}

function createFBO(texId, w, h, internalFormat, format, type, param) {
  gl.activeTexture(gl.TEXTURE0 + texId);

  var texture = gl.createTexture();

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    internalFormat,
    w,
    h,
    0,
    format,
    type,
    null
  );

  var fbo = gl.createFramebuffer();

  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  gl.viewport(0, 0, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);

  return [texture, fbo, texId];
}

function createDoubleFBO(
  texId,
  w,
  h,
  internalFormat,
  format,
  type,
  param
) {
  var fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
  var fbo2 = createFBO(
    texId + 1,
    w,
    h,
    internalFormat,
    format,
    type,
    param
  );

  return {
    get first() {
      return fbo1;
    },
    get second() {
      return fbo2;
    },
    swap: function swap() {
      var temp = fbo1;

      fbo1 = fbo2;
      fbo2 = temp;
    },
  };
}

var blit = (function () {
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
    gl.STATIC_DRAW
  );
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array([0, 1, 2, 0, 2, 3]),
    gl.STATIC_DRAW
  );
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  return function (destination) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
})();

var lastTime = Date.now();

update();

function update() {
  resizeCanvas();

  var dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
  lastTime = Date.now();

  gl.viewport(0, 0, textureWidth, textureHeight);

  if (splatStack.length > 0) {
    for (var m = 0; m < splatStack.pop(); m++) {
      var color = [
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
      ];
      var x = canvas.width * Math.random();
      var y = canvas.height * Math.random();
      var dx = 1000 * (Math.random() - 0.5);
      var dy = 1000 * (Math.random() - 0.5);

      splat(x, y, dx, dy, color);
    }
  }

  advectionProgram.bind();
  gl.uniform2f(
    advectionProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(advectionProgram.uniforms.uSource, velocity.first[2]);
  gl.uniform1f(advectionProgram.uniforms.dt, dt);
  gl.uniform1f(
    advectionProgram.uniforms.dissipation,
    config.VELOCITY_DISSIPATION
  );
  blit(velocity.second[1]);
  velocity.swap();

  gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(advectionProgram.uniforms.uSource, density.first[2]);
  gl.uniform1f(
    advectionProgram.uniforms.dissipation,
    config.DENSITY_DISSIPATION
  );
  blit(density.second[1]);
  density.swap();

  for (var i = 0, len = pointers.length; i < len; i++) {
    var pointer = pointers[i];

    if (pointer.moved) {
      splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
      pointer.moved = false;
    }
  }

  curlProgram.bind();
  gl.uniform2f(
    curlProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.first[2]);
  blit(curl[1]);

  vorticityProgram.bind();
  gl.uniform2f(
    vorticityProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
  gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
  gl.uniform1f(vorticityProgram.uniforms.dt, dt);
  blit(velocity.second[1]);
  velocity.swap();

  divergenceProgram.bind();
  gl.uniform2f(
    divergenceProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.first[2]);
  blit(divergence[1]);

  clearProgram.bind();

  var pressureTexId = pressure.first[2];

  gl.activeTexture(gl.TEXTURE0 + pressureTexId);
  gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
  gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
  gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
  blit(pressure.second[1]);
  pressure.swap();

  pressureProgram.bind();
  gl.uniform2f(
    pressureProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
  pressureTexId = pressure.first[2];
  gl.activeTexture(gl.TEXTURE0 + pressureTexId);

  for (var _i = 0; _i < config.PRESSURE_ITERATIONS; _i++) {
    gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
    gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
    blit(pressure.second[1]);
    pressure.swap();
  }

  gradienSubtractProgram.bind();
  gl.uniform2f(
    gradienSubtractProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(
    gradienSubtractProgram.uniforms.uPressure,
    pressure.first[2]
  );
  gl.uniform1i(
    gradienSubtractProgram.uniforms.uVelocity,
    velocity.first[2]
  );
  blit(velocity.second[1]);
  velocity.swap();

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  displayProgram.bind();
  gl.uniform1i(displayProgram.uniforms.uTexture, density.first[2]);
  blit(null);

  requestAnimationFrame(update);
}

function splat(x, y, dx, dy, color) {
  splatProgram.bind();
  gl.uniform1i(splatProgram.uniforms.uTarget, velocity.first[2]);
  gl.uniform1f(
    splatProgram.uniforms.aspectRatio,
    canvas.width / canvas.height
  );
  gl.uniform2f(
    splatProgram.uniforms.point,
    x / canvas.width,
    1.0 - y / canvas.height
  );
  gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
  gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS);
  blit(velocity.second[1]);
  velocity.swap();

  gl.uniform1i(splatProgram.uniforms.uTarget, density.first[2]);
  gl.uniform3f(
    splatProgram.uniforms.color,
    color[0] * 0.1,
    color[1] * 0.3,
    color[2] * 0.3
  );
  blit(density.second[1]);
  density.swap();
}

function resizeCanvas() {
  (canvas.width !== canvas.clientWidth ||
    canvas.height !== canvas.clientHeight) &&
    ((canvas.width = canvas.clientWidth),
    (canvas.height = canvas.clientHeight),
    initFramebuffers());
}

var count = 0;
var colorArr = [
  Math.random() + 0.2,
  Math.random() + 0.2,
  Math.random() + 0.2,
];

canvas.addEventListener("mousemove", function (e) {
  count++;

  count > 25 &&
    ((colorArr = [
      Math.random() + 0.2,
      Math.random() + 0.2,
      Math.random() + 0.2,
    ]),
    (count = 0));

  pointers[0].down = true;
  pointers[0].color = colorArr;
  pointers[0].moved = pointers[0].down;
  pointers[0].dx = (e.offsetX - pointers[0].x) * 10.0;
  pointers[0].dy = (e.offsetY - pointers[0].y) * 10.0;
  pointers[0].x = e.offsetX;
  pointers[0].y = e.offsetY;
});

canvas.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();

    var touches = e.targetTouches;

    count++;

    count > 25 &&
      ((colorArr = [
        Math.random() + 0.2,
        Math.random() + 0.2,
        Math.random() + 0.2,
      ]),
      (count = 0));

    for (var i = 0, len = touches.length; i < len; i++) {
      if (i >= pointers.length) pointers.push(new pointerPrototype());

      pointers[i].id = touches[i].identifier;
      pointers[i].down = true;
      pointers[i].x = touches[i].pageX;
      pointers[i].y = touches[i].pageY;
      pointers[i].color = colorArr;

      var pointer = pointers[i];

      pointer.moved = pointer.down;
      pointer.dx = (touches[i].pageX - pointer.x) * 10.0;
      pointer.dy = (touches[i].pageY - pointer.y) * 10.0;
      pointer.x = touches[i].pageX;
      pointer.y = touches[i].pageY;
    }
  },
  false
);

function m(t) {
  for (
    var e,
      n = document.getElementById(t),
      i = n.innerHTML.replace("&amp;", "&").split(""),
      a = "",
      o = 0,
      s = i.length;
    s > o;
    o++
  ) {
    e = i[o].replace("&", "&amp");
    a += e.trim()
      ? '<span class="letter-' + o + '">' + e + "</span>"
      : "&nbsp;";
  }

  n.innerHTML = a;

  setTimeout(function () {
    n.className = "transition-in";
  }, 500 * Math.random() + 500);
}

window.onload = function () {
  m("h1");
};

