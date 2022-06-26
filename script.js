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
        <div class="container">
        <div class="top-section">

        <div class="timeline"></div>

        <h2>${obj.title}</h2>
        <h2>${obj.date}</h2>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae dicta mollitia sapiente repudiandae itaque error laborum quam ab earum nihil illo inventore repellendus minima, ratione facilis beatae quo maiores!</p>
    </div>
    <img src="${obj.image}" alt="">
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
