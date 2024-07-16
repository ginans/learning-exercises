#Menú Interactivo
while True: #se ejecuta infinitamente
    respuestaCorrecta=1
    print("Cuál es el nombre de la programadora?: ")
    print("1. Gina")
    print("2. Ayla")
    print("3. Carolina")
    eleccion=(int(input("Ingrese el numero que indica su elección: ")))

    if eleccion!=respuestaCorrecta:
        print("Respuesta incorrecta, vuelve a intentarlo")        
    elif eleccion==respuestaCorrecta:
        print("Correcto! La programadora se llama Gina!")
        break
    
    