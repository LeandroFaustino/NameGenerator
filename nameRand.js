/*
let str = "tiroliro";
let str2 = "night";
let phrase = `${str} in the house of the ${str2}`
console.log(phrase);

let age = 6 * null;
console.log(age);

console.log(typeof age)

let text = "tiroliro"
let part = text.slice(4,8);
console.log  ("tiro"+part);

let tiroliro = "Tiroliro";
let nome = prompt("Qual é o teu nome?");
let frase = `O teu nome é ${nome}?`;
let resposta = frase.replace(`${nome}`, tiroliro);

console.log(frase);
console.log(resposta); 
*/


var nomeLength = nome.length



    
    var letras= [];
    
        for (var i= 1; i <=nomeLength; i++){
        
            var letra = nome.slice(i-1, i);
    
            letras.push (letra);
        
        
        }
 
   
    function shuffle(array){

        array.sort(()=> Math.random() - 0.5);

    }
    
   
    
    function buscar(){

    
        var name= document.getElementById("nome").value;
        var nameLength = name.length
        var letras=[];
       

        for (var i= 1; i <=nameLength; i++){
            
                var letra = name.slice(i-1, i);
    
                letras.push (letra);
                
        
            }
    
            for( var b= 0; b<=letras.length * 2; b++){     
            
            shuffle(letras)
            
            var name1 = letras[1]
        
            for(var a=0; a<=letras.length-1; a++){
            
                
                var name1 = name1 + letras[a];
                
            
            }
            
            
            nomeSlice = name1.slice(1, name1.length);            
            nomeFinal = nomeSlice.charAt(0).toUpperCase() + nomeSlice.slice(1);
            
            
            document.getElementById("resultado").innerHTML= nomeFinal;

            
            
    }     
    
    

}  
    
var favoritos;
  

    function adicionar(){
        
        favoritos = favoritos + nomeFinal + "</br>";

        var newfavoritos = favoritos.replace("undefined", "");   

        document.getElementById("adicionar").innerHTML = newfavoritos; 
        
    }
    
    

function result(){
 
 for(var a=0; a<=letras.length-1; a++){
        
            
            document.write (  letras[a] );
        
        
        }

        
    }


        
function DoAnimation(){

    var targetElement = document.getElementById("adicionar");
    targetElement.className = "animate";
}

        
    
 
        

 
