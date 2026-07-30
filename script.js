```javascript
/* =========================
   ПЛАВНАЯ ПРОКРУТКА
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   ФАКТЫ
========================= */

const facts = [

    "Свет от Солнца достигает Земли примерно за 8 минут.",

    "Юпитер — крупнейшая планета Солнечной системы.",

    "Сатурн известен своей системой колец.",

    "Млечный Путь является нашей галактикой.",

    "Луна — естественный спутник Земли.",

    "Марс называют Красной планетой.",

    "Нептун является самой далёкой от Солнца планетой.",

    "Уран вращается вокруг своей оси с очень большим наклоном.",

    "Звёзды излучают огромное количество энергии.",

    "Чёрные дыры обладают чрезвычайно сильным гравитационным полем."

];


function showFact() {

    const random =
        facts[Math.floor(Math.random() * facts.length)];

    openModal(
        "🌌 СЛУЧАЙНЫЙ ФАКТ",
        random
    );
}


/* =========================
   ФАКТ О ГАЛАКТИКЕ
========================= */

function showGalaxyFact() {

    openModal(
        "🌌 МЛЕЧНЫЙ ПУТЬ",
        "Млечный Путь — галактика, в которой находится Солнечная система. Она имеет спиральную структуру и содержит огромное количество звёзд."
    );
}


/* =========================
   ПЛАНЕТЫ
========================= */

const planetData = {

    "Меркурий":
        "Меркурий — ближайшая к Солнцу планета и самая маленькая планета Солнечной системы.",

    "Венера":
        "Венера имеет плотную атмосферу и чрезвычайно высокую температуру поверхности.",

    "Земля":
        "Земля — планета, на которой существует жизнь. Более 70% её поверхности покрыто водой.",

    "Марс":
        "Марс — холодная пустынная планета с красноватой поверхностью.",

    "Юпитер":
        "Юпитер — крупнейшая планета Солнечной системы. Он состоит в основном из водорода и гелия.",

    "Сатурн":
        "Сатурн — газовый гигант, знаменитый своей системой колец.",

    "Уран":
        "Уран — ледяной гигант, который вращается почти на боку.",

    "Нептун":
        "Нептун — очень холодная и далёкая планета с мощными атмосферными ветрами."

};


function planetInfo(name) {

    openModal(
        "🪐 " + name,
        planetData[name]
    );
}


/* =========================
   МОДАЛЬНОЕ ОКНО
========================= */

function openModal(title, text) {

    const modal = document.getElementById("modal");

    const modalText =
        document.getElementById("modalText");

    modalText.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
    `;

    modal.classList.add("active");
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("active");
}


/* =========================
   ЗАКРЫТИЕ ПО КЛИКУ
========================= */

document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


/* =========================
   КЛАВИША ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================
   МОБИЛЬНОЕ МЕНЮ
========================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.width = "100%";

        nav.style.padding = "30px";

        nav.style.flexDirection = "column";

        nav.style.background = "#050611";

    }
}


/* =========================
   АНИМАЦИЯ КАРТОЧЕК
========================= */

const cards =
    document.querySelectorAll(
        ".planet-card, .fact-card, .timeline-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});


/* =========================
   КОНСОЛЬ
========================= */

console.log(
    "🚀 COSMOS WEBSITE LOADED"
);
```
