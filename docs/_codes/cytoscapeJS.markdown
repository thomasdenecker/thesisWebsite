---
layout: post
title:  "Cytoscape JS" 
abstract: "Création d'un graphe à l'aide cytoscape JS"
code: 3
language : "HTML & JS"
---

Lors du projet [iHKG viewer](https://thomasdenecker.github.io/iHKG/), j'ai utilisé cytoscape JS pour générer les réseaux de gènes. Nous allons voir ici comme générer un graphe simple avec Cytoscape S. 

### Comment faire ?

#### 1- Importer le script JS de Cytoscapape dans le head
Plusieurs solutions sont disponibles dans la documentation ([ici](https://js.cytoscape.org/#getting-started/including-cytoscape.js)). Je vous propose ici celle de [CDNJS](https://cdnjs.com/libraries/cytoscape) :

{% highlight html linenos %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.15.2/cytoscape.min.js" integrity="sha512-PqivlaNWoXvHYlvku80fbWO/yBiRmGhISj5uVdAodyqsGprDcVZy6aecJDVNE0fIIE/YeiOzp5yJTR5ZjFlR4Q==" crossorigin="anonymous"></script>
{% endhighlight %}

#### 2- Ajouter dans le body de votre page HTML 

Une division pour accueillir le réseau : 

{% highlight html linenos %}
<div id="cy" style="width:100%; height:400px;"></div>
{% endhighlight %}

Le script pour créer le réseau :

{% highlight html linenos %}
<script>
    var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        // Ajouter les nodes
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        //Ajouter les egdes
        {
        data: {
            id: 'ab',
            source: 'a',
            target: 'b'
        }
        }],
        // Ajouter le nom des nodes
        style: [
        {
            selector: 'node',
            style: {
                label: 'data(id)'
            }
        }]
    });
</script>
{% endhighlight %}

#### 3- Ensemble du code 

{% highlight html linenos %}
<!doctype html>
<html>

<head>
    <title>Tutorial 1: Getting Started</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.15.2/cytoscape.min.js" integrity="sha512-PqivlaNWoXvHYlvku80fbWO/yBiRmGhISj5uVdAodyqsGprDcVZy6aecJDVNE0fIIE/YeiOzp5yJTR5ZjFlR4Q==" crossorigin="anonymous"></script>
</head>

<body>
    <div id="cy" style="width:100%; height:400px;"></div>
    <script>
      var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          {
            data: {
              id: 'ab',
              source: 'a',
              target: 'b'
            }
          }],
            style: [
            {
                selector: 'node',
                style: {
                    label: 'data(id)'
                }
            }]
      });
    </script>
</body>
</html>
{% endhighlight %}

### Résultat

{% include cytoscapeJS.html %}

### Pour aller plus loin

- [Getting started with Cytoscape.js](https://blog.js.cytoscape.org/2016/05/24/getting-started/)
- La [documentation](https://js.cytoscape.org/)
- Un [Exemple sur iHKG viewer](https://thomasdenecker.github.io/iHKG/F1.html)