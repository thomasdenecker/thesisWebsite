---
layout: post
title:  "Puces à ADN double marquage"
abstract: "Présentation des différentes étapes de la technologie de puce à ADN double marquage"
annexe: 8
---


Cette annexe présente les différentes étapes lors de l'utilisation de puces à ADN double marquage. Ces étapes sont résumées à la figure 2 en fin d'annexe.  

#### 1. Fabrication de la puce

Une puce à ADN est une petite lame de verre sur laquelle sont fixées des courtes séquences d’ADN appelées des sondes. Ces sondes ont été choisies spécifiquement pour représenter un seul et unique gène. Pour les obtenir, elles ont été amplifiées par PCR puis fixées sur lame de verre. L’ADN des sondes est dénaturé c’est-à-dire qui se trouve sous forme simple brin pour être capable de s'associer par hybridation avec un brin complémentaire (Southern et al. 1999).

#### 2. Préparation des cibles

Des ARNs sont extraits de différentes expériences pour lesquelles nous souhaitons comparer les niveaux d'expression des gènes étudiés. Une transcription inverse est ensuite réalisée pour obtenir à partir des ARN messagers (ARNm) des ADN complémentaires (ADNc). Les ADNc simple brin sont ensuite marqués par des fluorochromes : Cy3 (vert) ou Cy5 (rouge).

#### 3. Hybridation des cibles et des sondes

Ces ADNc simple brin sont mélangés pour obtenir les cibles (un mélange d’ADNc simple brin marqués « vert » et « rouge »). Les cibles sont ensuite déposées sur les sondes. La puce est alors incubée une nuit à 60 C°. Il s’agit de la température optimale pour qu’un brin d'ADN (ici d’ADNc marqué par un fluorochrome) s'apparie avec son complémentaire (la sonde) pour former un ADN double brin.

#### 4. Lecture des données brutes

Un rayonnement laser est envoyé sur chaque zone de dépôt des sondes (les spots) pour exciter les fluorochromes. Les intensités de la fluorescence émise par le fluorochrome rouge puis vert sont enregistrées. Ces intensités sont proportionnelles à la quantité de cibles hybridées sur les sondes. Deux images sont alors obtenues : une pour le fluorochrome vert et une pour le fluorochrome rouge.

{% include image.html url="/assets/img/microarray/fig1.PNG" width="100%" description="Figure 1 - Illustration du principe d’hybridation à la base du fonctionnement de la technologie des puces à ADN." %}


#### 5. Traitement des données

L’objectif est de mesurer à l’aide de l’intensité de la fluorescence la quantité de molécules d’ADNc simple brin qui se sont hybridées sur chaque sonde. L’intensité du signal d’une sonde est proportionnelle à la quantité d’ADNc hybridé sur cette même sonde. Ensuite, l’hypothèse est que la quantité d'ADNc fluorescent fixée est proportionnelle à la quantité d'ARNm correspondant dans la cellule de départ. Un rapport fluorescence rouge / fluorescence verte est donc calculé. Prenons comme exemple une expérience 1 qui a été réalisée à partir de levures cultivées dans un milieu induisant une carence en fer et l’expérience 2 dans un milieu avec une concentration normale en fer. Si ce rapport est : 

- Supérieur à 1 : le gène étudié est plus exprimé dans l’expérience 1 (intensité de la fluorescence rouge > intensité de la fluorescence verte). Le gène est donc surexprimé en condition induisant la carence en fer. 
- Inférieur à 1 : le gène est moins exprimé dans l’expérience 1 (intensité de la fluorescence rouge < intensité de la fluorescence verte). Le gène est donc sous-exprimé en condition induisant la carence en fer.

#### 6. Analyses de donnée
À partir de ce jeu de données, des analyses de données peuvent être réalisées

{% include image.html url="/assets/img/microarray/fig2.png" width="400px" description="Figure 2 - Résumé des différentes étapes de la réalisation d’une expérience de puce à ADN double marquage." %}

L’[annexe XXXXXX](/annexes/biaisPuces/)  présente les différents biais rencontrés lors de la réalisation de puces à ADN et les solutions classiquement utilisées.
