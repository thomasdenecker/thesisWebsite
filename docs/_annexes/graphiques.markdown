---
layout: post
title:  "Comment les graphiques peuvent-ils nous tromper ?"
abstract: "Présentation de 5 cas où les graphiques peuvent nous tromper."
annexe: 10
---

Nous disons souvent « les chiffres ne mentent pas ». Mais en est-il de même pour les graphiques ? Les graphiques doivent être le reflet des données mais comme un miroir déformant, il est possible d’appliquer des filtres pour appuyer un message (paraître plus grand, plus gros, …). Parler de mensonge serait sans doute un peu extrême puisque nous partons des mêmes données.  Mais nous pouvons facilement être trompés par les graphiques notamment lorsque certains stratagèmes sont employés.

### 1. Jouer sur les axes
À partir des statistiques de NBA sur la saison 2019-2020 (à la coupure liée au COVID-19 - Tableau 1), en ne jouant que sur l’axe des ordonnées, nous pouvons faire deux titres totalement différents ! 
Les données ont été extraites du site [beinsports](https://fr.global.nba.com/statistics/) le 01/05/2020.

{% include image.html url="/assets/img/graphique/tab1.PNG" width="600px" description="Tableau 1 – Top 5 des meilleurs marqueurs de la saison 2019-2020 (au moment de l’arrêt à cause du COVID-19)" %}

<div class="row">
  <div class="col-lg-6">
    <p style="text-align : center;"><b>L’écrasante domination de J. Harden</b></p>
    <img src="/assets/img/graphique/fig1A.png" alt="Fig 1" width="100%">
  </div>
  <div class="col-lg-6">
  <p style="text-align : center;"><b>Un équilibre chez les serial scoreurs</b></p>
    <img src="/assets/img/graphique/fig1B.png" alt="Fig 1" width="100%">
  </div>
</div>
<figcaption>Figure 1 – Exemple de l’influence des limites des axes sur un graphique : Top 5 des meilleurs marqueurs de la saison 2019-2020 (au moment de l’arrêt à cause du COVID-19)</figcaption>

### 2. Les corrélations

Si deux ensembles suivent la même tendance, cela ne signifie pas qu’ils sont forcements liés. Le site [tylervigen](https://tylervigen.com/spurious-correlations) propose des corrélations totalement improbables.

{% include image.html url="/assets/img/graphique/fig2.png" width="100%" description="Figure 2 – Exemple d’un graphique de corrélation entre deux éléments improbables : revenus générés par les jeux d’arcades et le nombre de doctorats délivrés en Informatique aux Etats-Unis. Cette figure provient du site tylervigen. " %}

### 3. Relative ou absolue ?

Lorsque nous utilisons des chiffres concernant une population, le message sera profondément différent si nous prenons en compte la taille de la population (relative) ou non (absolue).

{% include image.html url="/assets/img/graphique/fig3.png" width="100%" description="Figure 3 – Comparaison de la taille des 5 plus grandes armées avec une représentation relative et une représentation absolue." %}

### 4. Jouer sur les aspects graphiques

Dans une vidéo explicative très détaillée (ci-dessous), Nicolas Lambert nous met en garde sur les cartes. Il nous montre par exemple l’impact important que peuvent avoir des changements de couleurs, de la taille des cercles, des titres.  Même carte, mêmes données, deux messages totalement en opposition (Figure 4).

<div class="row">
  <div class="col-lg-6">
    <p style="text-align : center;"><b>L’Europe, terre d’accueil </b><br>Nombre de syriens exilés accueillis en Europe</p>
    <img src="/assets/img/graphique/fig4A.png" alt="Fig 1" width="100%">
  </div>
  <div class="col-lg-6">
  <p style="text-align : center;"><b>La grande invasion </b><br>Nombre de migrants clandestins syriens</p>
    <img src="/assets/img/graphique/fig4B.png" alt="Fig 1" width="100%">
  </div>
</div>
<figcaption>Figure 4 –Influences des aspects graphiques sur le message à faire passer. Ces figures ont été proposées par F. Bahoken et Nicolas Lambert. Les illustrations ont été extraites <a href='https://neocarto.github.io/syrians/'> ce site </a> </figcaption>

<br>

<div class="divIframe">
  <iframe src="https://www.youtube.com/embed/RDwn5Qzq6Fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 5. Les effets 3D

Nous trouvons de très nombreux graphiques en 3D dans les articles, la présentation, … Mais attention, ils déforment la vérité. Dans la figure suivante extraite d’un article de National Geographic, sur le graphique de gauche nous avons l’impression qu’il y a plus de vert que de bleu. Cette impression est simplement la cause de la 3D et non pas des chiffres. Comme l’écrit E. Tufte (Tufte 2001), le nombre de dimensions représentées doit être le même que le nombre de dimensions dans les données.

{% include image.html url="/assets/img/graphique/fig5.png" width="600px" description="Figure 5 – Figure proposée par <a href='https://www.nationalgeographic.com/news/2015/06/150619-data-points-five-ways-to-lie-with-charts/ ['> National Geographic </a> montrant la déformation que peut causer une visualisation en 3D dans l’interprétation des résultats ." %}

En résumé, les graphiques ont un impressionnant pouvoir de persuasion.  Il existe de nombreux moyens d’optimiser un graphique pour mieux faire passer un message. Dans cette annexe, nous n’en proposons que quelques-uns mais il en existe de nombreux autres présentés dans le livre « How chart lies ? » (Cairo 2019).
