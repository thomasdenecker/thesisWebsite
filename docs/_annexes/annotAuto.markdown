---
layout: post
title:  "Mise en évidence d’un problème d’annotation automatique"
abstract: "Les étapes qui nous ont permis de mettre en évidence un problème d'annotation et comment nous l'avons résolu."
annexe: 13
---

### 1. Le gène HAP1 dans les bases de données de référence

Lorsque nous recherchons le gène HAP1 chez *C. glabrata* dans la CGD (base de données de référence pour les levures Candida), nous obtenons :

<p class="descriptionGene">
<b>Standard Name</b> : HAP1 <br>
<b>Systematic Name</b>  : CAGL0K05841g <br>
<b>Alias</b>  : ZCF27 <br>
<b>Description</b>  : Has domain(s) with predicted DNA binding, DNA-binding transcription factor activity, RNA polymerase II-specific, zinc ion binding activity and role in regulation of transcription, DNA-templated, transcription, DNA-templated<br>
<b>Ortholog(s) in non-CGD species</b>  : <i>S. cerevisiae</i> (HAP1)
</p>

Lorsque nous recherchons CAGL0K05841g dans GRYC (seconde base de référence pour *C. glabrata*), aucune donnée n’est disponible.

Si nous utilisons l’identifiant utilisé dans nos puces à ADN basé sur GRYC (CAGL0B03421g), nous obtenons dans la CGD :

<p class="descriptionGene">
<b>Standard Name</b> : pas d’information <br>
<b>Systematic Name</b>  : CAGL0B03421g <br>
<b>Alias</b>  : ZCF4 <br>
<b>Description</b>  : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II cis-regulatory region sequence-specific DNA binding activity<br>
<b>Ortholog(s) in non-CGD species</b>  : <i>S. cerevisiae</i> (HAP1)
</p>

Dans la base de données GRYC, nous avons comme description « similar to uniprot|P12351 Saccharomyces cerevisiae YLR256w HAP1 transcription factor ».

En résumé, pour un même gène HAP1, nous avons deux gènes possibles dans la CGD dont un seul est décrit dans GRYC.

### 2. Et au niveau des séquences nucléotidiques ?

Nous avons ensuite récupéré la séquence nucléotidique de HAP1 sur la SGD. À l’aide de BLAST (Basic Local Alignment Search Tool)[^1], nous avons recherché les séquences qui présentaient le même alignement. Les deux gènes les plus significatifs sont ceux décrits ci-dessous. Les résultats du BLAST sont regroupés dans le Tableau 1.


<table>
    <tr>
        <td>
            <b>1</b>
        </td>
        <td>
            <p class="code">
                CAGL0B03421g<br>
                <i>Candida glabrata CBS138 Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase
                    II-specific, RNA polymerase II cis-regulatory region sequence-specific DNA binding activity</i><br>
                <b>Length</b> = 4,068 <br>
                <b>Score</b> = 186 (168 bits), Expect = 5e-41<br>
                <b>Identities</b> = 574/881 (65.2%), Positives = 574/881 (65.2%), Gaps = 30/881 (3%), Frame = +1 / +1
            </p>
        </td>
    </tr>

    <tr>
        <td>
            <b>2</b>
        </td>
        <td>
            <p class="code">
                CAGL0K05841g <br>
                <i>Candida glabrata CBS138 HAP1 Has domain(s) with predicted DNA binding, DNA-binding transcription
                    factor activity, RNA polymerase II-specific, zinc ion binding activity and role in regulation of
                    transcription, DNA-templated, transcription, DNA-templated</i><br>
                <b>Length</b> = 4,119<br>
                <b>Score</b> = 132 (120 bits), Expect = 2e-26<br>
                <b>Identities</b> = 141/191 (73.8%), Positives = 141/191 (73.8%), Frame = +1 / +1
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <b>... </b>
        </td>
        <td style="padding-left:10px">...</td>
    </tr>
</table>

<figcaption>Tableau 1 – Résultats de l'alignement de la séquence du gène Hap1 de <i>S. cerevisiae</i> extraite de la SGD</figcaption>
<br>

Enfin, nous avons réalisé un alignement de la séquence du gène CAGL0B03421g présent dans GRYC. Nous obtenons avec BLAST un seul résultat chez *C. glabrata* présenté dans le Tableau 2.

<p class="code">
    CAGL0K05841g <br>
    <i> Candida glabrata CBS138 HAP1 Has domain(s) with predicted DNA binding, DNA-binding transcription factor activity, RNA polymerase II-specific, 
    zinc ion binding activity and role in regulation of transcription, DNA-templated, transcription, DNA-templated</i><br>
    <b>Length</b> = 4,119<br>
    <b>Score</b> =  136 (123 bits), Expect = 2e-27<br>
    <b>Identities</b> =  185/263 (70.3%), Positives = 185/263 (70.3%), Frame = +1 / +1
</p>

<figcaption>Tableau 2 – Résultats de l'alignement de la séquence du gène CAGL0B03421g de <i>C. glabrata</i> extraite de GRYC</figcaption>
<br>

Nous avons donc deux gènes extrêmement proches ayant bénéficié d’un transfert d’annotation de *S. cerevisiae*. Comment pourrions-nous décider entre les deux ? 

### 3. Une solution basée sur la synténie

Pour sélectionner un des deux gènes, nous avons décidé d’utiliser la synténie. Nous avons donc recherché si les gènes qui entourent notre gène d’intérêt sont les mêmes par orthologie chez S. cerevisiae. Les 3 gènes qui précèdent CAGL0B03421g ont leurs orthologues qui précèdent HAP1 chez *S. cerevisiae* (Figure 1). Il n’existe pas de synténie pour le gène CAGL0K05841g. En résumé, l’annotation proposée pour le gène HAP1 dans la CGD semble erronée et la cause la plus probable est une annotation automatique par transfert non vérifiée.

{% include image.html url="./assets/img/annotAuto/fig1.png" width="800px" description="Figure 1 – Recherche de synténie pour le gène CAGL0B03421g" %}

---
[^1]: Outil permettant de trouver des régions de similarité locale entre les séquences