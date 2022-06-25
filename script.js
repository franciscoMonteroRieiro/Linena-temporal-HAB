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
        <h2>${obj.title}</h2>
        <h2>${obj.date}</h2>
        <h3>${obj.text}</h3>
        <img src="${obj.image}" alt="">
    `
    return li
}



async function genList(){
    const lista = await get()
    lista.sort((a,b)=> a.date - b.date )
    console.log(lista)
    const ul = document.createElement("ul")
    
    for (const obj of lista) {
        console.log(obj)
        
        const li = genEvent(obj)
        ul.append(li)
    }
    main.append(ul)
    
}
genList()
