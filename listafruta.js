

 function agreagarLi(){
     var texto=document.getElementById('liname').value;
     var li=document.createElement('LI');
     li.innerHTML=texto==''?'(nada)':texto;
     document.getElementById('lista').appendChild(li);
 }

/* investigar como funciona esta funcion ya que seria para borrae el dato ingresado?¡ */

 function borrar(){
    var lis=document.getElementById('lista').getElementsByTagName('dato');
     for(var i=0; i<lis.length;i++){
         lis[i].onclick=function(){
             if(confirm('¿Borrar este dato?'))
             this.parentNode.removeChild(this);
         };
     }
   }
