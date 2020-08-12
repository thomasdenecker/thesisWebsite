---
layout: post
title:  "Plotly" 
abstract: "Réaliser des graphiques dynamiques en R et en JS"
code: 1
language : "R & JS"
---

Plotly est une librairie que j'adore. Elle permet de faire des graphiques dynamiques dans de nombreux langages : R, JS et python.
Je l'ai principalement utilisé en JS (pour le projet iHKG) et en R (Pixel2). Je vous propose ici un exemple simple en JS (disponible sur le site officiel) et l'équivalent en R.
Précision pour R, dans Rstudio, les graphiques dynamiques s'affichent dans la zone des graphiques. Il ne faut pas d'autres connaissances que R. Il est même possible de convertir des plots créés à l'aide de `ggplot`. 

## Le résultat

{% include plotly.html %}


## Comment faire ?

### JS

#### 1- Importer le script js (dans le head)

{% highlight html linenos %}
<script src='https://cdn.plot.ly/plotly-latest.min.js'></script>
{% endhighlight %}

#### 2- Positionner la div où le graphique devra être affiché (dans le body)

{% highlight html linenos %}
<div id='myDiv'></div>
{% endhighlight %}

#### 3- Ajouter le code js de création du graphique (à la fin du body)

**Important** : Il doit être placé après la div

{% highlight html linenos %}
<script>
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        type: 'scatter'
    };

    var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        type: 'scatter'
    };

    var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        type: 'scatter'
    };

    var data = [trace1, trace2, trace3];
    Plotly.newPlot('myDiv', data);
</script>
{% endhighlight %}


### R

*Version* : 
- R version 3.6.3 (2020-02-29)
- Platform: x86_64-conda_cos6-linux-gnu (64-bit)
- Running under: CentOS Linux 7 (Core)
- plotly 4.9.2.1

{% highlight R linenos %}
library(plotly)

fig <- plot_ly( x = c(1, 2, 3, 4) , y = c(10, 15, 13, 17), name = 'trace 1', type = 'scatter', mode = 'lines')
fig <- fig %>% add_trace(x = c(2, 3, 4, 5), y = c(16, 5, 11, 9), name = 'trace 2', mode = 'markers')
fig <- fig %>% add_trace(x= c(1, 2, 3, 4), y = c(12, 9, 15, 12), name = 'trace 3', mode = 'lines+markers')

fig
{% endhighlight %}

### Python

*Version* :

- Python 3.8.2
- plotly 4.9.0

{% highlight python linenos %}
import plotly.graph_objects as go

fig = go.Figure()

fig.add_trace(go.Scatter(x=[1, 2, 3, 4], y=[10, 15, 13, 17],
                    mode='markers',
                    name='scatter'))
fig.add_trace(go.Scatter(x=[2, 3, 4, 5], y=[16, 5, 11, 9],
                    mode='lines',
                    name='lines'))
fig.add_trace(go.Scatter(x=[1, 2, 3, 4], y=[12, 9, 15, 12],
                    mode='lines+markers',
                    name='lines+markers'))

fig.show()
{% endhighlight %}

## Ressources

La documentation :

- [JS](https://plotly.com/javascript/)
- [R]()
- [Python](https://plotly.com/python/)
- [Gallerie](https://dash-gallery.plotly.host/Portal/)