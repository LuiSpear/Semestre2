// Crear una clase
class miClaseUno {
    constructor(primero, segundo){
        this.uno = primero;
        this.dos = segundo;
        this.tres = "hola a todos";
    };

    miMetodoUno(){
        return this.uno;
    };

    miMetodoDos(parametroUno, parametroDos){
        document.write(
            "El parametro UNO es: " + parametroUno +
            "<br>El parametro DOS es: " + parametroDos
        )
    }
};

class miClaseDos extends miClaseUno{
    constructor(uno, dos, cuarto){
        super (uno, dos)
        this.cuatro = cuarto;
    }
};

var ObjetoTres = new miClaseDos("Corona", "Villaseñor", 18);
document.write( ObjetoTres.cuatro );

// // Crear un objeto - instanciar
// var objetoUno = new miClase("Luis", 88888);
// // Recuperar datos

// objetoUno.miMetodoDos("Alex", 22222)