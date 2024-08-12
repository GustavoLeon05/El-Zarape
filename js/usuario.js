let listaUser;

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("txtPasswordUser");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function cargarCatalogoUser() {
    listaUser = {
        usuarios: [
            {"id": 1, "nombres": "Juan", "apellidos": "Pérez López", "telefono": "1234567890", "username": "juanp", "password": "********", "estatus": "Activo", "rol": "Administrador"},
            {"id": 2, "nombres": "María", "apellidos": "García Martínez", "telefono": "0987654321", "username": "mariag", "password": "********", "estatus": "Inactivo", "rol": "Usuario"},
            {"id": 3, "nombres": "Carlos", "apellidos": "Hernández Gómez", "telefono": "1122334455", "username": "carlosh", "password": "********", "estatus": "Activo", "rol": "Usuario"}
        ]
    };
    printTableUser();
}

function printTableUser() {
    let contenido="";
    let renglon="";
    for (let i=0;i<listaUser.usuarios.length;i++) {
        renglon= "";
        renglon+= "<tr>";
        renglon+= "<td>" + listaUser.usuarios[i].id + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].nombres + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].apellidos + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].telefono + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].username + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].password + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].estatus + "</td>";
        renglon+= "<td>" + listaUser.usuarios[i].rol + "</td>";
        renglon+= "<td><button type='button' class='btn boton2' onclick='modUser(" + i + ");'><i class='fa-solid fa-pen'></i></button></td>";
        renglon+= "<td><button type='button' class='btn boton2' onclick='delUser(" + i + ");'><i class='fa-solid fa-trash-can'></i></button></td>";
        renglon+= "</tr>";
        contenido += renglon;
    }
    document.getElementById("tbCatUser").innerHTML=contenido;
}

function modUser(i) {
    document.getElementById("txtIdUser").value = listaUser.usuarios[i].id;
    document.getElementById("txtNameUser").value = listaUser.usuarios[i].nombres;
    document.getElementById("txtApellidosUser").value = listaUser.usuarios[i].apellidos;
    document.getElementById("txtTelUser").value = listaUser.usuarios[i].telefono;
    document.getElementById("txtUsernameUser").value = listaUser.usuarios[i].username;
    document.getElementById("txtPasswordUser").value = listaUser.usuarios[i].password === "********" ? "" : listaUser.usuarios[i].password;
    document.getElementById("txtEstatusUser").value = listaUser.usuarios[i].estatus;
    document.getElementById("txtRolUser").value = listaUser.usuarios[i].rol;
    x = i;
    return x;
}

function cancelarUser() {
    document.getElementById("txtIdUser").value = "";
    document.getElementById("txtNameUser").value = "";
    document.getElementById("txtApellidosUser").value = "";
    document.getElementById("txtTelUser").value = "";
    document.getElementById("txtUsernameUser").value = "";
    document.getElementById("txtPasswordUser").value = "";
    document.getElementById("txtEstatusUser").value = "Activo";
    document.getElementById("txtRolUser").value = "";
}

function addUser() {
    let lastId = listaUser.usuarios[listaUser.usuarios.length - 1].id;
    let id = lastId + 1;
    let nombres = document.getElementById("txtNameUser").value;
    let apellidos = document.getElementById("txtApellidosUser").value;
    let telefono = document.getElementById("txtTelUser").value;
    let username = document.getElementById("txtUsernameUser").value;
    let password = document.getElementById("txtPasswordUser").value;
    let estatus = document.getElementById("txtEstatusUser").value;
    let rol = document.getElementById("txtRolUser").value;

    if (estatus !== "Activo" && estatus !== "Inactivo") {
        Swal.fire({
            "title": "Error",
            "text": "El estatus debe ser 'Activo' o 'Inactivo'",
            "icon": "error"
        });
        return;
    }

    let user = {"id": id, "nombres": nombres, "apellidos": apellidos, "telefono": telefono, "username": username, "password": "********", "estatus": estatus, "rol": rol};
    listaUser.usuarios.push(user);

    cancelarUser();
    printTableUser();
    
    Swal.fire({
        "title": "Usuario Agregado",
        "text": "El usuario ha sido agregado exitosamente.",
        "icon": "success"
    });
}

function changeUser(x) {
    listaUser.usuarios[x].nombres = document.getElementById("txtNameUser").value;
    listaUser.usuarios[x].apellidos = document.getElementById("txtApellidosUser").value;
    listaUser.usuarios[x].telefono = document.getElementById("txtTelUser").value;
    listaUser.usuarios[x].username = document.getElementById("txtUsernameUser").value;
    let newPassword = document.getElementById("txtPasswordUser").value;
    if (newPassword !== "") {
        listaUser.usuarios[x].password = "********";
    }
    listaUser.usuarios[x].estatus = document.getElementById("txtEstatusUser").value;
    listaUser.usuarios[x].rol = document.getElementById("txtRolUser").value;

    cancelarUser();
    printTableUser();

    Swal.fire({
        "title": "Usuario Modificado",
        "text": "El usuario ha sido modificado exitosamente.",
        "icon": "success"
    });
}

function delUser(i) {
  Swal.fire({
  title: "Desea eliminar este Usuario?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    listaUser.usuarios.splice(i,1);
    Swal.fire({
        "title":"Eliminación Correcta",
        "text":"El usuario ha sido eliminado correctamente",
        "icon":"success"
    }); 
    printTableUser();
  } else if (result.isDenied) {
    Swal.fire("Eliminación cancelada", "", "info");
  }
});
    
}

function lkUser(){
    let lk=document.getElementById("txtLkUser").value;
    
    let posFnd = -1;
    for(let i=0; i<listaUser.usuarios.length;i++){
       if(listaUser.usuarios[i].id==lk || listaUser.usuarios[i].nombre==lk || listaUser.usuarios[i].descripcion==lk){ 
           posFnd=i;
           break;
        }
    }
    let txtTable="";
    if(posFnd==-1){
        txtTable="<tr><td colspan='9'>No se encontraron resultados de su busqueda</td></tr>"
    }
    else{
        txtTable="";
        txtTable+="<tr>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].id+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].nombres+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].apellidos+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].telefono+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].username+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].password+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].estatus+"</td>";
        txtTable+="<td>"+listaUser.usuarios[posFnd].rol+"</td>";
        txtTable+="<td><button type='button' class='btn boton2' onclick='modUser("+posFnd+");'><i class='fa-solid fa-pen'></i></button></td>";
        txtTable+="<td><button type='button' class='btn boton2'  onclick='delUser("+posFnd+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        txtTable+="</tr>";
    }
        document.getElementById("tbCatUser").innerHTML=txtTable;
}
