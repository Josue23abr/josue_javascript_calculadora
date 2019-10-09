var operandoA;
var operandoB;
var operacion;

function init() {
    var display = document.getElementById('display');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var on = document.getElementById('on');
    var igual = document.getElementById('igual');
    var menos = document.getElementById('menos');
    var mas = document.getElementById('mas');
    var punto = document.getElementById('punto');
    var por = document.getElementById('por');
    var igual = document.getElementById('igual');
    var dividido = document.getElementById('dividido');
    var signo = document.getElementById('sign');

    //alert(display.textContent.length)

    //Eventos
    uno.onclick = function(e) {
        //  display.textContent = display.textContent + "1"
        function uno() {
            if (display.textContent == "0") {
                display.textContent = "1"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "1"
            }
        }

        uno();
    }
    dos.onclick = function(e) {
        //display.textContent = display.textContent + "2"
        function dos() {
            if (display.textContent == "0") {
                display.textContent = "2"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "2"

            }
        }

        dos();
    }
    tres.onclick = function(e) {
        //display.textContent = display.textContent + "3"
        function tres() {
            if (display.textContent == "0") {
                display.textContent = "3"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "3"
            }
        }

        tres();

    }
    cuatro.onclick = function(e) {
        // display.textContent = display.textContent + "4"
        function cuatro() {
            if (display.textContent == "0") {
                display.textContent = "4"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "4"
            }
        }

        cuatro();
    }
    cinco.onclick = function(e) {
        //display.textContent = display.textContent + "5"
        function cinco() {
            if (display.textContent == "0") {
                display.textContent = "5"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "5"
            }
        }

        cinco();

    }
    seis.onclick = function(e) {
        // display.textContent = display.textContent + "6"
        function seis() {
            if (display.textContent == "0") {
                display.textContent = "6"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "6"
            }
        }


        seis();
    }
    siete.onclick = function(e) {
        // display.textContent = display.textContent + "7"
        function siete() {
            if (display.textContent == "0") {
                display.textContent = "7"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "7"
            }
        }

        siete();
    }
    ocho.onclick = function(e) {
        //display.textContent = display.textContent + "8"
        function ocho() {
            if (display.textContent == "0") {
                display.textContent = "8"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "8"
            }
        }

        ocho();
    }
    nueve.onclick = function(e) {
        //display.textContent = display.textContent + "9"
        function nueve() {
            if (display.textContent == "0") {
                display.textContent = "9"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "9"

            }

        }



        nueve();
    }
    cero.onclick = function(e) {
        function unCero() {
            if (display.textContent == "0") {
                display.textContent = "0"
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "0"
            }
        }

        unCero();

    }
    signo.onclick = function(e) {

        //var parOimpar = display.textContent.parseFloat;
        /*  if (display.textContent.parseFloat < 0) {
                display.textContent = display.textContent.parseFloat * -1
            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = "-" + display.textContent
            }

        }
        cambiarSigno()*/
        function cambiarSigno() {
            display.textContent = parseFloat(display.textContent) * -1;
        }
        cambiarSigno();
    }
    on.onclick = function(e) {
        resetear();
    }
    mas.onclick = function(e) {
        operandoA = display.textContent;
        operacion = "+";
        limpiar();
    }
    menos.onclick = function(e) {
        operandoA = display.textContent;
        operacion = "-";
        limpiar();
    }
    dividido.onclick = function(e) {
        operandoA = display.textContent;
        operacion = "/";
        limpiar();
    }
    por.onclick = function(e) {
        operandoA = display.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function(e) {
        operandoB = display.textContent;
        resolver();
    }

    punto.onclick = function(e) {
        function punto() {
            if (display.textContent.indexOf('.') != -1) {
                display.textContent = display.textContent;

            } else if (display.textContent.length >= 8) {
                display.textContent = display.textContent
            } else {
                display.textContent = display.textContent + "."
            }
        }

        punto();


    }






}

function limpiar() {
    display.textContent = "";
}

function resetear() {
    display.textContent = "0";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}



function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;


    }
    resetear();
    display.textContent = res;

}




init()