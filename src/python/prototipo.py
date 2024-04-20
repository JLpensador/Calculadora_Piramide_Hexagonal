import math

def calcular_piramide():
    lado_base = float(input("Digite o comprimento da base da pirâmide: "))
    altura = float(input("Digite a altura da pirâmide: "))

    apo_tema = (lado_base / 2) * math.sqrt(3)

    altura_triangulo = math.sqrt(math.pow(altura, 2) + math.pow(apo_tema, 2))

    area_triangulo = (lado_base * altura_triangulo) / 2

    numero_arestas_laterais = 6
    
    area_base = (3 * math.sqrt(3) / 2) * math.pow(lado_base, 2)
    
    area_lateral = numero_arestas_laterais * area_triangulo 

    area_superfície = area_base + area_lateral
    
    volume = (area_base * altura) / 3

    return area_base, area_lateral, area_superfície, volume

area_total, area_superfície, area_lateral, volume = calcular_piramide()
print("Área da base:", area_total)
print("Área lateral:", area_superfície)
print("Área da superfície", area_lateral)