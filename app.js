const botones = document.querySelectorAll('.numero');
const operacion = document.querySelectorAll('.operador');
var valorActual = document.getElementById('valor-actual');
var valorAnterior = document.getElementById('valor-anterior');
const borrado = document.querySelector('.borrado');
var simbolo = document.getElementById('simbolo');
const clear = document.querySelectorAll('.clear')[0];
const igual = document.querySelectorAll('.igual')[0];

var opeActual ='';
var opeAnterior = '';
var resultado = undefined;
var calculo;
var op;



botones.forEach(boton => {
    boton.addEventListener('click', ( ) => {
        agregarNumero(boton.innerText);// se crea despues esta funcion que agrega un número       
    })
});

operacion.forEach(operador => {
    operador.addEventListener('click', () => {
        seleccionarOperacion(operador.innerText); // se crea despues esta funcion  que selecciona la operación     
         
    })
});


borrado.addEventListener('click',() => {
    opeActual = opeActual.slice(0,-1);
    actualizarPantallaActual();
    
});

igual.addEventListener('click',()=>{
  calcular();
  opeActual = calcular();
  opeAnterior = '';
  op='';
  
  simbolo.innerText = '';
  actualizarPantallaActual(); 
  actualizarPantallaAnterior(); 
  actualizarPantallaSimboloCal();

});


clear.addEventListener('click',()=>{
    limpiar();
    actualizarPantallaActual();
    actualizarPantallaAnterior();
    actualizarPantallaSimbolo();
});


function agregarNumero(num){
    opeActual = opeActual + num;
    actualizarPantallaActual();

};

function seleccionarOperacion(operador){

    if(opeAnterior !=='' && opeActual !=='') {
        calcular();

        opeActual = calcular();
        opeAnterior = '';
        op='';
        
        simbolo.innerText = '';
        actualizarPantallaActual() 
        actualizarPantallaSimboloCal();
    };
    
    if(opeActual !== ''){
        
        op = operador.toString();
        opeAnterior = opeActual;
        opeActual = '';
        operador = '';
        actualizarPantallaSimbolo()
        actualizarPantallaAnterior()
        actualizarPantallaActual()
    }
    
    if(opeAnterior !== '' && opeActual ==='' && operador !==''){
        
        op = operador.toString();
        actualizarPantallaSimbolo()

    }
    
    if(opeActual ==='') return;
 
};


function calcular () {
   
        switch (op) {
            case '+':
                calculo = parseFloat(opeAnterior) + parseFloat(opeActual);
                                
               break;
            case '-':
                calculo = parseFloat(opeAnterior) - parseFloat(opeActual);
                break;
            case '*':
                calculo = parseFloat(opeAnterior) * parseFloat(opeActual);
                break;
            case '/':
                calculo = parseFloat(opeAnterior) / parseFloat(opeActual);
                break;
        
            default:
                break;
        
            }
            
            return calculo;
    }

    



function actualizarPantallaCalculo(){
    valorAnterior.innerText = toString(calcular());
   };
function actualizarPantallaActual(){
    valorActual.innerText = opeActual;
   };
function actualizarPantallaAnterior(){
    valorAnterior.innerText = opeAnterior;
};
function actualizarPantallaSimbolo(){
    simbolo.innerText = op;
};
function actualizarPantallaSimboloCal(){
    simbolo.innerText = '';
};



function limpiar (){
    opeActual ='';
    opeAnterior = '';    
    resultado = undefined;
    op ='';
};