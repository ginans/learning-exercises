def suma(num1,num2):
    return num1+num2
print(suma(5,5))

def numero_par(np):
    if np%2==0:
        return True
    else:
        return False
numero = int(input("Ingresa un número: "))
resultado = numero_par(numero)
print(f"El número {numero} es par: {resultado}")