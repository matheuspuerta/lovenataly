window.confirm('Site com acesso apenas para Nataly');
let name = window.prompt('Como você se chama ?');
window.alert(`Seja Bem-vinda, ${name}!`);





document.addEventListener("DOMContentLoaded", function() {
    const simButton = document.getElementById("sim");
    const naoButton = document.getElementById("nao");
    const popup = document.getElementById("popup");

    simButton.addEventListener("click", function() {
        popup.classList.remove("hidden");
    });

    naoButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - naoButton.clientWidth;
        const maxY = window.innerHeight - naoButton.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        naoButton.style.position = "absolute";
        naoButton.style.left = randomX + "px";
        naoButton.style.top = randomY + "px";
    });
});