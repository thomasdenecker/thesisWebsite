---
layout: post
title:  "Quel est la différence entre un package ou librairie avec R ?"
abstract: "Présentation d'un package et d'une librairie en R"
annexe: 5
---

Un package étend les fonctionnalités de base de R et standardise la distribution du code. Par exemple, un package peut contenir un ensemble de fonctions liées à un sujet ou à des tâches spécifiques. Pour l’installer par exemple le package monPackage provenant du CRAN, nous utiliserons la fonction `install.packages(‘monPackage’)`.

Une librairie est un répertoire où les packages sont stockés. Pour charger un package (`monPackage` ici), nous utiliserons la fonction `library(monPackage)`.
