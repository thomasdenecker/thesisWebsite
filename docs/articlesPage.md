---
layout: "page"
title: "Articles"
permalink: "Articles"
order: 5
---

{% assign dateActu = 0 %}
{% assign sorted = site.articles | sort: 'annee' | reverse %}
{% for article in sorted %}
  
  {% if  article.annee != dateActu %}
    {% assign dateActu = article.annee %}
    {% capture annee %}{{ article.annee }}{% endcapture %}

## {{ annee }}

  {% endif %}

  {% capture titre %}{{ article.titre }}{% endcapture %}
  {% capture auteurs %}{{ article.auteurs }}{% endcapture %}
  {% capture DOI %}{{ article.DOI }}{% endcapture %}
  {% capture journal %}{{ article.journal }}{% endcapture %}
  {% capture PDF %}{{ article.PDF }}{% endcapture %}
  {% include article.html titre=titre auteurs=auteurs DOI=DOI journal=journal %}

  {% capture text-capture %}
    {{ article.content }}
  {% endcapture %}

  {% capture toggleId %}toggleId{{ forloop.index }}{% endcapture %}

  {% include toggle.html toggle-text=text-capture toggleId=toggleId PDF=PDF %}

{% endfor %}
