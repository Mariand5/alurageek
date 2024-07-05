import { conectarAPI } from "./conectarAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function enviarProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conectarAPI.enviarProducto(nombre, precio, imagen);
        alert("El producto fue enviado exitosamente");
    } catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => enviarProducto(evento));