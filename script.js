/* =========================================================
   KreTeX AI — Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
        });

        const mobileLinks = mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("open");
            });
        });
    }


    /* =========================
       CLOSE MENU OUTSIDE
    ========================= */

    document.addEventListener("click", (event) => {

        if (!menuBtn || !mobileNav) return;

        if (
            !mobileNav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            mobileNav.classList.remove("open");
        }

    });


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();

            const service =
                document.getElementById("service")?.value;

            const message =
                document.getElementById("message")?.value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please fill in your name, email and project details."
                );

                return;
            }


            const whatsappMessage =
                `Hello KreTeX AI,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A` +
                `Service: ${encodeURIComponent(service || "Not selected")}%0A%0A` +
                `Project Details:%0A${encodeURIComponent(message)}`;


            /*
              IMPORTANT:
              Replace YOUR_WHATSAPP_NUMBER below
              with your WhatsApp number.

              Example:
              919876543210
            */

            const whatsappNumber = "YOUR_WHATSAPP_NUMBER";


            if (whatsappNumber !== "YOUR_WHATSAPP_NUMBER") {

                window.open(
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                    "_blank"
                );

            } else {

                alert(
                    "Your message is ready. Add your WhatsApp number in script.js to activate direct WhatsApp sending."
                );

            }

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".desktop-nav a");


    const updateActiveNav = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );


    updateActiveNav();


    /* =========================
       SMOOTH ANCHOR SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       SIMPLE REVEAL ANIMATION
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .portfolio-card, .price-card, .contact-item, .stat"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        entry.target.classList.add("revealed");

                        obs.unobserve(entry.target);

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(element);

        });

    }

});


/* =========================
   REVEAL CLASS
========================= */

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);
