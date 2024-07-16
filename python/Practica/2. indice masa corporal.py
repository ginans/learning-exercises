#Escribir un programa que pida al usuario su peso (en kg) y 
#estatura (en metros), calcule el índice de masa corporal y 
#lo almacene en una variable, y muestre por pantalla la frase 
#Tu índice de masa corporal es <imc> donde <imc> es el índice 
#de masa corporal calculado redondeado con dos decimales.

print("CALCULADORA DE IMC")
peso=float(input("Ingresa tu peso en kg?: "))
altura=float(input("Tngresa tu altura en mts.: "))
imc= peso/(altura)**2
if 0<imc<18.5:
    print(f"Estás bajo peso con un IMC de {round(imc, 2)}")
elif 18.5<imc<24.9:
    print(f"Estás en un rango de peso NORMAL con un IMC de {round(imc, 2)}")
elif 25.0<imc<29.9:
    print(f"Estás en rango de SOBREPESO con un IMC de {round(imc, 2)}")
elif 30.0<imc<34.9:
    print(f"Estás en un rango de OBESIDAD GRADO 1 con un IMC de {round(imc, 2)}")
elif 35.0<imc<39.9:
    print(f"Estás en un rango de OBESIDAD GRADO 2 con un IMC de {round(imc, 2)}")
else:
    print(f"Estás en un rango de OBESIDAD GRADO 3 con un IMC de {round(imc, 2)}")
