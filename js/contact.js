//Subcription
function mostrar_inputs(){
    let subcription=document.getElementById("subcription").value;

    localStorage.setItem('subcription', JSON.stringify(subcription))
}

//Comentarios
function mostrar_com(){
    let fullname=document.getElementById("fullname").value;
    let emails=document.getElementById("emails").value;
    let movil=document.getElementById("movil").value;
    let affair=document.getElementById("affair").value;
    let message=document.getElementById("message").value;

    localStorage.setItem('fullname', JSON.stringify(fullname))
    localStorage.setItem('emails', JSON.stringify(emails))
    localStorage.setItem('movil', JSON.stringify(movil))
    localStorage.setItem('affair', JSON.stringify(affair))
    localStorage.setItem('message', JSON.stringify(message))
}