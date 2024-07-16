# Escribir una función que muestre por pantalla el saludo ¡Hola amiga! cada vez que se la invoque.

def saludar():
    nombre=input("Cual es tu nombre?: ")
    print(f"Hola, {nombre}!")
    return saludar

saludar()

def saludar1(nombre):
    print(f"Hola, {nombre}!")
    return saludar1

saludar1("Elena")


ejemplo= not True
print(ejemplo)