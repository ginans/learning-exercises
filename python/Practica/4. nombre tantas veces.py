nombre=input("Cuál es su nombre?: ")
multiplicador=int(input("Cuantas veces desea repetir su nombre?: "))

for n in range (1,100):
    print(nombre)
    if n==multiplicador:
        break

print("===================================")

nombre=input("Cuál es su nombre?: ")
multiplicador=int(input("Cuantas veces desea repetir su nombre?: "))

contador=1
while contador<=multiplicador: #mientras que 1 sea menor o igual a 2
    print(nombre)#imprime nombre
    contador+=1 #contador aumenta 1,2 etc mientras que multiplicador sigue siendo 2
                # contador se detiene cuando se iguala con multiplicador 2=2
                #por eso imprime dos nombre

print("====================================")
    
nombre=input("Cuál es su nombre?: ")
multiplicador=int(input("Cuantas veces desea repetir su nombre?: "))

print((nombre+'\n')*(multiplicador)) #IMPORTANTE Y UTIL