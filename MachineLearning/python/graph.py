# coding: utf-8
import matplotlib.pyplot as plt
import random
plt.xlabel('Eixo X')
plt.ylabel('Eixo Y')
plt.title(u'Exemplo básico')
#random.shuffle(lista_dados)
#l = map(lambda x: x * x, lista_dados)
l = [x ** 2 for x in range(100)]
l.reverse()
plt.plot(l)
plt.show()
