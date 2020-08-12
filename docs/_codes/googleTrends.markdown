---
layout: post
title:  "Google trends et ggplot2" 
abstract: "Réalisation d'une évolution temporelle de l'évolution de la tendance d'un mot sur Google"
code: 2
language : "R"
---

Google Trends est un outil de Google qui permet d'obtenir la fréquence à laquelle un mot a été recherché sur Google. Il est possible d'importer directement les résultats à l'aide de la library `gtrendsR` et visualiser les résultats avec `ggplot`. Les mots recherchés pour cette figure présente dans le manuscrit sont Big Data, data visualization, inforgraphic.

## Le résultat

<img src="{{ './assets/img/tutoriels/googleTrends.png' | relative_url  }}" alt="ACP" width="100%">

## Comment faire ?

**Langage** : R

<script src="https://gist.github.com/thomasdenecker/b1996dfdc8ec2c2b71ca747c96c872e6.js"></script>

**Information de la session**

{% include rSession.html %}
