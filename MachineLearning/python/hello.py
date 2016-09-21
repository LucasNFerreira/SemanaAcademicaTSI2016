#!/usr/bin/env python
# coding: utf-8
while (True):
    idade = float(raw_input("digite sua idade: "))

    if(idade >= 18):
        print "Já pode beber"
        break
    else:
        print "Não pode beber ainda"
