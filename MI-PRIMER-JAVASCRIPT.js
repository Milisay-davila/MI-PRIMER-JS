
   <html>
   <script>
        document.write("<h1>Hola mundo!</h1>");
    </script>
    <script>
        console.log("hola desde la consola!");
    </script>
    <script>
    var x = 100;
    document.write(X);
    </script>
    <script>
        var X= 100;
        console.log(x);
         x=42;
         console.log(x);
    </script>
    <script>
        alert("Cuadro de alerta")
    </script>
    <script>
        var num= 42; // Un número sin decimales
    </script>
    <script>
        var price= 55.55; //Un número con decimales
        document.write(price);
    </script>
    <script>
        var name: 'Milisay';
        var text: 'Mi nombre es Milisay Davila';
    </script>
    <script>
        varsayHello='Hola mundo!'\ 'Soy programadora JavaScript '
    </script>
    <script>
    var isActive = Verdadero; 
var isHoliday = Falso;
    </script>
    <script>
        var x=10+5;
        document.write(x);
    </script>
    <script>
        var x=10;
        var y=x + 5+ 22 + 45+ 6548;
        document.write(y);
    </script>
    <script>
        var x=10*5;
        document.write(x);
    </script>
    <script>
        var x=100/5;
        document.write(X);
    </script>
    <script>
        var myvariable= 26%6;
    </script>
    <script>
        var num=10;
        // num== 8 will return false
    </script>
    <script>
        (4>2) && (10<15);
    </script>
    <script>
        variable =(condition) ? value1:value2
    </script>
    <script>
    var isAdult=(age<18) ?"Muy joven":"Viejo";
    </script>
    <script>
        var mystring1 = "Estoy aprendiendo"
        var mystring2="JavaScript con SoloLearn"
        document.write(mystring1+mystring2)
    </script>
    <script>
    if (condition) {
   statements
}
    </script>
    <script>
        var myNum1= 7;
        var myNum2=10;
        if(myNum1 < myNum2){
            alert("JavaScript es fácil de aprender.")
        }
    </script>
    <script>
        var myNum1= 7;
        var myNum2=10;
        if(myNum1 > myNum2){
            alert("JavaScript es fácil de aprender.")
        }
    </script>
    <script>
    if (expression) {
   // Ejecutado si la condición es verdadera
}
else {
   // Ejecutado si la condición es falsa
}
    </script>
    <script>
        var myNum1 = 7;
        var myNum2= 10;
        if(myNum1 > myNum2){
            alert("Esta es mi es mi segunda condición");
        }
        else{
           alert("Esta es mi segunda condición");
        }
    </script>
    <script>
        var course =1;
        if(course==1){
            }document.write("<h1> Html tutorial </h1>");
        else if (course==2){
         } document.write("<h1> CSS Tutorila</h1>")
        else{

        }document.write("<h1>JavaScript tutorial</h1>")

    </script>
    <script>
        var course =3;
        if(course == 1){
            }document.write("<h1> Html tutorial </h1>");
        else if (course == 2){
         } document.write("<h1> CSS Tutorila</h1>")
        else{

        }document.write("<h1>JavaScript tutorial</h1>")

    </script>
    <script>
    switch (expression) {
  case n1: 
     statements
     break;
  case n2: 
     statements
     break;
  default: 
     statements
}
    </script>
    <script>
        var day = 2;
        switch (day){
            case 1:document.write("Lunes");
                break;
                case 2: document. write ("Martes");
                break;
                case 3: document.write("Miercoles");
                break;
                default:
                    document.write("otro día")
        }
    </script>
    <script>
        var color ="Amarillo";
        switch (color) {
            case "Azul":
                document.write:("Esto es azul");
                break;
            case "Rojo":
                document.write("Esto es rojo");
                break;
            case "verde":
                document.write("Esto es verde");
                break;
            
            case "Naranja":
                document.write("Esto es naranja");
                break;
            default:
                document.write("Color no encontrado.");

                
           
        }
    </script>
    <script>
        for(statement 1; statemen 2; statement 3){
            bloque de código a ejecutar

        }
    </script>
    <script>
        for(i=1; i<=5; i++){
            document.write(i + "<br />");
        }
    </script>
<script>
    var i = 0;
    for (;i<10;){
        document.write(i);
        i++;
    }
</script>
<script>
while (condition) {    
   code block
}
</script>
<script>
    var i=0;
    while(1<=10){
        document.write(1 + "<br />");
        i++;
    }
