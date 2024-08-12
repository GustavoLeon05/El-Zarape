let listaCombo;
let productos = [];

let listaAlimentos = {
    alimentos: [
        {
            "id": 1,
            "nombre": "Chilaquiles",
            "descripcion": "Ricos chilaquiles verdes, rojos o blancos, que pueden ser acompañados con huevo, pollo y frijoles",
            "precio": 130,
            "categoria": "Platillo",
            "imagen": "../media/chilaquiles.jpg"
        },
        {
            "id": 2,
            "nombre": "Quesabirrias",
            "descripcion": "Quesadillas de harina con birria",
            "precio": 75,
            "categoria": "Platillo",
            "imagen": "../media/quesabirrias.jpg"
        },
        {
            "id": 3,
            "nombre": "Cheescake",
            "descripcion": "Una rebanada de cheescake de chocolate, frambuesa y fresa",
            "precio": 55,
            "categoria": "Postre",
            "imagen": "../media/cheesecake.jpg"
        }
    ]
};

let listBebidas = {
    bebidas: [
        {
            "id": 1,
            "nombre": "Jugo Verde",
            "descripcion": "Deliciosos jugo preparado con ingredientes frescos del día",
            "foto": "data:image/jpeg",
            "precio": 70,
            "categoria": "Jugo"
        },
        {
            "id": 2,
            "nombre": "Americano",
            "descripcion": "Café preparado con la mezcla de la casa",
            "foto": "data:image/jpeg",
            "precio": 40,
            "categoria": "Café"
        },
        {
            "id": 3,
            "nombre": "Tizana Frutos Rojos",
            "descripcion": "Té frutal artesanal, preparado en tu mesa",
            "foto": "data:image/jpeg",
            "precio": 80,
            "categoria": "Té"
        }
    ]
};

function cargarCatalogoCombo() {
    listaCombo = {
        combos: [
            {
                "id": 1,
                "nombre": "Combo Familiar",
                "productos": ["Chilaquiles", "Quesabirrias", "Jugo Verde"],
                "descripcion": "Un combo perfecto para disfrutar en familia.",
                "subtotal": calcularSubtotal(["Chilaquiles", "Quesabirrias", "Jugo Verde"]),
                "total": calcularTotal(calcularSubtotal(["Chilaquiles", "Quesabirrias", "Jugo Verde"]))
            },
            {
                "id": 2,
                "nombre": "Combo Pareja",
                "productos": ["Americano", "Cheescake"],
                "descripcion": "Ideal para compartir con tu pareja.",
                "subtotal": calcularSubtotal(["Americano", "Cheescake"]),
                "total": calcularTotal(calcularSubtotal(["Americano", "Cheescake"]))
            }
        ]
    };
    llenarSelectProductos();
    printTableCombo();
}

function llenarSelectProductos() {
    const selectProducto = document.getElementById("selectProducto");
    selectProducto.innerHTML = "";
    listaAlimentos.alimentos.forEach(alimento => {
        const option = document.createElement("option");
        option.value = alimento.nombre;
        option.textContent = alimento.nombre;
        selectProducto.appendChild(option);
    });
    listBebidas.bebidas.forEach(bebida => {
        const option = document.createElement("option");
        option.value = bebida.nombre;
        option.textContent = bebida.nombre;
        selectProducto.appendChild(option);
    });
}

function addProducto() {
    const selectProducto = document.getElementById("selectProducto");
    const productoNombre = selectProducto.value;

    let producto = listaAlimentos.alimentos.find(p => p.nombre === productoNombre);
    if (!producto) {
        producto = listBebidas.bebidas.find(p => p.nombre === productoNombre);
    }

    if (producto && !productos.includes(producto)) {
        productos.push(producto);

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button type="button" class="btn btn-sm btn-danger ms-2" onclick="removeProducto(${producto.id})"><i class="fa-solid fa-trash-can"></i></button>
        `;
        document.getElementById("listaProductos").appendChild(li);
    }
}

function removeProducto(idProducto) {
    productos = productos.filter(p => p.id !== idProducto);
    printProductos();
}

function printProductos() {
    const ul = document.getElementById("listaProductos");
    ul.innerHTML = "";
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button type="button" class="btn btn-sm btn-danger ms-2" onclick="removeProducto(${producto.id})"><i class="fa-solid fa-trash-can"></i></button>
        `;
        ul.appendChild(li);
    });
}

function calcularSubtotal(productosSeleccionados) {
    let subtotal = 0;
    productosSeleccionados.forEach(producto => {
        let encontrado = listaAlimentos.alimentos.find(alimento => alimento.nombre === producto);
        if (encontrado) {
            subtotal += encontrado.precio;
        } else {
            encontrado = listBebidas.bebidas.find(bebida => bebida.nombre === producto);
            if (encontrado) {
                subtotal += encontrado.precio;
            }
        }
    });
    return subtotal;
}

