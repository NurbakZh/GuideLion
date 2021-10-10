{% extends "partials/layout.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}Projects{% endblock %}
{% block content %}
    <ul class="filter" data-no_input="1">
        <div class="data-source" data-url="{{ url_for('list_projects_json') }}" data-type="json" data-timeout="0"></div>
        <li class="template">
            <div class="name">
                <a href="{{ url_for('show_project', name = '') }}%[name]">%[name]</a>
            </div>
            <div class="description">
                %[description]
            </div>
        </li>
        <div class="filter-no-results quote">
            no results found
        </div>
        <div class="filter-more">
            <span class="button">more</span>
        </div>
    </ul>
{% endblock %}