</script>
<script>
do {
   code block
}
while (condition);
</script>
<script>
    var i=20;
    do{
        document.write(i+"<br />");
        i++;
    }
    while(i<=25);
</script>
<script>
    for(i =0; i <= 10; i++){
        if(i==5){
            break;
        }
        document.write(i+"<br />");
    }
</script>
<script>
    for (i = 0; i <= 10; i++){
        if(i == 5){
            continue;
        }
        document.write(i + "<br />");
    }
</script>
<script>
function name() { 
  //code to be executed
}
</script>
<script>
    function  myFunction() {
        alert("Llamando a una función");
    }
     myFunction();
</script>

<script>
function myFunction(){
    alert("Cuadro de alerta!");
}
myFunction();
//"Cuadro de alerta!"

// some other code

myFunction();
//"Cuadro de alerta!"
</script>
<script>
    function sayHello(name) {
        alert("Hola, "+ name);
    }
    sayHello("David");
    sayHello("Maria");
    sayHello("John");

</script>
<script>
function myFunc(x, y) {
   // Algún código
}
</script>
<script>
function sayHello(Nombre, Edad) {
  document.write( Nombre + " es " + edad + " Anos.");
}
</script>
<script>
function sayHello(Nombre, Edad) {
  document.write( Nombre + " es " + edad + " Anos.");
}
sayHello("John",20);
</script>
<script>
    function myFunction(a,b) {
        return a*b;
    }
    var x=myFunction(5,6);
    // Return value will end up in x
</script>
<script>
    function  addNumbers(a,b) {
        var c = a+b;
        return c;
    }
    document.write(addNumbers(40,2));
</script>
<script>
    alert("¿De verdad quieres salir de esta página?")
</script>
<script>
    var user= prompt ("Por favor, escriba su nombre.");
    alert(user);
</script>
<script>
    var result = confirm("¿De verdad quieres salir de esta página?");
    if(result== true){
        alert("Gracias por visitarnos");
    }
    else{
        alert("Gracias por quedarte con nosotros");
    }
</script>
<script>
var person = {
 name: "John", age: 31, 
 favColor: "blue", height: 183
};
</script>
<script>
objectName.propertyName
//o
objectName['propertyName']
</script>
<script>
    var person={
        name:"Maria" , age :43,
        favColor:"green", height: 183
    };
    var x= person.age;
    var y= person['age'];
</script>
<script>
objectName.methodName()
</script>
<script>
var person = {
name: "John", age: 42, favColor: "pink"
};
</script>
<script>
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
</script>
<script>
    var p1= new person("Maria", 24,"Pink");
    var p2=new person("Jose",22,"blue");
    documente.write(p1.age); // Outputs 24
    document.write(p2.name); // Outputs "Jose"
</script>
<script>
    function personn(name,age) {
        this.name=name;
        this.age=age;
    }
    var Maria= new person("Maria", 26);
    var James= new person("James", 25);
</script>
<script>
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};
</script>
<script>
var John = {
  name: "John",
  age: 25
};
var James = {
  name: "James",
  age: 21
};
document.write(John.age);
</script>
<script>
methodName = function() { code lines }
objectName.methodName()
</script>
<script>
function person(name,age) {
    this.name=name;
    this.age=age;
    this.changName= function (name) {
        this.name=name;
    }
}
var p=new person("David",22);
p.changeName("Maria");
</script>
<script>
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
</script>
<script>
    function person(name,age) {
        this.name=name;
        this.age=age;
        this.year0fBirth=bornYear;
    }
    function bornYear() {
        return 2017-this.age;
    }
    var p=new person("A",22);
    document.write(p.year0fBith());
</script>
<script>
var curso1 ="HTML"; 
var curso2 ="CSS"; 
var curso3 ="JS"; 
</script>
<script>
var curso = new Array("HTML", "CSS", "JS");
</script>
<script>
var curso = new Array("HTML", "CSS", "JS"); 
var curso = curso[0]; // HTML
curso[1] = "C++"; //Cambia el segundo elemento
</script>
<script>
    var cuso=new Array("HTML","CSS","JS");
    document.write(cursos[10]);
</script>
<script>
    var cursos= new Array(3);
    curso[0]="HTML";
    curso[1]="CSS";
    curso[2]="JS";
</script>
<script>
var cursos= new Array();
    curso[0]="HTML";
    curso[1]="CSS";
    curso[2]="JS";
    curso[3]= "C++";
