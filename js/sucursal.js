let listaSuc;
function cargarCatalogo(){
    listaSuc = {sucursales:[
            {"id":1,"nombre":"Rio Mayo","direccion":"Rio Mayo 7, Col. Vista Hermosa","horario":"07:00-20:00",
                "latitud":21.07423,"longitud":-101.62586,"estatus":1, "foto": "../media/suc1.jpg"},
            {"id":2,"nombre":"Las Torres","direccion":"Blvd. Las Torres 1072, Col. 1072","horario":"07:00-20:00",
                "latitud":21.14697,"longitud":-101.65316,"estatus":1, "foto": "../media/suc2.jpg"},
            {"id":3,"nombre":"Plaza Mayor","direccion":"Plaza Mayor Loc. 70,Col. Valle del Campestre","horario":"10:00-20:00",
                "latitud":21.15817,"longitud":-101.69528,"estatus":1, "foto": "../media/suc3.jpg"}
    ]};
    printTableSuc();
    
}

function printTableSuc(){
    let contenido="";
    let renglon="";
    for(let i=0; i<listaSuc.sucursales.length; i++){
        renglon="";
        renglon+="<tr>";
        renglon+="<td>"+listaSuc.sucursales[i].id+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].nombre+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].direccion+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].horario+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].latitud+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].longitud+"</td>";
        renglon+="<td>"+listaSuc.sucursales[i].estatus+"</td>";
        renglon+="<td><img src = "+listaSuc.sucursales[i].foto+" alt='NO HAY IMAGEN' height='100' width='100'></td>";
        renglon+="<td><button type='button' class='btn boton2' onclick='modSuc("+i+");'><i class='fa-solid fa-pen'></i></button></td>";
        renglon+="<td><button type='button' class='btn boton2'  onclick='delSuc("+i+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        renglon+="</tr>";
        contenido+=renglon;
        }
        document.getElementById("tbCatSuc").innerHTML=contenido;
}

function modSuc(i){
    document.getElementById("txtIdSuc").value = listaSuc.sucursales[i].id;
    document.getElementById("txtNomSuc").value = listaSuc.sucursales[i].nombre;
    document.getElementById("txtDirSuc").value = listaSuc.sucursales[i].direccion;
    document.getElementById("txtHorSuc").value = listaSuc.sucursales[i].horario;
    document.getElementById("txtLatSuc").value = listaSuc.sucursales[i].latitud;
    document.getElementById("txtLongSuc").value = listaSuc.sucursales[i].longitud;
    document.getElementById("txtStatSuc").value = listaSuc.sucursales[i].estatus;
    document.getElementById("txtFotoSuc").value = listaSuc.sucursales[i].foto;
    x=i;
    return x;
}
function cancelarSuc(){
    document.getElementById("txtIdSuc").value = "";
    document.getElementById("txtNomSuc").value = "";
    document.getElementById("txtDirSuc").value = "";
    document.getElementById("txtHorSuc").value = "";
    document.getElementById("txtLatSuc").value = "";
    document.getElementById("txtLongSuc").value = "";
    document.getElementById("txtStatSuc").value = "";
    document.getElementById("txtFotoSuc").value = "";
}
function addSuc(){
    let lastId=listaSuc.sucursales[listaSuc.sucursales.length-1].id;
    let id = lastId+1;
    let nom = document.getElementById("txtNomSuc").value;
    let dir = document.getElementById("txtDirSuc").value;
    let hor = document.getElementById("txtHorSuc").value;
    let lat = document.getElementById("txtLatSuc").value;
    let lng = document.getElementById("txtLongSuc").value;
    let est = document.getElementById("txtStatSuc").value;
    let foto = document.getElementById("txtFotoSuc").value;
    
    let suc={"id":id,"nombre":nom,"direccion":dir,"horario":hor,
                "latitud":lat,"longitud":lng,"estatus":est,"imagen":foto};
    
    listaSuc.sucursales.push(suc);
    
    Swal.fire({
        "title":"Inserción Correcta",
        "text":"La sucursal ha sido insertada correctamente",
        "icon":"success"
    });        
      
    cancelarSuc();
    
    printTableSuc();
}
function delSuc(i){
    Swal.fire({
  title: "Desea eliminar esta sucursal?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    listaSuc.sucursales.splice(i,1);
    Swal.fire({
        "title":"Eliminación Correcta",
        "text":"La sucursal ha sido eliminada correctamente",
        "icon":"success"
    }); 
    printTableSuc();
  } else if (result.isDenied) {
    Swal.fire("Eliminación cancelada", "", "info");
  }
});
    
}
function changeSuc(x){
    listaSuc.sucursales[x].id = document.getElementById("txtIdSuc").value;
    listaSuc.sucursales[x].nombre = document.getElementById("txtNomSuc").value;
    listaSuc.sucursales[x].direccion = document.getElementById("txtDirSuc").value;
    listaSuc.sucursales[x].horario = document.getElementById("txtHorSuc").value;
    listaSuc.sucursales[x].latitud = document.getElementById("txtLatSuc").value;
    listaSuc.sucursales[x].longitud = document.getElementById("txtLongSuc").value;
    listaSuc.sucursales[x].estatus = document.getElementById("txtStatSuc").value;
    listaSuc.sucursales[x].foto = document.getElementById("txtFotoSuc").value;
    
    let suc={"id":listaSuc.sucursales[x].id,"nombre":listaSuc.sucursales[x].nombre,
        "direccion":listaSuc.sucursales[x].direccion,"horario":listaSuc.sucursales[x].horario,
        "latitud":listaSuc.sucursales[x].latitud,"longitud":listaSuc.sucursales[x].longitud,
        "estatus":listaSuc.sucursales[x].estatus,"foto":listaSuc.sucursales[x].foto};
    
    listaSuc.sucursales[x]=suc;
    
    Swal.fire({
        "title":"Cambio Correcto",
        "text":"La sucursal ha sido actualizada correctamente",
        "icon":"success"
    });        
      
    cancelarSuc();
    
    printTableSuc();
}
function lkSuc(){
    let lk=document.getElementById("txtLkSuc").value;
    
    let posFnd = -1;
    for(let i=0; i<listaSuc.sucursales.length;i++){
       if(listaSuc.sucursales[i].id==lk || listaSuc.sucursales[i].nombre==lk || listaSuc.sucursales[i].direcion==lk){ 
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
        txtTable+="<td>"+listaSuc.sucursales[posFnd].id+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].nombre+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].direccion+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].horario+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].latitud+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].longitud+"</td>";
        txtTable+="<td>"+listaSuc.sucursales[posFnd].estatus+"</td>";
        txtTable+="<td><img src = "+listaSuc.sucursales[posFnd].foto+" alt='NO HAY IMAGEN'  height='100' width='100'></td>";
        txtTable+="<td><button type='button' class='btn boton2' onclick='modSuc("+posFnd+");'><i class='fa-solid fa-pen'></i></button></td>";
        txtTable+="<td><button type='button' class='btn boton2'  onclick='delSuc("+posFnd+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        txtTable+="</tr>";
    }
        document.getElementById("tbCatSuc").innerHTML=txtTable;
}
function cargarImgSuc()
{
    let inputFile = document.getElementById("ifFotoSuc");
    if(inputFile.files && inputFile.files[0]){
        let reader = new FileReader();
        reader.onload=function(e){
            let photo = e.target.result;
            document.getElementById("fotoSuc").src = photo;
            document.getElementById("txtFotoSuc").value = photo;
        };
        reader.readAsDataURL(inputFile.files[0]);
    }
}