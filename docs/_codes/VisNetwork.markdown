---
layout: post
title:  "visNetwork" 
abstract: "Création d'un graphe à l'aide du package R visNetwork"
code: 3
language : "HTML & JS"
---

visNetwork est un package R pour la visualisation de réseau, utilisant la bibliothèque javascript [vis.js]( http://visjs.org/ ). J'ai utilisé ce package pour générer les réseaux de gènes/protéines de MONet. Ce package sintègre parfaitement dans une application web Shiny. 

### Comment faire ?

#### 1- Installer le package

{% highlight R linenos %}
install.packages("visNetwork")

# Ou la version développeur 
devtools::install_github("datastorm-open/visNetwork")
{% endhighlight %}

#### 2- Importer la librairie

{% highlight R linenos %}
require(visNetwork, quietly = TRUE)
{% endhighlight %}

#### 3- Générer un graphe


{% highlight R linenos %}
nodes <- data.frame(id = 1:3, label=LETTERS[1:3])
edges <- data.frame(from = c(1,2), to = c(1,3))
{% endhighlight %}


#### 4- Ensemble du code

{% highlight R linenos %}
require(visNetwork, quietly = TRUE)

nodes <- data.frame(id = 1:3, label=LETTERS[1:3])
edges <- data.frame(from = c(1,2), to = c(1,3))
visNetwork(nodes, edges, width = "100%")
{% endhighlight %}

Pour le sauvegarder en HTML

{% highlight R linenos %}
require(visNetwork, quietly = TRUE)

nodes <- data.frame(id = 1:3, label=LETTERS[1:3])
edges <- data.frame(from = c(1,2), to = c(1,3))

network <- visNetwork(nodes, edges, width = "100%")
network %>% visSave(file = "network.html")
{% endhighlight %}

### Résultat

{% include visNetwork.html %}

### Pour aller plus loin

- [Documentation](https://datastorm-open.github.io/visNetwork/)
- [Github](https://github.com/datastorm-open/visNetwork)
- [CRAN](https://cran.r-project.org/web/packages/visNetwork/index.html)