import { conectarAPI } from "./conectarAPI.js";

const misProductos = document.querySelector(".card_container");

function construirCard(id, nombre, precio, imagen) {
    const producto = document.createElement("div");
    producto.className = "card";

    producto.innerHTML = `<img class="imagen_producto" src="${imagen}"/>
                    <div class="card_info">
                        <p>${nombre}</p>
                        <div class="card_value">
                            <p>$ ${precio}.00</p>
                            <button class="btn_eliminar" data-id="${id}">
                                <img class="logo_trash" src="./assets/eliminar.png" alt="icono-basurero" data-remove="true">
                            </button>
                        </div>
                    </div>`

    const btnEliminar = producto.querySelector(".btn_eliminar");
    btnEliminar.addEventListener("click", () => {
        conectarAPI.eliminarProducto(id).then(() => {
            producto.remove();
        }).catch((e) => console.log(e));
    });
    misProductos.appendChild(producto);
    return producto;
}

async function mostrarProductos(){
    try{
        const listaAPI = await conectarAPI.listarProductos();
        listaAPI.forEach(element => {
            misProductos.appendChild(construirCard(
                element.id, 
                element.nombre, 
                element.precio, 
                element.imagen
            ))
        });
    } catch{
        misProductos.innerHTML=`<h2 class="mensaje_error">Ha ocurrido un problema con la conexión</h2>`;
    }
}

mostrarProductos();