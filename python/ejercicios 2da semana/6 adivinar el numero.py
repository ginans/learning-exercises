#Generar numero aleatorio del 1 al 10 y que permita al usuario adivinar el numero
#el programa debe continuar hasta que el usuario adivine el numero correctamente

print("Adivina el numero")
import random
x=random.randint(0,10)
while True:
    n=(int(input("ingrese un numero del 1 al 10: ")))
    if x!=n:
        print(f"no adivinaste, el numero era {x} intenta de nuevo!")
    else:
        print(f"lo lograste!, el numero es: {x}")
        break
        
