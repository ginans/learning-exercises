#Escribir una función que reciba un número entero positivo y devuelva su factorial.

def factorial():
    num=(int(input("Ingresa un numero entero para conseguir su factorial: ")))
    if num < 0:
        print("Por favor, ingresa un número entero positivo.")
        return None
    result=1
    for n in range(1,num+1):
        result*=n
    return result
fact=factorial()
if fact is not None:
    print(f"El factorial es {fact}")

