#Tome temperaturas (int) y que las transforme de C° a F°
#haz que pregunte si es C° o F° y que los pase ida y vuelta
#que diga un mensaje cuando hace calor, frio, esté templado o esté bajo 0
#que de un consejo, (llevar paraguas, salir abrigado, cuidarse de la nieve)
#usar formula input

temperatura= int(input("Cuál es la temperatura actual?: "))
sistema=input("Si es en grados Fahrenheit ingresa F, y si es en Celsius ingresa C: ")
for temperatura in sistema:
    if sistema == "C":
        