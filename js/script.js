//ver mas...
var boton = document.getElementsByClassName("verMas");
var i;
for (i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", function(){
    var panel = this.nextElementSibling; //elemento siguiente

    if (panel.style.display == ''){
      panel.style.display = 'block';
  } else {
      panel.style.display =''
  }
  
  });
}    
//animaciones AOS
    AOS.init();
//ver doctores
var btnDoc = document.getElementsByClassName("verDoc");
var j;
for (j = 0; j < btnDoc.length; j++) {
  btnDoc[j].addEventListener("click", function(){
    var panel = this.nextElementSibling; //elemento siguiente

    if (panel.style.visibility == ''){
      panel.style.visibility = 'visible';
  } else {
      panel.style.visibility =''
  }
  
  });
}  

//iniciar sesion o afiliarse
var btnLogin = document.getElementById('btnlogin');
var btnAfil =document.getElementById('btnAfil');
var frente= document.getElementById("frente");
var atras= document.getElementById("atras");
var usuario= document.getElementById("usuario");

if(btnLogin){
btnLogin.addEventListener('click', function(){
   frente.style.visibility="visible"
   atras.style.visibility = "hidden";  
   usuario.style.display = "none";  
});
}

if(btnAfil){
btnAfil.addEventListener('click', function(){
  atras.style.visibility = "visible";  
  frente.style.visibility="hidden";
  usuario.style.display = "none";  
});
}
//aparecer opciones para iniciar sesion
var boton= document.getElementById("boton");
if(boton){
boton.addEventListener('click', function(){
var opciones= document.getElementById("opciones");
if(opciones.style.visibility == ""){
  opciones.style.visibility="visible";
}else{
  opciones.style.visibility="";
}
});

}

//redirigir ala afiliacion del usuario
var btnPacienteAfil = document.getElementById("btnPacienteAfil");


if(btnPacienteAfil){
btnPacienteAfil.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../afiliados/afiliacionUsuario.html";

});
}

//redirigir al area del Paciente
var btnPaciente = document.getElementById("btnPaciente");

if(btnPaciente){
btnPaciente.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../areas/personalPaciente.html";
});
}
//redirigir alpago del Paciente
var btnPago = document.getElementById("btnPago");

if(btnPago){
btnPago.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../afiliados/pago.html";
});
}
//redirigir al historial del Paciente
var btnHistorial = document.getElementById("btnHistorial");

if(btnHistorial){
btnHistorial.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../afiliados/historial.html";
});
}
//redirigir ahoras Pendientes del Paciente
var btnPendientes = document.getElementById("btnPendientes");

if(btnPendientes){
btnPendientes.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../afiliados/pendientes.html";
});
}
//redirigir al area del Administrador
var btnAdmin = document.getElementById("btnAdmin");

if(btnAdmin){
btnAdmin.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../areas/personalAdministrativo.html";
});
}
//redirigir a estadisticas del Administrador
var btnEstadisticas = document.getElementById("btnEstadisticas");

if(btnEstadisticas){
btnEstadisticas.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../administracion/estadisticas.html";
});
}
//redirigir a productidad del Administrador
var btnProductividad = document.getElementById("btnProductividad");

if(btnProductividad){
btnProductividad.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../administracion/productividad.html";
});
}
//redirigir a personal del Administrador
var btnPersonal = document.getElementById("btnPersonal");

if(btnPersonal){
btnPersonal.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../administracion/personal.html";
});
}
//redigir a ingresos del Administrador
var btnIngresos = document.getElementById("btnIngresos");

if(btnIngresos){
btnIngresos.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../administracion/ingresos.html";
});
}
//redirigir al area del Médico
var btnMedico = document.getElementById("btnMedico");

if(btnMedico){
btnMedico.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../areas/personalMedico.html";
});
}
//redirigir ala estadistica del Médico
var btnEstadisticaMedico = document.getElementById("btnEstadisticaMedico");

if(btnEstadisticaMedico){
btnEstadisticaMedico.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../medico/estadisticasMedico.html";
});
}
//redirigir ala Productividad del Medico
var btnProductividadMedico = document.getElementById("btnProductividadMedico");

if(btnProductividadMedico){
btnProductividadMedico.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../medico/productividadMedico.html";
});
}
//redirigir ala agenda del Médico
var btnAgendaMedico = document.getElementById("btnAgendaMedico");

if(btnAgendaMedico){
btnAgendaMedico.addEventListener('click', function(e){
  e.preventDefault();
  location.href ="../medico/agendaMedico.html";
});
}

