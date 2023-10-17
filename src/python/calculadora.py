
import math

def volume_of_polyhedron(edge_length, height):
    return (edge_length ** 2) * height / 3

edge_length = float(input("Digite o comprimento do poliedro: "))
height = float(input("Digite a altura do poliedro: "))

volume = volume_of_polyhedron(edge_length, height)

print("O volume do poliedro é: {:.2f}".format(volume))