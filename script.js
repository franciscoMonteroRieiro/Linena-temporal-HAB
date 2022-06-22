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
        <img src="${obj.image}" alt="">
    `
    return li
}


async function genList(){
    const lista = await get()
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


async function orderList(){
    const orderlist = genEvent(obj.date)
    orderlist.sort(obj.date)
    console.log()
}