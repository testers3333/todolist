document.addEventListener("DOMContentLoaded", async () => {
    // récupération des éléments html.
    let soumission = document.getElementById("btn"); // récupération du bouton soumission.
    let titre = document.getElementsByClassName("title"); // récupération du titre de la nouvelle division.
    let footer = document.getElementsByClassName("footer"); // récupération du footer de la nouvelle division.
    let area = document.getElementsByClassName("area"); // récupération de la description de la nouvelle division.
    let se = document.querySelector(".se"); // récupération de la division qui contiendra d'autres divisions.

    // évènement du clique sur le bouton de soumission d'action.
    soumission.addEventListener("click", () => {
        // vérification des éléments titre, footer et area.
        if(!titre[0].value) return alert("Aucun titre indiqué.")
        if(!footer[0].value) return alert("Aucun footer indiqué.");
        if(!area[0].value) return alert("Aucune description indiquée.");

        // création et ajout d'élément à une nouvelle division.
        let div = document.createElement("div");
        let title = document.createElement("h3");
        title.innerHTML = titre[0].value
        let desc = document.createElement("p");
        desc.innerHTML = area[0].value.replace(/\n/g, '<br>')
        let foot = document.createElement("p");
        foot.innerHTML = footer[0].value;

        // ajout des éléments à la division créée.
        div.appendChild(title);
        div.appendChild(desc);
        div.appendChild(foot);

        // ajout de la division créée à la division "se".
        se.appendChild(div);
        titre[0].value = "";
        area[0].value = "";
        footer[0].value = "";
    })
})