// ==========================
// BOUTON EXPLORER LES IA
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("exploreBtn");

    if (btn) {
        btn.addEventListener("click", () => {

            const target = document.getElementById("popular");

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }

});

// ==========================
// FOND ÉTOILÉ ANIMÉ
// ==========================

const canvas = document.getElementById("stars");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let stars = [];
    let w, h;

    function resize() {

        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;

        stars = [];

        for (let i = 0; i < 250; i++) {

            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                z: Math.random() * w
            });

        }

    }

    function draw() {

        ctx.fillStyle = "#000814";
        ctx.fillRect(0, 0, w, h);

        for (let s of stars) {

            s.z -= 2;

            if (s.z <= 0) {

                s.z = w;

                s.x = Math.random() * w;
                s.y = Math.random() * h;

            }

            let k = 128 / s.z;

            let px = (s.x - w / 2) * k + w / 2;
            let py = (s.y - h / 2) * k + h / 2;

            let size = (1 - s.z / w) * 2;

            let blue = 120 + Math.random() * 100;

            ctx.beginPath();

            ctx.fillStyle =
                `rgba(${blue},${150 + Math.random() * 80},255,0.8)`;

            ctx.arc(px, py, size, 0, Math.PI * 2);

            ctx.fill();

        }

        requestAnimationFrame(draw);

    }

    window.addEventListener("resize", resize);

    resize();
    draw();

}

// ==========================
// ANIMATION DES CARDS
// ==========================

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

    const cardObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    cards.forEach(card => cardObserver.observe(card));

}

// ==========================
// PARALLAX HERO
// ==========================

const hero = document.querySelector(".hero");

if (hero) {

    window.addEventListener("scroll", () => {

        let scroll = window.scrollY;

        hero.style.transform =
            `translateY(${scroll * 0.3}px)`;

    });

}

// ==========================
// TIMELINE ANIMÉE
// ==========================

window.addEventListener("scroll", () => {

    const items =
        document.querySelectorAll(".timeline-item");

    items.forEach(item => {

        const rect =
            item.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform =
                "translateY(0)";

        }

    });

});

// ==========================
// ANIMATION FIN DU SITE
// ==========================

const endSection =
    document.querySelector("#end-universe");

if (endSection) {

    const endObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    endSection.classList.add("active");

                }

            });

        }, {
            threshold: 0.5
        });

    endObserver.observe(endSection);

}