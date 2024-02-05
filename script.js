//||||||||||||||||||||||||||| VARIABLES


var Listas_Contenedor=document.getElementById("listas").innerHTML;

var Listas_Oferta_Usuario=`

 <p style="display:none;" >    <span class="contenedor_de_iconos_items" >
<svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"/></svg> |
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg> | 0.3 HT + 2 &euro; </span>  Reparo Ordenadores a domicilio o por teléfono  
</p>                                                                                                                     
<p>   Luces led RGB</p>
<p >  Arreglos varios</p>
<p>clases de guitarra</p>
<p > Reparo Ordenadores</p>
<p> Luces led RGB</p>
<p >Arreglos varios</p>
<p>clases de guitarra</p>
<p > Reparo Ordenadores</p>
<p> Luces led RGB</p>
<p >Arreglos varios</p>
<p>clases de guitarra</p>
<p > Reparo Ordenadores</p>
<p> Luces led RGB</p>
<p >Arreglos varios</p>
<p>clases de guitarra</p>
<p > Reparo Ordenadores</p>
<p> Luces led RGB</p>
<p >Arreglos varios</p>
<p>clases de guitarra</p>
<p > Reparo Ordenadores</p>
<p> Luces led RGB</p>
<p >Arreglos varios</p>
<p >* clases de guitarra</p>
<br>`;



var  Listas_Oferta_Comunidad=`<p>Limpieza en casa </p>
<p>Abogado Laboral</p>
<p>Manitas parael Hogar</p>
<p>Limpieza en casa </p>
<p>Abogado Laboral</p>
<p>Manitas parael Hogar</p>
<p>Limpieza en casa </p>
<p>Abogado Laboral</p>
<p>Manitas parael Hogar</p> `;



var Listas_Demanda_Usuario=`<p id="003461822973210" >
       
Un korg kronos 
<span class="contenedor_de_iconos_items"  >
<svg xmlns="http://www.w3.org/2000/svg" fill="red" style="margin-left: 5px;" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>


   </span> 

</p>

<p >Guitarra Ibanez</p>
<p>Tiny House movil</p>
<p >Piso en playa mareny</p>
<p >Viaje norte de Europa  </p>
<p >Pagar menos de Luz </p>
<p >Comida ecologica barata </p>
<p  >Tesla  </p>
<p  >Robot para limpiar casa</p>
<p   >Ahorrar en factura de Gas</p>
<p   > * Bajar de peso </p>
<br>`;




var  Listas_Demanda_Comunidad=` <p>Chofer </p>
<p>Aceite de Oliva a buen precio</p>
<p>Tomates ecologicos</p>
<p>Chofer </p>
<p>Aceite de Oliva a buen precio</p>
<p>Tomates ecologicos</p>
<br> `;




//||||||||||||||||||||||||||||||||||||| OBJETOS

const Objeto_Oferta_Usuario={

  titulo_pestaña:"LO QUE OFREZCO",
  contenido_lista:function () {
   document.getElementById("listas").innerHTML=Listas_Oferta_Usuario;

   }
 };

const Objeto_Oferta_Comunidad={

   titulo_pestaña:"LO QUE OFRECEN",
   contenido_lista:function () {
     document.getElementById("listas").innerHTML=Listas_Demanda_Usuario;
       
     }
  
};


// ||||||||||||||||||||||||||||| FUNCIONES






  

var obtenerOpcionMarcadaMenu = function() {
  var opciones = document.getElementsByName("modo_menu");
  for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
          return opciones[i].value;
      }
  }
  // Si no se encuentra ninguna opción marcada, puedes devolver un valor predeterminado o null.
  return "usuario";
}




window.addEventListener('load', function() {   retornando_contenido_estilo_click("usuario");  } );




function quita_estilos_iconos() {  
                                 const elementos = document.querySelectorAll('.icono');
                                 for (let i = 0; i < elementos.length; i++) {
                                 elementos[i].style.fill = 'white';
                               }//for

                               }// Fin de función


function manejarEvento(evento) {

  const elementos = document.querySelectorAll('.icono');
  

  elementos.forEach((elemento) => {
    elemento.addEventListener(evento,function() {
    
      quita_estilos_iconos();
      retornando_contenido_estilo_click(elemento.id);
      
    });
  });


}






