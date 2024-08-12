function cargarMSuc(){
    fetch("sucursal.html")
            .then(response => response.text())
            .then(data => {document.getElementById("mainContainer").innerHTML=data;
            cargarCatalogo();
        });
}
function cargarMUsr(){
    fetch("usuario.html")
            .then(response => response.text())
            .then(data => {document.getElementById("mainContainer").innerHTML=data;
            cargarCatalogoUser();
        });
}
function cargarMFood(){
    fetch("alimento.html")
            .then(response => response.text())
            .then(data => {document.getElementById("mainContainer").innerHTML=data;
            cargarCatalogoAlim();
        });
}
function cargarMDrink(){
    fetch("bebida.html")
            .then(response => response.text())
            .then(data => {document.getElementById("mainContainer").innerHTML=data;
            loadCatDrink();
        });
}
function cargarMCombo(){
    fetch("combo.html")
            .then(response => response.text())
            .then(data => {document.getElementById("mainContainer").innerHTML=data;
            cargarCatalogoCombo();
        });
}