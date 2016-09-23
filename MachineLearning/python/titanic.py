# coding: utf-8
import csv
import numpy as np
from sklearn import svm
caracteristicas = []
categorias = []

def calculaIdade(nome):
    if('Mr' in nome):
        return 45
    elif('Mrs' in nome):
        return 30
    elif('Miss' in nome):
        return 17
    elif('Master' in nome):
        return 50
    elif('Dr' in nome):
        return 60
    else:
        return 5


with open('data/train.csv') as csv_treino:
    data = csv.reader(csv_treino)
    data.next()
    for l in data:
        parch = int(l[7])
        irmaos = int(l[6])
        classe = int(l[2])
        # Define o valor 1 para masculino e 2 para feminino
        sexo = 1 if l[4] == 'male' else 2
        if(l[5]):
            idade = float(l[5])
        else:
            idade = calculaIdade(l[3])# Média aproximada das idades
        caracteristicas.append([sexo, classe, idade, irmaos, parch])
        categorias.append(int(l[1]))
    # Converte os data de treinamento para arrays do numpy
    np_caracteristicas = np.array(caracteristicas)
    np_categorias = np.array(categorias)
    # Treina a SVM
    maquina = svm.SVC(kernel='linear', C=1.0)
    maquina.fit(np_caracteristicas, np_categorias)
    # Categoriza os resultados para o arquivo de teste
    saida = []
with open('data/test.csv') as csv_teste:
    data = csv.reader(csv_teste)
    data.next()
    for l in data:
        parch = int(l[6])
        irmaos = int(l[5])
        classe = int(l[1])
        sexo = 1 if l[3] == 'male' else 2
        if(l[4]):
            idade = float(l[4])
        else:
            idade = calculaIdade(l[3])
        saida.append([l[0], int(maquina.predict([[sexo, classe, idade, irmaos, parch]]))])
    # Gera CSV de saída
with open('data/saida.csv', 'w') as f:
    csv_saida = csv.writer(f, delimiter=',')
    data = [['PassengerId', 'Survived']] + saida
    csv_saida.writerows(data)
