---
layout: post
title:  "Les biais des puces à ADN et les solutions de normalisation"
abstract: "Présentation des différents biais qui peuvent être rencontrés lors de l'analyse de données de puces à ADN et des solutions"
annexe: 8
---

Les puces à ADN sont très appréciées chez les chercheurs pour leur robustesse et leur faible coût. Cependant, des biais ont été mis en évidence ces dernières années :

- <u>Biais expérimentaux</u> – Deux expériences réalisées de la même manière ne donneront pas exactement les mêmes résultats. Il existe de nombreuses causes à chaque 
étape du protocole expérimental et la première est que l’expérimentateur n’est pas un automate. Toutes les variations (aussi minimes soient elles) entraineront 
des modifications des résultats. Une puce à ADN donne donc une mesure proche de l’expression réelle mais pas exacte. L’accumulation de ces différences entraîne 
un bruit dans les données qui complique la réalisation des tests statistiques. Il est possible de mettre en évidence ces biais expérimentaux par la réalisation de graphiques comme des MAplots[^1]; 
- <u>Biais de colorations</u> – Des biais systématiques ont été détectés lors de l’utilisation de puce à ADN double marquage dont ceux de colorations ([Dombkowski et al. 2004](https://doi.org/10.1016/S0014-5793(04)00083-3)).
Les intensités d'expression peuvent être biaisées par des différences liées à l'efficacité d'incorporation et de détection des deux fluorochromes. Une solution possible
est la réalisation d’un [dye swap](https://www.ebi.ac.uk/training/online/course/functional-genomics-ii-common-technologies-and-data-analysis-methods/counteracting-dye-bias)  ; 
- <u>Biais spatiaux</u> – Nous parlons de biais spatiaux lors qu’il y a des irrégularités dans la coloration de 
la lame ou un manque d’homogénéité de l’intensité lumineuse. Parmi les causes, nous pouvons citer 
les bulles qui se repèrent assez facilement : un rond où l’intensité est moins forte. 

Malgré la grande vigilance des expérimentateurs, il n’est pas possible d’éviter tous ces biais. Pour les corriger, nous disposons de solutions computationnelles comme la normalisation. Elle peut être appliquée à différents niveaux :
- <u>Normalisation intra canaux</u> – Lors de l’hybridation, une partie est non spécifique[^2] et engendre un signal détecté en bruit de fond. Ce bruit de fond est souvent estimé en analysant les pixels adjacents 
à la zone de dépôt des sondes. Ainsi pour chaque spot nous avons deux informations : l’intensité du signal principal (Rf et Gf) et l’intensité du signal du bruit de fond (Rb et Gb). À partir de ces informations, le signal peut être normalisé ;
- <u>Normalisation inter canaux</u> – Les intensités des signaux de fluorescence rouge et vert mesurées pour chacun des fluorochromes dépendent de nombreux paramètres comme l’efficacité du marquage des cibles, la quantité et la qualité des sondes déposées sur la puce, des phénomènes d’hybridations croisées, la qualité du laser, ... Les données que nous obtenons à la sortie de la machine sont des données relatives (rapport des intensités). En effet, les données absolues des intensités ne sont pas comparables d’une lame à l’autre. Avant de réaliser ce rapport, il est nécessaire d’effectuer une normalisation relative des deux intensités de fluorescence ([Smyth et al. 2003](https://doi.org/10.1016/S1046-2023(03)00155-5)). En effet le rapport des intensités brutes rouge / vert est biaisé pour plusieurs raisons bien décrites ([Gregory Cox et al. 2004](https://doi.org/10.1016/j.ab.2004.05.010)) :
  - Biais 1 : les fluorochromes Cy3 et Cy5 ne sont pas incorporés avec la même efficacité lors de la transcription inverse ;
  - Biais 2 : les fluorochromes Cy3 et Cy5 n’émettent pas avec la même puissance lors de la lecture de la lame par le laser ;
  - Biais 3 : les intensités mesurées pour les fluorochromes Cy3 et Cy5 à des endroits différents de la lame peuvent être affectées par un biais de position ;
  - Biais 4 : Le laser n’a pas la même qualité en vert qu’en rouge entraînant une perte de signal. 
- <u>Normalisation inters lames</u> – Une fois que les normalisations individuelles des différentes lames ont été réalisées, il faut normaliser les lames entre elles pour pouvoir les comparer.  

---

[^1]: Chaque gène est représenté par un point dont l’abscisse est égale à la moyenne des logarithmes des intensités (A) et l’ordonnée est égale au logarithme du ratio des intensités rouge sur verte (M)
[^2]: Qui n’est pas dû à une hybridation spécifique entre une cible que nous souhaitons quantifier et une sonde
