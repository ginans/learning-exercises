document.getElementById("boton").addEventListener("click", 
    function(){
        alert("presionaste el boton!");
    }
);

document.getElementById("boton2").addEventListener("click",
    function(){
        document.body.style.backgroundColor= color_random();
});

function color_random(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}