## sellLife

[![Maintainability](https://api.codeclimate.com/v1/badges/9f307c046ee15e3cafd2/maintainability)](https://codeclimate.com/github/MrFSP/sellLife/maintainability)
[![Build Status](https://travis-ci.org/MrFSP/sellLife.svg?branch=master)](https://travis-ci.org/MrFSP/sellLife)
![Node CI](https://github.com/MrFSP/sellLife/workflows/Node%20CI/badge.svg)

### Install
```
$ make install
```

### Start
```
$ selllife [pathToFile]
```

### Задание
Дана доска размером M × N клеток. Клетка может находиться в одном из двух состояний: 
1 — живая, 0 — мёртвая. Каждая клетка взаимодействует с восемью соседями. Правила таковы:

* Живая клетка, у которой меньше двух живых соседей, погибает.
* Живая клетка, у которой два или три живых соседа, выживает.
* Живая клетка, у которой больше трёх живых соседей, погибает.
* Мёртвая клетка, у которой три живых соседа, возрождается.

Напишите программу, которая будет:
* случайным образом генерить стартовое состояние;
* уметь получать его из файла (способ выбирается через параметры запуска в консоли);
* каждую секунду выводить в консоль новое состояние доски.

### Demonstration:

Start with random generator:
```
$ selllife
```
[![asciicast](https://asciinema.org/a/304857.svg)](https://asciinema.org/a/304857)

Start with file:
```
$ selllife example/data.txt
```
[![asciicast](https://asciinema.org/a/304856.svg)](https://asciinema.org/a/304856)