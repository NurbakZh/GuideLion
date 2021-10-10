{% extends "partials/layout_build.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}{{ project.name }} :: {{ build.id }}{% endblock %}
{% block content %}
    <ul>
        {% for file in files %}
            <li>
                <a href="{{ url_for('files_build', name = project.name, id = build.id, path = path + file) }}">{{ file }}</a>
            </li>
        {% endfor %}
    </ul>
{% endblock %}
