# Escribir un programa que pida al usuario dos números 
# enteros y muestre por pantalla la <n> entre <m> da un 
# cociente <c> y un resto <r> donde <n> y <m> son los 
# números introducidos por el usuario, y <c> y <r> son 
# el cociente y el resto de la división entera respectivamente.

print("Calcuradora de cociente")

n=int(input("Ingrese su primer numero entero: "))
m=int(input("Ingrese su segundo numero entero: "))
c=n/m
r=n%m
print(f"El numero {n} dividido en el numero {m} da como resultado {c} y un resto de {r}")
