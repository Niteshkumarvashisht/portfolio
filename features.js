const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);










gsap.to(".video-div",{
    width : "95%",
    height: "90%",
    scrollTrigger:{
    trigger : ".video-div",
    scroller : "body",
    start: "top 80%",
    end : "top 50%",
    scrub:3,
  markers:false,
  
    }

  })

gsap.to(".header",{
  height: "11vh",
  position:"fixed",
  scrollTrigger:{
    trigger : ".video-div",
    scroller : "body",
    start: "top 80%",
    end : "top 50%",
    scrub:1,
  markers:false,
  
    }

  })

