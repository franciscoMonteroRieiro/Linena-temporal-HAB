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
<<<<<<< HEAD
genList()
=======
genList()

var lista ="./zelda-timeline.json"

//Metodo Generación Formulario
function GeneraForm(){
    ////Crear el objeto formulario
    const formulario=document.createElement("form");

    
    ////Crear el objeto caja de texto dates
    let cajaTextDates=document.createElement("input");

    ////Crear el objeto caja de texto titles
    let cajaTextTitles=document.createElement("input");

    ////Crear el objeto caja de texto images
    let cajaTextImages=document.createElement("input");

     
		////Crear el objeto area de texto del text
		let cajaTextMensaje=document.createElement("textarea");
 
		////Crear el objeto boton
		let boton=document.createElement("input");

        ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");
        formulario.setAttribute('action', "");
        formulario.setAttribute('style', "width:300px;margin: 0px auto");

        ////Asignar atributos al objeto caja de texto dates
        cajaTextDates.setAttribute('type', "text");
        cajaTextDates.setAttribute('placeholder', "Date");
        cajaTextDates.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        ////Asignar atributos al objeto caja de texto titles
        cajaTextTitles.setAttribute('type', "text");
        cajaTextTitles.setAttribute('placeholder', "Title");
        cajaTextTitles.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        ////Asignar atributos al objeto caja de texto de images
        cajaTextImages.setAttribute('type', "img");
        cajaTextImages.setAttribute('placeholder', "Image");
        cajaTextImages.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");

        
        ////Asignar atributos al objeto area de texto de text
        cajaTextText.setAttribute('placeholder', "Text");
        cajaTextText.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");

    ////Asignar atributos al objeto boton
    boton.setAttribute('type', "button");
        boton.setAttribute('value', "Enviar");
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");

        titulo.innerHTML='<h1>Nuevo Evento</h1>';
        formulario.appendChild(titulo);
        formulario.appendChild(cajaTextDates);
        formulario.appendChild(cajaTextTitles);
        formulario.appendChild(cajaTextImages);
        formulario.appendChild(cajaTextText);
        formulario.appendChild(boton);
        document.getElementById('ContentFormulario').appendChild(formulario);
}
>>>>>>> cfc207cd0d45881466527f927c188bdca08ec220