</script>
<script>
var cursos= ["HTML","CSS","JS"];
</script>
<script>
var cursos= ["HTML","CSS","JS"];
document.write(cursos.lenght);
</script>
<script>
    var c1=["HTML","CSS"];
    var c2=["JS","C++"];
    var cursos= c1.concat(c2);
</script>
<script>
    var person=[]; //empty Array
    person["Nombre"]="Jose";
    person["Edad"]=54;
    document.write(person["Edad"]);
</script>
<script>
    document.write(Math.PI);
</script>
<script>
    var number=Math.sqrt(5);
    document.write(number);
</script>
<script>
    var n=prompt("Ingrese un numero","");
    var answer= Math.sqrt(n);
    alert("La raíz cuadrada de"+n+"es"+respuesta);
</script>
<script>
    function myAlert() {
        alert("Hola");
    }
    setInterval(myAlert, 3000);
</script>
<script>
//Vier Ene 02 1970 00:00:00
var d1 = new Date(86400000); 

//Vier Ene 02 2015 10:42:00
var d2 = new Date("Enero 2, 2015 10:42:00");

//Dom Ene 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);
</script>
<script>
    var d=new Date();
    var hours=d.getHours();
    //Horas es igual a la hora actual.

</script>
<script>
    function prinTime() {
        var d=new Date();
        var hours=d.getHours();
        var mins=d.getMinutes();
        var secs=d.get.Seconds();
        document.body.innerHTML=
        hours+":"+mins+":"+secs;
    }
    setInterval(printTime,1000)
</script>
<script>
document.body.innerHTML = "Algún texto";
</script>
<script>
var elem = document.getElementById("demo");
elem.innerHTML = "Hola Mundo!";
</script>
<script>
var arr =  document.getElementsByClassName("demo");
//Acceder al segundo elemento
arr[1].innerHTML = "Hola";
</script>
<body>
    <div id="demo">
        <p>Esto es para texto.</p>
        <p>Esto es para texto.</p>
    </div>
    <script>
        var a = document.getElementById("demo");
        var arr = a.childNodes;
        for(var x=0;x<Array.length;x++){
            arr[x].innerHTML="Nuevo texto";
        }

    </script>
</body>
<img id="mi imagen" src="http://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png" alt="" />
<script>
var el = document.getElementById("mi imagen");
el.src = "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg";
</script>
<div id="demo" style="width:200px">Algun texto</div>
<script>
    var x=document.getElementById("demo");
    x.style.color="6600FF";
    x.style.width="100px";
</script>
<script>
var node = document.createTextNode("Nuevo texto");
</script>
<div id="demo">Algun contenido</div>
<script>
    //Creando un nuevo parrafo
    var p=document.createElement("p");
    var node=document.createTextNode("Nuevo Texto");
    //agregando el texto al párrafo
    var div=document.getElementById("demo");
    // agregando el párrafo al div
    div.appendChild(p);
</script>
<div id="demo">
    <p id="p1">Esto es un parrafo</p>
    <p id="p2">Esto es otro parrafo</p>
</div>
<script>
    var parent=document.getElementById("demo");
    var child= document.getElementById("p1");
    parent.removeChild(child);
</script>
<div id="demo">
    <p id="p3">Esto es un parrafo</p>
    <p id="p4">Esto es otro parrafo</p>
</div>
<script>
    var p= document.createElement("p");
    var node=document.createTextNode("Esto es nuevo");
    p.appendChild(node);

    var parent=document.getElementById("demo");
    var child=document.getElementById("p3");
    parent.replaceChild(p,child);
</script>
<style>
    #container{
        width:200px;
        height:200 px;
        background: blue;
        postion:relative;

    }
    #box{
        width:50px;
        height:50px;
        background:absolute;
    }

</style>
<div id="container">
    <div id="box"></div>
</div>
<script>
var t = setInterval(move, 500); 
</script>
<script>
// Posición inicial
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}
</script>
<script>
var t = setInterval(move, 10);
</script>
<script>
function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}
</script>
<script>
    var pos=0;
    //nuestro elemento de caja
    var box=document.getElementById("box");
    var t=setInterval(move,10);
    function move() {
        if(pos>=150){
            clearInterval(t);
        }
        else{
            pos +=1;
            box.style.left=pos+"px";
        }
    }
</script>
<button onclick="show()">Presioname</button>
<script>
    function show() {
        alert("Hola");
    }
