# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def testg(request):
    # return HttpResponse("Hello, BLABLABALABLABALB")
    someList = []
    someList.append(("simple text"))
    someList.append(("Hi narsi"))
    someList.append(("Bla bla"))

    return render(request, 'tacoAPP/menu_left.html', {'someList':someList})
