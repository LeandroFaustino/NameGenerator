    
    var favoritos;

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
    
               
            
            shuffle(letras)
            
            var name1 = letras[1]
        
            for(var a=0; a<=letras.length-1; a++){
            
                
                var name1 = name1 + letras[a];
                
            
            }
            
            
            nomeSlice = name1.slice(1, name1.length);            
            nomeFinal = nomeSlice.charAt(0).toUpperCase() + nomeSlice.slice(1);
            
            
            document.getElementById("resultado").innerHTML= nomeFinal;

            
            
    
    

}  
    

  

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

        
    
 
        

 
