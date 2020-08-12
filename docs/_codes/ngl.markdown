---
layout: post
title:  "NGL viewer" 
abstract: "Intégrer facilement des structures 3D dans vos pages web"
code: 3
language : "HTML & JS"
---

Vous souhaitez ajouter une structure 3D dans votre page web ? NGL viewer est un outil simple à mettre en place. Un exemple est proposé dans l'annexe [Spectrométrie de masse]({{ '/annexes/spectroMass/' | relative_url  }}).

### Comment faire ?

#### 1- Télécharger le script JS de NGL

Il y a deux solutions :

- Via [Github](https://github.com/nglviewer/ngl/raw/master/dist/ngl.js). Note : si le lien est mort, je vous conseille de vous rendre directement sur la page [GitHub](https://github.com/nglviewer/ngl) dans dossier `dist/`  (valable en août 2020)
- Télécharger celui utilisé sur ce site : [ici]({{"/assets/js/ngl.js" | relative_url }}) (Enregistre sous si le téléchargement ne se lance pas)

#### 2- Importer le script dans votre page 

Avec un site HTLM classique 

{% highlight html linenos %}
<script src="PATH/TO/FILE/ngl.js"></script>
{% endhighlight %}

#### 3- Ajouter dans le head de votre page HTML 

{% highlight html linenos %}
<script>
    document.addEventListener("DOMContentLoaded", function () {
        var stage = new NGL.Stage("viewport");

        stage.loadFile('rcsb://1blu').then(function (o) {
            o.addRepresentation("cartoon");
            o.autoView();
        });
    });
</script>
{% endhighlight %}

Ici, la molécule importée est 1blu qui se trouve sur le site de la PDB (rcsb).
Il est aussi possible de remplacer `rcsb://1blu` par le chemin jusqu'à votre fichier pdb : `PATH/TO/FILE/1blu.pdb`

#### 4- Ajouter dans le body de votre page HTML 

{% highlight html linenos %}
<div id="viewport" style="width:400px; height:400px;"></div>
{% endhighlight %}

#### 5- Ensemble du code 

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Un visualisation 3D</title>
    <script src="ngl.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var stage = new NGL.Stage("viewport");

            stage.loadFile('rcsb://1blu').then(function (o) {
                o.addRepresentation("cartoon");
                o.autoView();
            });
        });
    </script>
</head>
<body>
    <div id="viewport" style="width:400px; height:400px;"></div>
</body>
</html>
{% endhighlight %}

### Résultat

{% include 3DstructureTuto.html %}

### Pour aller plus loin 

- Le [GitHub](https://github.com/nglviewer/ngl)
- Le [manuel](http://nglviewer.org/ngl/api/manual/index.html)
- La [gallerie](http://nglviewer.org/ngl/gallery/index.html)