</script>
<script>
    var x=document.getElementById("demo");
    x.onclick(){
        document.body.innerHTML=Date();
    }
</script>
<body onload="doSomething()"></body>
<script>
window.onload ​= function() {

​//Algun codigo
}


</script>
<input tyoe="Texto" id="Nombre" onchange="change()"></input>
<script>
    function change(){
        var x=document.getElementById("Nombre");
        x.value=x.value.toUpperCase();
    }
</script>
<script>
element.addEventListener(event, function, useCapture);
</script>
<script>
element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hola Mundo!");
}
</script>
<script>
addEventListener(event, function, useCapture)
</script>
<script>
//Captura de propagación
elem1.addEventListener("click", myFunction, Verdadero); 

//Propagación burbujeante
elem2.addEventListener("click", myFunction, Falso);
</script>
<div>
    <button>Presionar</button>
    <img id="Click"
    src="https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg"
    width="200px" height="100px"/>
    <button>Siguiente</button>
</div>
<script>
var images = [
   "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg", 
   "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg", 
   "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg"
];
</script>
<div>
  <button onclick="Anterior()"> Anterior </button>
  <img id="slider" src="https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg" 
    width="200px" height="100px"/>
  <button onclick="Siguiente()"> Siguiente </button>
</div>
<script>
    var images=[
        "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg", 
   "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg", 
   "https://static1.educaedu-colombia.com/adjuntos/12/00/08/sena---servicio-nacional-de-aprendizaje-000871_large.jpg"

    ];
    function siguiente() {
        var slider = document.getElementById("slider");
        num++;
        if(num >= images.length){
            num=0;
        }
        silder.src=images[num];
    }
    
</script>
<form onsubmit="return validate()" method="post">
  Number: <input type="texto" name="num1" id="num1" />
  <br />
  Repeat: <input type="texto" name="num2" id="num2" />
  <br />
  <input type="presentar" value="presentar" />
</form>
<script>
    function validate() {
        var n1=document.getElementById("num1");
        var n2=document.getElementById("num2");
        if (n1.value!= "" && n.2value != ""){
            if (n1.value == n2.value){
                return true;
            }
        }
        alert("Los valores deben ser iguales y no en blanco");
        return false;
    }
</script>
<script>
var a = 10;
const b = 'Hola';
let c = Verdadero;
</script>
<script>
    if(Verdadero){
        left name='Jose';
    }
    alert(name); //genera un error
</script>
<script>
    function varTes() {
        var x=1;
        if(verdadero){
            var x=2; //misma variable
            console.log(x); //2
        }
        console.log(x); //2
    }
    function letTest() {
        let x=1;
        if(Verdadero){
            let x=2; //Diferente variable
            console.log(x) //2
        }
        console.log(x); //1
    }
</script>
<script>
    for(let i=0; i<3; i++){
        document.write(i);
    }
</script>
<script>
    const a ='Hola';
    a ='Adios';
</script>
<script>
    let name='David';
    let msg='Bienvenido'+name+'!';
    console.log(msg);
</script>
<script>
    let name='David';
    let msg= `Bienvenido ${name}!`;
    console.log(msg);
</script>
<script>
    let ab=8;
    let b= 34;
    let msg=`La suma es ${a+b}`;
    console.log(msg);
</script>
<script>
    let arr=[1,2,3];
    fot(let k= 0;<arr.length; k++){
        console.log(arr[k]);
    }
</script>
<script>let obj={a: 1, b:2, c:3};
for(let v in obj){
    console.log(v);
}
</script>
<script>
    let list=["x","y", "z"];
    for(let val of list){
        console.log(val);
    }
</script>
<script>
    for(let ch of "Hola"){
        console.log(ch);
    }
</script>
<script>
    function add(x,y) {
        var sum=x+y;
        console.log(sum);
        
    }
