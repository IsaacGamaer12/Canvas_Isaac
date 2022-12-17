canvas = document.getElementById("myCanvas");

//2. Agrega el nombre de la variable ctx
 ctx = canvas.getContext("2d");

// 3. Agrega el color para el círculo
color = "Purple"; 

// 4. Agrega la variable ctx para la función beginPath que indica al lienzo que comience a dibujar:
    ctx.beginPath();

// 5. Establece el valor de la variable color para strokeStyle:
ctx.strokeStyle = color ;

//6. Establece el ancho del pincel:
ctx.lineWidth = 3 ;

ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// 7. Agrega un evento addEventListener para el canvas:
canvas.addEventListener("mousedown", my_mousedown);


// 8. Completa la función my_mousedown que llamará el evento
function my_mousedown(e){
   
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

     // 9. Muestra las coordenadas actuales de mouse_x y mouse_y en la consola:
 console.log("X = e.clientX" + mouse_x + " ,Y =  " + mouse_y);

    //10. llama a la funcion círculo con las coordenadas x y:
        circle(mouse_x , mouse_y);    
}
// 11. Construye la función circle

 function circle(mouse_x , mouse_y){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

