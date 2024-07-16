# Escribe un programa que imprima si un número del 1 al 10 es par o impar.

for n in range (1,11):
    if n != 1:
        print("-----------------")
    if n %2==0:
        print(n,"Par")
    else:
        print(n,"Impar")


for n in range (1,11):
    if n%2==0:
        print(f"el numero {n} es par")
    else:
        print(f"El numero {n} es impar")