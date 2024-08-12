function login(){
    let usr=document.getElementById("txtUsr").value;
    let pssd=document.getElementById("txtPssd").value;
    
    if(usr=="admin" && pssd=="admin"){
        location.href="http://localhost:8080/ElZarape/html/principal.html";
    }
    else{
        Swal.fire({
            title:"Acceso denegado", 
            text:"El usuario y/o contraseña, son incorrectos",
            icon:"error"
        });
        document.getElementById("txtUsr").value="";
        document.getElementById("txtPssd").value="";
        
    }
}


