---
layout: post
title:  "Barplot avec ggplot" 
abstract: "Evolution des publications pour les 3 levures : S. cerevisiea, C. albicans et C. glabrata"
code: 1
language : "R"
---

Ce code a été utilisé dans le manuscrit pour créer la figure "Évolution du nombre de publications au cours du temps associées aux espèces de levures *S. cerevisiae*, *C. albicans* et *C. glabrata*". Les données ont été obtenues de la base de données PubMed après une recherche du nom de des espèces.

## Le résultat

<img src="{{ './assets/img/tutoriels/evolutionLevures.png' | relative_url  }}" alt="Evolution des prix" width="100%">

## Comment faire ?

**Langage** : R

<script src="https://gist.github.com/thomasdenecker/64b44b7e37a1ed2176dd3c1c6cd5b785.js"></script>

**Information de la session**

{% include rSession.html %}