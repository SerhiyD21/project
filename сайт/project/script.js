// Відкриваюче меню
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Отримуємо елементи
var modal = document.getElementById("loginModal");
var btn = document.getElementById("login-link");
var span = document.getElementById("closeModal");

// Коли користувач натискає на посилання "Вхід до кабінету", модальне вікно відкривається
btn.onclick = function() {
    modal.style.display = "block";
}

// Коли користувач натискає на "x", модальне вікно закривається
span.onclick = function() {
    modal.style.display = "none";
}

// Коли користувач клікає поза межами модального вікна, воно також закривається
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
