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
});