let listaAlim;

function cargarCatalogoAlim()
{
    listaAlim = {alimentos:[
            {"id":1,"nombre":"Chilaquiles",
             "descripcion":"Ricos chilaquiles verdes, rojos o blancos, que pueden ser acompañados con huevo, pollo y frijoles",
             "precio":130,
             "categoria":"Platillo",
             "foto":"../media/chilaquiles.jpg"},
            {"id":2,"nombre":"Quesabirrias",
             "descripcion":"Quesadillas de harina con birria",
             "precio":75,
             "categoria":"Platillo",
             "foto":"../media/quesabirrias.jpg"},
            {"id":3,"nombre":"Cheescake",
             "descripcion":"Una rebanada de cheescake de chocolate, frambuesa y fresa",
             "precio":55,
             "categoria":"Postre",
             "foto":"../media/cheesecake.jpg"}
    ]};
    printTableAlim();
}

function printTableAlim(){
    let contenido="";
    let renglon="";
    for(let i=0; i<listaAlim.alimentos.length; i++){
        renglon="";
        renglon+="<tr>";
        renglon+="<td>"+listaAlim.alimentos[i].id+"</td>";
        renglon+="<td>"+listaAlim.alimentos[i].nombre+"</td>";
        renglon+="<td>"+listaAlim.alimentos[i].descripcion+"</td>";
        renglon+="<td>"+listaAlim.alimentos[i].precio+"</td>";
        renglon+="<td>"+listaAlim.alimentos[i].categoria+"</td>";
        renglon+="<td><img src = "+listaAlim.alimentos[i].foto+" alt='NO HAY IMAGEN' height='100' width='100'></td>";
        renglon+="<td><button type='button' class='btn boton2' onclick='modAlim("+i+");'><i class='fa-solid fa-pen'></i></button></td>";
        renglon+="<td><button type='button' class='btn boton2'  onclick='delAlim("+i+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        renglon+="</tr>";
        contenido+=renglon;
        }
        document.getElementById("tbCatAlim").innerHTML=contenido;
}

function modAlim(i){
    document.getElementById("txtIdAlim").value = listaAlim.alimentos[i].id;
    document.getElementById("txtNomAlim").value = listaAlim.alimentos[i].nombre;
    document.getElementById("txtDescAlim").value = listaAlim.alimentos[i].descripcion;
    document.getElementById("txtPriceAlim").value = listaAlim.alimentos[i].precio;
    document.getElementById("txtCatAlim").value = listaAlim.alimentos[i].categoria;
    document.getElementById("txtFotoAlim").value = listaAlim.alimentos[i].foto;
    x=i;
    return x;
}

function cancelarAlim(){
    document.getElementById("txtIdAlim").value = "";
    document.getElementById("txtNomAlim").value = "";
    document.getElementById("txtDescAlim").value = "";
    document.getElementById("txtPriceAlim").value = "";
    document.getElementById("txtCatAlim").value = "";
    document.getElementById("txtFotoAlim").value = "";
}

function addAlim(){
    let lastId=listaAlim.alimentos[listaAlim.alimentos.length-1].id;
    let id = lastId+1;
    let nom = document.getElementById("txtNomAlim").value;
    let desc = document.getElementById("txtDescAlim").value;
    let price = document.getElementById("txtPriceAlim").value;
    let cat = document.getElementById("txtCatAlim").value;
    let foto = document.getElementById("txtFotoAlim").value;
    
    let alim={"id":id,"nombre":nom,"descripcion":desc,
              "precio":price,"categoria":cat,"imagen":foto};
    
    listaAlim.alimentos.push(alim);
    
    Swal.fire({
        "title":"Inserción Correcta",
        "text":"El alimento ha sido insertado correctamente",
        "icon":"success"
    });        
      
    cancelarAlim();
    
    printTableAlim();
}

function delAlim(i){
    Swal.fire({
  title: "Desea eliminar este Alimento?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Si",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    listaAlim.alimentos.splice(i,1);
    Swal.fire({
        "title":"Eliminación Correcta",
        "text":"El alimento ha sido eliminado correctamente",
        "icon":"success"
    }); 
    printTableAlim();
  } else if (result.isDenied) {
    Swal.fire("Eliminación cancelada", "", "info");
  }
});
    
}

function changeAlim(x){
    listaAlim.alimentos[x].id = document.getElementById("txtIdAlim").value;
    listaAlim.alimentos[x].nombre = document.getElementById("txtNomAlim").value;
    listaAlim.alimentos[x].descripcion = document.getElementById("txtDescAlim").value;
    listaAlim.alimentos[x].precio = document.getElementById("txtPriceAlim").value;
    listaAlim.alimentos[x].categoria = document.getElementById("txtCatAlim").value;
    listaAlim.alimentos[x].foto = document.getElementById("txtFotoAlim").value;
    
    let alim={"id":listaAlim.alimentos[x].id,"nombre":listaAlim.alimentos[x].nombre,
        "descripcion":listaAlim.alimentos[x].descripcion,"precio":listaAlim.alimentos[x].precio,
        "categoria":listaAlim.alimentos[x].categoria,"foto":listaAlim.alimentos[x].foto};
    
    listaAlim.alimentos[x]=alim;
    
    Swal.fire({
        "title":"Cambio Correcto",
        "text":"El alimento ha sido actualizado correctamente",
        "icon":"success"
    });        
      
    cancelarAlim();
    
    printTableAlim();
}

function lkAlim(){
    let lk=document.getElementById("txtLkAlim").value;
    
    let posFnd = -1;
    for(let i=0; i<listaAlim.alimentos.length;i++){
       if(listaAlim.alimentos[i].id==lk || listaAlim.alimentos[i].nombre==lk || listaAlim.alimentos[i].descripcion==lk){ 
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
        txtTable+="<td>"+listaAlim.alimentos[posFnd].id+"</td>";
        txtTable+="<td>"+listaAlim.alimentos[posFnd].nombre+"</td>";
        txtTable+="<td>"+listaAlim.alimentos[posFnd].descripcion+"</td>";
        txtTable+="<td>"+listaAlim.alimentos[posFnd].precio+"</td>";
        txtTable+="<td>"+listaAlim.alimentos[posFnd].categoria+"</td>";
        txtTable+="<td><img src = "+listaAlim.alimentos[posFnd].foto+" alt='NO HAY IMAGEN'  height='100' width='100'></td>";
        txtTable+="<td><button type='button' class='btn boton2' onclick='modAlim("+posFnd+");'><i class='fa-solid fa-pen'></i></button></td>";
        txtTable+="<td><button type='button' class='btn boton2'  onclick='delAlim("+posFnd+");'><i class='fa-solid fa-trash-can'></i></button></td>";
        txtTable+="</tr>";
    }
        document.getElementById("tbCatAlim").innerHTML=txtTable;
}

function cargarImagenAlim()
{
    let inputFile = document.getElementById("ifFotoAlim");
    if(inputFile.files && inputFile.files[0]){
        let reader = new FileReader();
        reader.onload=function(e){
            let photo = e.target.result;
            document.getElementById("fotoAlim").src = photo;
            document.getElementById("txtFotoAlim").value = photo;
        };
        reader.readAsDataURL(inputFile.files[0]);
    }
}