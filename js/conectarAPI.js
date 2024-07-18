async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "GET",
        headers:{
            "Content-type":"application/json",
        }
    });

    const conexionConvertida = await conexion.json();
    //console.log(conexion);
    //console.log(conexionConvertida);//Muestra el array
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen, id){
    const conexion= await fetch("http://localhost:3000/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen,
        })
    })

    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

async function eliminarProducto (id){
    await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const conectarAPI = {
    listarProductos, enviarProducto, eliminarProducto,
}