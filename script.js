"use strict"

const main = document.querySelector("main")


async function get(){
    const response = await fetch("./zelda-timeline.json")

    const data = await response.json()
    
  //  console.log(data)

    return data
}


function genEvent(obj){
    const li = document.createElement("li")
    li.innerHTML= `
        <h2>${obj.title}</h2>
        <h2>${obj.date}</h2>
        <h3>${obj.text}</h3>
        <img src="${obj.image}" alt="">
        <video height="300" controls poster src="">Tu navegador no soporta video</video>
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

var lista ="./zelda-timeline.json"
