let listDrink;
let y=10;
function loadCatDrink(){
    listDrink = {bebidas:[
            {"id":1,"nombre":"Jugo Verde","descripcion":"Deliciosos jugo preparado con ingredientes frescos del día",
                "foto":"data:image/jpeg;base64,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",
                "precio":70,"categoria":"Jugo"},
            {"id":2,"nombre":"Americano","descripcion":"Café preparado con la mezcla de la casa",
                "foto":"data:image/jpeg;base64,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",
                "precio":40,"categoria":"Café"},
            {"id":3,"nombre":"Tizana Frutos Rojos","descripcion":"Té frutal artesanal, preparado en tu mesa",
                "foto":"data:image/jpeg;base64,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",
                "precio":80,"categoria":"Té"}
    ]};
    printTableDrink();
    
}

function printTableDrink(){
    let contenido="";
    let renglon="";
    for(let i=0; i<listDrink.bebidas.length; i++){
        renglon="";
        renglon+="<tr>";
        renglon+="<td>"+listDrink.bebidas[i].id+"</td>";
        renglon+="<td>"+listDrink.bebidas[i].nombre+"</td>";
        renglon+="<td>"+listDrink.bebidas[i].descripcion+"</td>";
        renglon+="<td><img src = "+listDrink.bebidas[i].foto+" alt='NO HAY IMAGEN' height='100' width='100'></td>";
        renglon+="<td>"+listDrink.bebidas[i].precio+"</td>";
        renglon+="<td>"+listDrink.bebidas[i].categoria+"</td>";
        renglon+="<td><button type='button' class='btn boton2' onclick='modDrink("+i+");'><i class='fa-solid fa-pen'></i></button></td>";
        renglon+="<td><button type='button' class='btn boton2'  onclick='delDrink("+i+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        renglon+="</tr>";
        contenido+=renglon;
        }
        document.getElementById("tbCatDrink").innerHTML=contenido;
}

function modDrink(i){
    document.getElementById("txtIdDrink").value = listDrink.bebidas[i].id;
    document.getElementById("txtNomDrink").value = listDrink.bebidas[i].nombre;
    document.getElementById("txtDescDrink").value = listDrink.bebidas[i].descripcion;
    document.getElementById("txtFotoDrink").value = listDrink.bebidas[i].foto;
    document.getElementById("noPrice").value = listDrink.bebidas[i].precio;
    document.getElementById("catDrink").value = listDrink.bebidas[i].categoria;
    y=i;
    return y;
}
function cancelDrink(){
    document.getElementById("txtIdDrink").value = "";
    document.getElementById("txtNomDrink").value = "";
    document.getElementById("txtDescDrink").value = "";
    document.getElementById("txtFotoDrink").value = "";
    document.getElementById("noPrice").value = "";
    document.getElementById("catDrink").value = "";
}
function addDrink(){
    let lastId=listDrink.bebidas[listDrink.bebidas.length-1].id;
    let id = lastId+1;
    let nom = document.getElementById("txtNomDrink").value;
    let desc = document.getElementById("txtDescDrink").value;
    let foto = document.getElementById("txtFotoDrink").value;
    let price = document.getElementById("noPrice").value;
    let cath = document.getElementById("catDrink").value;
    
    let drink={"id":id,"nombre":nom,"descripcion":desc,"foto":foto,
                "precio":price,"categoria":cath};
    
    listDrink.bebidas.push(drink);
    
    Swal.fire({
        "title":"Inserción Correcta",
        "text":"La nueva bebida ha sido agregada correctamente",
        "icon":"success"
    });        
      
    cancelDrink();
    
    printTableDrink();
}
function delDrink(i){
    Swal.fire({
  title: "Desea eliminar esta bebida?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    listDrink.bebidas.splice(i,1);
    Swal.fire({
        "title":"Eliminación Correcta",
        "text":"La bebida ha sido eliminada correctamente",
        "icon":"success"
    }); 
    printTableDrink();
  } else if (result.isDenied) {
    Swal.fire("Eliminación cancelada", "", "info");
  }
});
    
}
function changeDrink(y){
    listDrink.bebidas[y].id = document.getElementById("txtIdDrink").value;
    listDrink.bebidas[y].nombre = document.getElementById("txtNomDrink").value;
    listDrink.bebidas[y].descripcion = document.getElementById("txtDescDrink").value;
    listDrink.bebidas[y].foto = document.getElementById("txtFotoDrink").value;
    listDrink.bebidas[y].precio = document.getElementById("noPrice").value;
    listDrink.bebidas[y].categoria = document.getElementById("catDrink").value;
    
    let drink={"id":listDrink.bebidas[y].id,"nombre":listDrink.bebidas[y].nombre,
        "descripcion":listDrink.bebidas[y].descripcion,"foto":listDrink.bebidas[y].foto,
        "precio":listDrink.bebidas[y].precio,"categoria":listDrink.bebidas[y].categoria};
    
    listDrink.bebidas[y]=drink;
    
    Swal.fire({
        "title":"Cambio Correcto",
        "text":"La bebida ha sido actualizada correctamente",
        "icon":"success"
    });        
      
    cancelDrink();
    
    printTableDrink();
}
function lkDrink(){
    let lk=document.getElementById("txtLkDrink").value;
    
    let posFnd = -1;
    for(let i=0; i<listDrink.bebidas.length;i++){
       if(listDrink.bebidas[i].id==lk || listDrink.bebidas[i].nombre==lk || listDrink.bebidas[i].categoria==lk){ 
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
        txtTable+="<td>"+listDrink.bebidas[posFnd].id+"</td>";
        txtTable+="<td>"+listDrink.bebidas[posFnd].nombre+"</td>";
        txtTable+="<td>"+listDrink.bebidas[posFnd].descripcion+"</td>";
        txtTable+="<td><img src = "+listDrink.bebidas[posFnd].foto+" alt='NO HAY IMAGEN'  height='100' width='100'></td>";
        txtTable+="<td>"+listDrink.bebidas[posFnd].precio+"</td>";
        txtTable+="<td>"+listDrink.bebidas[posFnd].categoria+"</td>";
        txtTable+="<td><button type='button' class='btn boton2' onclick='modDrink("+posFnd+");'><i class='fa-solid fa-pen'></i></button></td>";
        txtTable+="<td><button type='button' class='btn boton2'  onclick='delDrink("+posFnd+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        txtTable+="</tr>";
    }
        document.getElementById("tbCatDrink").innerHTML=txtTable;
}
function cargarImgDrink()
{
    let inputFile = document.getElementById("ifFotoDrink");
    if(inputFile.files && inputFile.files[0]){
        let reader = new FileReader();
        reader.onload=function(e){
            let photo = e.target.result;
            document.getElementById("fotoDrink").src = photo;
            document.getElementById("txtFotoDrink").value = photo;
        };
        reader.readAsDataURL(inputFile.files[0]);
    }
}