</script>
<script>
const add=(x,y) =>{
        let sum=x+y;
        console.log(sum);
</script>
<script>
    const greet =x => "Bienvenido" + x;
</script>
<script>
    const x=() => alert("Hola");
</script>
<script>
    var arr=[2,3,7,8];
    arr.forEach(function(el){
        console.log(el*2);
    });
</script>
<script>
    const arr=[2,3,7,8];
    arr.forEach(v =>{
        console.log(v*2);
    });
</script>
<script>
    function test(a,b=3,c=42) {
        return a+b+c;
    }
    console.log(test(5)); //50
</script>
<script>
const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50 
</script>
<script>
    let tree={
        height: 10,
        color:'Blue',
        grow(){
            this.height += 2;
        }

    };
    tree.grow();
    console.log(tree.height); // 12
</script>
<script>
    let height= 5;
    let health= 100;
     let athlete={
         height,
         health
     };
</script>
<script>
    var a= {x:1,x:2,x:3,x:4};
</script>
<script>
    let prop='Nombre';
    let id='1234';
    let mobile='08923';

    let user={
        [prop]: 'Mario',
        [`user_${id}`]; `${mobile}`
    };
</script>
<script>
    var i=0;
    var a={
        ['foo'+ ++i]:i,
        ['foo'+ ++i]:i,
        ['foo'+ ++i]:i
    };
</script>
<script>
    var param='size';
    var config={
        [param]:12,
        ['mobile'+ param.charAt(0).toUpperCase()+param.slice(1)]:4
    };
    console.log(config.mobileSize);
</script>
<script>
    let person={
        nombre: 'Mario',
        Edad: 17
    };
    let newPerson =person;// newPerson persona de referencias
    newPerson.name='Sofia';
    console.log(person.name); //Sofia
    console.log(newPerson.name);//SOfia
</script>
<script>
let person={
        nombre: 'Mario',
        Edad: 17
    };
    let newPerson =Object.assign({}, person);
    newPerson.name='Sofia';
    console.log(person.nombre); //Mario
    console.log(newPerson.name);//SOfia
</script>
<script>
let person={
        nombre: 'Mario',
        Edad: 17
    };
    let newPerson =Object.assign({}, person{name: 'Sofia'});
    
</script>
<script>
    let arr=['1','2','3'];
    let[uno,dos,tres]=arr;
    console.log(uno);//1
    console.log(dos);//2
    console.log(tres);//3
</script>
<script>
    let a=()=> {
        return[1,3,2];

    };
    let[uno,dos]=a();
</script>
<script>
    let a,b,c=4,d=8;
    [a,b=6]=[2]; //a=2,b=6

    [c,d]=[d,c] // C = 8, d=4
</script>
<script>
    let obj = {h:100,s:verdadero};
    let{h,s}=obj;

    console.log(h); //100
    console.log(s); //verdadero
</script>
<script>
    let a,b;
    ({a,b}={a:'Hola', b:'Mario'});
    
    console.log(a+b); //Hola Mario
    
</script>
<script>
    let{a,b}={a:'Hola', b:'Mario'};
    console.log(a+b);
</script>
<script>
    var o= {h:42, s:verdadero};
    var{h:foo, s:bar}=o;
    //console.log(h); //Error 
    console.log(foo); //42
</script>
<script>
    var obj={id:42, nombre:"Mario"};
    let{id=10,edad=20} =obj;

    console.log(id);//42
    console.log(edad); //20
</script>
<script>
    function containsAll(arr) {
        for(let k =1; k <arguments.length; k++){
            let num=arguments[k];
            if(arr.indexOf(num)=== -1){
                return falso;
            }
        }
        return verdadero;
    }
    let x=[2,4,6,7];
    console.log(containsAll(x,2,4,7));
    console.log(containsAll(x,6,4,9));
</script>
<script>
    function containsAll(arr,...nums) {
        for(let num of nums){
            if(arr.indexOf(num)===-1){
                return falso;
            }
        }
        return verdadero;
    }
</script>
<script>
    function myFunction(w,x,y,z) {
        console.log(w+x+y+z);
    }
    var args=[1,2,3];
    myFunction.apply(null,args.concat(4));
</script>
<script>
function myFunction(w,x,y,z) =>{
        console.log(w+x+y+z);
    };
    let args=[1,2,3];
    myFunction(...args,4);
</script>
<script>
    var dateFields=[1920,0,1]; // 1 ene 1970
    var date= new Date(...dateFields);
    console.log(date);

</script>
<script>
    var arr=["Uno","Dos","Cinco"];
    arr.splice(2,0, "Tres");
    arr.splice(3,0,"Cuatro");
    console.log(arr);
</script>
<script>
    let newArr=['Tres','Cuatro'];
    let arr = ['Uno','Dos',...newArr,'Cinco'];
    console.log(arr);
</script>
<script>
    const obj1={foo:'bar', x:42};
    const obj2={foo:'baz',y:5};
    const clonedObj={...obj1};// {foo:"bar",x: 42}
    const mergeObj={...obj1,...obj2};//{foo:"baz",x:42,y:5}
</script>
<script>
const obj1={foo:'bar', x:42};
    const obj2={foo:'baz',y:5};
    const merge=(...objects)=>({...objects});

    let mergeObj=merge(obj1,obj2);
    //{0:{foo:'bar',x:42},1:{foo:'baz',y:5}}

    let mergeObj2=merge({}obj1,obj2);
    //{0:{},1: {foo:'bar',x:42},2:{foo:'baz',y:5}}
</script>
<script>
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
</script>
<script>
    const square=new Rectangle(5,5);
    cont poster=new Rectangle (2,3);
</script>
<script>
    var square=class Rectangle{
        constructor(height,width){
            this.height=height;
            this.width=width;
        }
    };
</script>
<script>
    var Square=class{
        constructor(height,width){
            this.height=height;
            this.width=width;
        }
    };
</script>
<script>
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area(){
      return this.calcArea();
  }
  calcArea(){
      return this.height*this.width;
  }

}
const square= new Rectangle(5,5);
console.log(square.area);//25
</script>
<script>
    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
        static distance(a,b){
            const dx=a.x-b.x;
            const dy=a.y -b.y;
            return Math.hypot(dx,dy);
        }
    }
    const p1=new point(7,2);
    const p2=new point(3,8);
    console,log(Point.distance(p1,p2));
