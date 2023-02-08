$(function(){


  // motion = gsap.timeline({
  //   onUpdate: function(){
  //     console.log(this.progress());
  //   }
  // })

  // gsap.to('.loader', 2,{ background: '#00f', 
  //   onUpdate: function() { 
  //     $('.loader').html( Math.floor(this.progress()*100) );
  //   } 
  // });
  // motion.progress()


  // start 부분
  
  gsap.to('.header-bottom > *',{
    yPercent:100,
    opacity:1,
    stagger:.3,
  })

  const title = new SplitType('.header-top span', { types: 'words, chars', });

  gsap.from(title.chars,{
    delay:1,
    yPercent:100,
    stagger:{
        amount:.9,

    }, 
  })


  const barMotion = gsap.timeline({
    delay:1,
  })

  barMotion
  .from('.header-top .bar',{
    xPercent:-100,

  })
  .from('.sc-intro .intro-box1 .bar',{
    xPercent:-100,

  })
  .from('.sc-intro .intro-box2 .bar',{
    xPercent:-100,
  })

  // project
  const pjTitle = new SplitType('.sc-project .title strong', { types: 'words, chars', });
  const pjMotion = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-project',
      start:'-10% 60%',
      end:'5% 50%',
      scrub:1,
      invalidateOnRefresh: true,

    },
  
  })
  pjMotion
  .to(pjTitle .chars,{
    yPercent:100,
    stagger:{
        amount:1,
        from:'random'

    }, 
  })
  .to('.sc-project .bar',{
    width:'100%'
  })

  // intro split
  const split = new SplitType('.sc-intro .txt1', { types: 'words, chars',});
  gsap.from(split.chars,{
    delay:1.5,
    yPercent:100,
    stagger:{
        amount:.9,

    }, 
  });

  gsap.from('.menu-item > a',{
    delay:1.8,
    yPercent:100,
    opacity:0,
    stagger:{
        amount:.9,

    }, 
  })

  // study
  const study = new SplitType('.sc-study .title', { types: 'words, chars',});
  const studyTitle = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-study',
      start:'-20% 60%',
      end:'0% 50%',
      scrub:1,

    },
  })
  studyTitle
  .from(study.chars,{
    yPercent:100,
    stagger:{
        amount:.9,
    }, 
  })
  .from('.sc-study .bar',{
    width:0,
    invalidateOnRefresh: true,
  })

  // button-top
  
  let lastScroll=0;

  $(window).scroll(function(){
      curr = $(this).scrollTop();

      if (curr > lastScroll) {
          $('.btn-top').removeClass('show');
      } else {
          $('.btn-top').addClass('show');
      }

      if(curr < 100){
          $('.btn-top').removeClass('show');
      }
      lastScroll = curr;
  })


  $('.btn-top').click(function(){
      window.scrollTo({top:0,behavior:'smooth',});
  })


  // $('.menu-item a').click(function(e){
  //   e.preventDefault();
  //   targetPos = $(this).data('pos');

  //   resultOffset = $(targetPos).offset().top;

  //   window.scrollTo({top:resultOffset,behavior:'smooth',});


  // })




// project-hover


// const marMotion = gsap.from(headTxt.chars, {
//   yPercent:100,
//   stagger:{
//     duration:6,
//     amount:2,
//     from:'random',
//     loop:true,
//   },   
//   // paused:true,
// });


const headTxt = new SplitType('.sc-project .hover-txt span', { types: 'words, chars', });

gsap.set('.item .char',{yPercent:100})
const marMotion = gsap.to( '.item .char' , {
  delay:0.3,
  yPercent:0,
    stagger:{
        amount:0.5,
        from:'random',
        loop:true,
    },   
    paused:true,
});


$(".sc-project .item").hover(function(){
    marMotion.restart();
    });



// email
const emailTxt = new SplitType('.sc-contact .mail-hover span', { types: 'words, chars', });

// const emailMotion = gsap.from(emailTxt.chars,{
//   yPercent:100,
//     stagger:{
//         amount:1,
//         loop:true,
//     },   
// });


// const h1 = document.querySelector(".sc-contact .mail-box");
// const hover = gsap.from(emailTxt.chars, {
//   yPercent:100,
//     stagger:{
//         duration:.6,
//         amount:1,
//     },   
// });

// const motion = gsap.to('.mail-title',{
//   yPercent:100,
//   stagger:{
//       duration:1,
//       amount:1,
//   },  
// })

// h1.addEventListener("mouseenter", () => motion.play());
// h1.addEventListener("mouseleave", () => motion.reverse());
// h1.addEventListener("mouseenter", () => hover.play());
// h1.addEventListener("mouseleave", () => hover.reverse());

// var tl = new TimelineMax({ paused: true });
// tl.to(".box", 2, { rotation: 360, ease: Power2.easeInOut });

// document.querySelector("#box1").addEventListener("mouseenter", doCoolStuff);

// function doCoolStuff() {
//   if (!tl.isActive()) {
//     tl.play(0);
//   }
// }


       


})