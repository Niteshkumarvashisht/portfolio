// Selectors
const cursor = document.querySelector(".cursor");
const cursor1 = document.querySelector(".cursor1");
const videoPage = document.querySelector(".video-page");
const videoHeading = document.querySelector(".video-page .vodeoheading");
const videoDiv = document.querySelector(".video-div video");
const projectLinks = document.querySelectorAll(".l");

// Cursor Movement
document.addEventListener("mousemove", (e) => {
  const { pageX, pageY } = e;
  gsap.to([cursor, cursor1], {
    left: pageX,
    top: pageY,
    duration: 0.8,
    ease: "power3.out",
  });
});

// Video Page Interaction
videoPage.addEventListener("mouseenter", () => {
  gsap.to(videoHeading, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power3.out",
  });
  gsap.to([cursor, cursor1], {
    scale: 0,
    opacity: 0,
  });
});

videoPage.addEventListener("click", () => {
  videoDiv.muted = !videoDiv.muted;
  videoHeading.textContent = videoDiv.muted ? "unMute" : "Mute";
});

videoPage.addEventListener("mousemove", (e) => {
  gsap.to(videoHeading, {
    left: e.pageX - 70,
    top: e.pageY - 15,
    duration: 0.7,
    ease: "power3.out",
  });
});

videoPage.addEventListener("mouseleave", () => {
  videoDiv.muted = true;
  videoHeading.textContent = "unMute";
  gsap.to([cursor, cursor1], {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power3.out",
  });
  gsap.to(videoHeading, {
    scale: 0,
    opacity: 0,
  });
});

// Hide Cursor on Project Links Hover
projectLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to([cursor, cursor1], {
      scale: 0,
      opacity: 0,
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to([cursor, cursor1], {
      scale: 1,
      opacity: 1,
    });
  });
});
