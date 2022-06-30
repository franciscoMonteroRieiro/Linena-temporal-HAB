"use strict"

const main = document.querySelector("main")


async function get(){
    const response = await fetch("./zelda-timeline.json")

    const data = await response.json()
    
    return data
}


function genEvent(obj){
    const li = document.createElement("li")
    li.innerHTML= `
        <h1>${obj.title}</h1>
        <h1>${obj.date}</h1>
        <h2>${obj.text}</h2>
        <img src="${obj.image}" alt="">
        <iframe width="560" height="315" src="${obj.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    return li
}


async function genList(){
    const lista = await get()
    lista.sort((a,b)=> a.date - b.date )
    console.log(lista)
    const ol = document.createElement("ol")
    
    for (const obj of lista) {
        console.log(obj)
        
        const li = genEvent(obj)

        ol.append(li)
    }
    main.append(ol)
}
genList()

const playsound = function(){
    var sonido = new Audio("backgroundnoise.mp3");
    sonido.play();
    
    document.removeEventListener(`click`, playsound);

}
document.addEventListener(`click`, playsound);