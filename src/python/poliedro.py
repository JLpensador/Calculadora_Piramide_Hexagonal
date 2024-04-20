def volume_of_polyhedron(comprimento, altura):
    return (comprimento ** 2) * altura / 3

comprimento = float(input("Digite o comprimento do poliedro: "))
altura = float(input("Digite a altura do poliedro: "))

volume = volume_of_polyhedron(comprimento, altura)

print("O volume do poliedro é: {:.2f}".format(volume))