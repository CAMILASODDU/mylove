const btn = document.getElementById("btn");
const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
    inicio.style.display = "none";
    mensaje.classList.remove("oculto");

    setInterval(crearCorazon, 300);
});

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.textContent = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}
