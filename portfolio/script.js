// Priyam Singh — Portfolio interactions

document.addEventListener("DOMContentLoaded", () => {

  // Mark reveal targets
  const revealTargets = document.querySelectorAll(
    ".about-text, .about-photo-col, .col-left, .col-right, .hobby, .experience-box, .timeline li"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  // Smooth-scroll for in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target){
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});
