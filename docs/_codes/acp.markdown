---
layout: post
title:  "ACP personnalisée en R " 
abstract: "Réalisation d'une ACP en R avec ggplot2"
code: 1
language : "R"
---

Lorsque j'ai voulu contrôler la qualité des réplicats dans l'étude de l'homéostasie du fer chez *C. glabrata*, 
je souhaitais colorer les éléments par groupe d'expérience et avoir des étiquettes qui ne supperposait pas.
Ne trouvant pas de fonction clé en main le permettant, je propose le code suivant qui utilise `ggplot`.

## Le résultat

<img src="{{ './assets/img/tutoriels/acp.png' | relative_url  }}" alt="ACP" width="100%">

## Comment faire ?

**Langage** : R

<script src="https://gist.github.com/thomasdenecker/08b7f407f892179f0cae2443dd397392.js"></script>

**Information de la session**

{% include rSession.html %}