function cambia_estilos_listas_segun_click_iconos(icono_oferta_o_demanda, icono_pie ){



  //================== Depende de del icono que este activado del menu principal pie

 if(icono_pie=="usuario" && icono_oferta_o_demanda =='icono_oferta' ){

  // Actualiza Titulo

   document.getElementById("icono_oferta").innerHTML="LO QUE OFREZCO";
   document.getElementById("icono_demanda").innerHTML="LO QUE BUSCO";
    document.getElementsByName("modo_menu")[0].checked="true";


  // actualiza listas

         document.getElementById("listas").innerHTML=Listas_Oferta_Usuario;

  // Marca boton pie

         document.getElementById("usuario").style.fill='red'; 



 } 

 else if( icono_pie=="usuario" && icono_oferta_o_demanda =='icono_demanda'  )  {


   // Actualiza Titulo

    document.getElementById("icono_oferta").innerHTML="LO QUE OFREZCO";
    document.getElementById("icono_demanda").innerHTML="LO QUE BUSCO";
  
        // actualiza listas

        document.getElementById("listas").innerHTML=Listas_Demanda_Usuario;

        // Marca boton pie 

        document.getElementById("usuario").style.fill='red'; 


 }else if( icono_pie=="comunidad" && icono_oferta_o_demanda =='icono_oferta'  )  {

 // Actualiza Titulo
   
    document.getElementById("icono_oferta").innerHTML="LO QUE OFRECEN";
    document.getElementById("icono_demanda").innerHTML="LO QUE BUSCAN";
  
   
   // actualiza listas

   document.getElementById("listas").innerHTML=Listas_Oferta_Comunidad;

   // Marca boton pie 

   document.getElementById("comunidad").style.fill='red'; 


 }else if( icono_pie=="comunidad" && icono_oferta_o_demanda =='icono_demanda'  )  {

   // Actualiza Titulo

   document.getElementById("icono_oferta").innerHTML="LO QUE OFRECEN";
   document.getElementById("icono_demanda").innerHTML="LO QUE BUSCAN";


     // actualiza listas

     document.getElementById("listas").innerHTML=Listas_Demanda_Comunidad;

     // Marca boton pie 

     document.getElementById("comunidad").style.fill='red'; 


   }



  //================== Depende de la pestaña de oferta o demanda cambiara el estilo de las mismas y de el cuadro de lista

         let borde_listas="";
         let aplica_color_texto="";
         let aplica_opacidad="";
         let aplica_icono_alta="";



         if(icono_oferta_o_demanda =='icono_oferta'){
              borde_listas="solid 3px #09734C";
              aplica_color_texto="icono_demanda";
              aplica_opacidad="icono_demanda";
              aplica_icono_alta="#09734C";

                                                    }//if

              else{ 
                 borde_listas="solid 3px #BF4B4B";
                 aplica_color_texto="icono_oferta";
                 aplica_opacidad="icono_oferta";
                 aplica_icono_alta="#BF4B4B";  }//else





         document.getElementById(icono_oferta_o_demanda).style.border="solid 3px #09734C";
         document.getElementById(icono_oferta_o_demanda).style.borderBottom="none";
         document.getElementById(icono_oferta_o_demanda).style.color="aqua";
         document.getElementById(icono_oferta_o_demanda).style.opacity="1";
         document.getElementById("listas").style.border=borde_listas;
         document.getElementById(aplica_color_texto).style.color="white";
         document.getElementById(aplica_opacidad).style.opacity="0.2";
         document.getElementById("icono_alta").style.fill=aplica_icono_alta;


         }// cambia_estilos_listas_segun_click_iconos




 


 
function retornando_contenido_estilo_click(id){


    
  
 // === Cambia Estilos ICONO

 document.getElementById(id).style.fill='red'; // Marca el icono en rojo

  //---- 



  switch(id){


    case 'icono_oferta':
    
         cambia_estilos_listas_segun_click_iconos(id,obtenerOpcionMarcadaMenu());
      
          break;



     case 'icono_demanda':

          cambia_estilos_listas_segun_click_iconos(id,obtenerOpcionMarcadaMenu());
      

                           
           break;


      case 'usuario':

      // CAMBIA ICONO CENTRAL

      document.getElementById("contenedor_icono_centro").innerHTML=' <svg id="icono_alta" xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>';


        

      //Marca en el radio oculto modo_menu opcion Usuario

       cambia_estilos_listas_segun_click_iconos("icono_oferta","usuario");

      document.getElementsByName("modo_menu")[0].checked="true";
     
        //================== Muestra  contenedores de usuario y comunidad
                      
     
      
              break;

      case 'comunidad':


  // CAMBIA ICONO CENTRAL

      document.getElementById("contenedor_icono_centro").innerHTML='<svg  id="icono_alta" xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>';

      

   cambia_estilos_listas_segun_click_iconos("icono_oferta","comunidad");

  //Marca en el radio oculto modo_menu opcion comunidad

  document.getElementsByName("modo_menu")[1].checked="true";

 
              break;

         

             }
          
           
  
                      }// Función retornando_contenido

 

//=============================MUESTRA PANTALLA REGISTROS


/*
document.getElementById("003461822973210").addEventListener("click",
        function(){
         //alert("hola");

          document.getElementById("logo").style.display = "none";
          document.getElementById("pantalla_demanda").style.display = "block";
   
        }  )
*/




manejarEvento('touchstart');
manejarEvento('click');




//=================== PONE EL CURSOR AL PRINCIPIO DEL TEXAREA ======

 var textarea = document.getElementById("pantalla_descripcion_textarea");


function setCursorAtBeginning() {
  textarea.setSelectionRange(0, 0);
}

// Establece el foco en el textarea y ajusta el cursor al principio
textarea.addEventListener("focus", setCursorAtBeginning);

// Si deseas también ajustar el cursor al principio al hacer clic en el textarea
textarea.addEventListener("click", setCursorAtBeginning);