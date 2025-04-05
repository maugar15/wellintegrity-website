// script.js

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.fromTo(
    section.querySelector(".section-image"),
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        toggleActions: "play none none none"
      }
    }
  );

  gsap.fromTo(
    section.querySelector(".section-text"),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        toggleActions: "play none none none"
      }
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const section4 = document.querySelector("#section4");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        document.body.classList.remove("hide-header");
      } else {
        document.body.classList.add("hide-header");
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(section4);

  // Set video playback speed for the embedded video (if it exists)
  const video = document.querySelector('.video-embed video');
  if (video) {
    video.playbackRate = 0.5; // Adjust the speed as needed (0.5 = half speed)
  }

     // Listen for time updates on the video
    video.addEventListener('timeupdate', function () {
      if (video.currentTime >= 2) {
        video.currentTime = 0;
      }
    });

    // Modal functionality for early access button
  const modal = document.getElementById("contact-modal");
  const btn = document.getElementById("early-access-btn");
  const closeBtn = document.querySelector(".modal .close");

  // Open the modal when the button is clicked
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Close the modal when the close icon is clicked
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

});