function calcularTotal(subtotal) {
    const descuento = subtotal * 0.05;
    return subtotal - descuento;
}

function printTableCombo() {
    let contenido = "";
    listaCombo.combos.forEach((combo, index) => {
        contenido += "<tr>";
        contenido += "<td>" + combo.id + "</td>";
        contenido += "<td>" + combo.nombre + "</td>";
        contenido += "<td>" + combo.productos.join(", ") + "</td>";
        contenido += "<td>" + combo.descripcion + "</td>";
        contenido += "<td>" + combo.subtotal + "</td>";
        contenido += "<td>" + combo.total + "</td>";
        contenido += "<td><button type='button' class='btn boton2' onclick='modCombo(" + index + ");'><i class='fa-solid fa-pen'></i></button></td>";
        contenido += "<td><button type='button' class='btn boton2' onclick='delCombo(" + index + ");'><i class='fa-solid fa-trash-alt'></i></button></td>";
        contenido += "</tr>";
    });
    document.getElementById("tbCatCombo").innerHTML = contenido;
}

function modCombo(i) {
    const combo = listaCombo.combos[i];
    document.getElementById("txtIdCombo").value = combo.id;
    document.getElementById("txtNombreCombo").value = combo.nombre;
    document.getElementById("txtDescripcionCombo").value = combo.descripcion;
    
    
    productos = [];
    combo.productos.forEach(nombreProducto => {
        const producto = listaAlimentos.alimentos.find(p => p.nombre === nombreProducto) || listBebidas.bebidas.find(p => p.nombre === nombreProducto);
        if (producto) {
            productos.push(producto);
        }
    });

    printProductos();
    x = i;
}

function cancelarCombo() {
    document.getElementById("txtIdCombo").value = "";
    document.getElementById("txtNombreCombo").value = "";
    document.getElementById("txtDescripcionCombo").value = "";
    productos = [];
    printProductos();
    x = -1;
}

function addCombo() {
    const id = listaCombo.combos.length ? listaCombo.combos[listaCombo.combos.length - 1].id + 1 : 1;
    const nombre = document.getElementById("txtNombreCombo").value;
    const descripcion = document.getElementById("txtDescripcionCombo").value;
    const subtotal = calcularSubtotal(productos.map(p => p.nombre));
    const total = calcularTotal(subtotal);

    const combo = {
        id,
        nombre,
        productos: productos.map(p => p.nombre),
        descripcion,
        subtotal,
        total
    };

    listaCombo.combos.push(combo);

    Swal.fire({
        title: "Inserción Correcta",
        text: "El combo ha sido insertado correctamente",
        icon: "success"
    });

    cancelarCombo();
    printTableCombo();
}

function changeCombo() {
    if (x === -1) return;

    const id = parseInt(document.getElementById("txtIdCombo").value, 10);
    const nombre = document.getElementById("txtNombreCombo").value;
    const descripcion = document.getElementById("txtDescripcionCombo").value;
    const subtotal = calcularSubtotal(productos.map(p => p.nombre));
    const total = calcularTotal(subtotal);

    const combo = {
        id,
        nombre,
        productos: productos.map(p => p.nombre),
        descripcion,
        subtotal,
        total
    };

    listaCombo.combos[x] = combo;

    Swal.fire({
        title: "Cambio Correcto",
        text: "El combo ha sido actualizado correctamente",
        icon: "success"
    });

    cancelarCombo();
    printTableCombo();
}

function delCombo(i) {
    Swal.fire({
        title: "¿Desea eliminar este combo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            listaCombo.combos.splice(i, 1);
            Swal.fire({
                title: "Eliminación Correcta",
                text: "El combo ha sido eliminado correctamente",
                icon: "success"
            });
            printTableCombo();
        } else if (result.isDenied) {
            Swal.fire("Eliminación cancelada", "", "info");
        }
    });
}

function lkCombo() {
    const lk = document.getElementById("txtLkCombo").value.toLowerCase();
    let contenido = "";
    listaCombo.combos.forEach((combo, index) => {
        if (combo.nombre.toLowerCase().includes(lk) || combo.descripcion.toLowerCase().includes(lk)) {
            contenido += "<tr>";
            contenido += "<td>" + combo.id + "</td>";
            contenido += "<td>" + combo.nombre + "</td>";
            contenido += "<td>" + combo.productos.join(", ") + "</td>";
            contenido += "<td>" + combo.descripcion + "</td>";
            contenido += "<td>" + combo.subtotal + "</td>";
            contenido += "<td>" + combo.total + "</td>";
            contenido += "<td><button type='button' class='btn boton2' onclick='modCombo(" + index + ");'><i class='fa-solid fa-pen'></i></button></td>";
            contenido += "<td><button type='button' class='btn boton2' onclick='delCombo(" + index + ");'><i class='fa-solid fa-trash-alt'></i></button></td>";
            contenido += "</tr>";
        }
    });
    document.getElementById("tbCatCombo").innerHTML = contenido;
}
