=document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky Navbar Effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Reveal Elements on Scroll
    const revealElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });

    // Contact Form Submission (Basic Alert)
    document.querySelector(".contact form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        this.reset();
    });
});