</script>
<script>
    class Animal{
        constructor(name){
            this.name = name;
        }
        speak(){
            console.log(this.name + 'hace un ruido.');
        }
    }
    class Dog extends Animal{
        speak(){
            console.log(this.name+ 'ladra.');
        }
}
    let dog=new Dog('Rex');
    dog.speak();
</script>
<script>
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name +'hace un ruido.');
    }
}
}
class Dog extends Aninmal{
    speak(){
        super.speak();//Super
        console.log(this.name + 'ladra');
    }
}
let.dog= New Dog('Rex';
dog.spek();
</script>
<script>
let map= new Map([['K1','v1'],['k2','v2']]);
console.log(map.size);//2
</script>
<script>
let map=new Map();
map.set('k1','v1').set('k2','v2');
console.log(map.get('k1'));//v1
console.log(map.has('k2')); //true
for(let kv of map.entries())
console.log(kv[0]+":" + kv[1]);
</script>
<script>
let set=new Set([1,2,4,2,59,9,4,9,1]);
console.log(set.size);//5
</script>
<script>
let set= new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for(let v of set.values())
console.log(v);
</script>
<script>
setTimeout(function () {
    console.log("Trabajo 1");
    setTimeout(Function()){
        console.log("trabajo 2");
    }, 1000);
},1000);

console.log("Fin");
</script>
<script>
new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
}); 
</script>
<script>
function async(work) {
    return new Promise(function(resolve,reject)){
        if(work === "")
        reject(Error("nada"));
        setTimeout(function(){
            resolve (work);
        },1000)
    });
}
asyncFunc("Trabajo 1")//Task 1
.then(function(result){
    console.log(result);
    return asyncFunc("Trabajo 2");// Task 2
}, function(error){
    console.log(error);
})
.then(function(result){
console.log(result);
}, function (error){
    console.log(error);
});
console.log("Fin");
</script>
<script>
function* idMaker(){
    let index=0;
    while(index<5)
    yield indez++;
}
var gen= idMaker();
console.log(gen.next().value);
</script>
<script>
const arr =['0','1','4','a','9','c','16'];
const my_obj={
    [Symbol.iterator]: function*(){
        for(let indez of arr){
            yield `${index}`;
        }
    }
};
const all=[...my_obj]
.map(i=> parseInt (1,10))
.map(Math.sqrt)
.filter((i)=>i<5)
.reduce((i,d)=> i +d);
console.log(all);
</script>
<script>
// lib/math.js
export ​let sum = (x, y) => { return x + y; }

export ​let pi = 3.14


// app.j

import * ​as math from "lib/mat
"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)
</script>
<script>
    [4,5,1,8,2,0].filter(function(x){
        return x > 3;
    })[0];
</script>
<script>
    [4,5,1,8,2,0].find(x => x > 3); 
</script>
<script>
    [4,5,1,8,2,0].findIndex(x => x >3);
</script>
<script>
    console.log(Array(3+1).join("food"));//
    foofoofoo
</script>
<script>
    console.log("foo".repeat(3)); // foofoofoo
</script>
<script>
    
</script>
</html>