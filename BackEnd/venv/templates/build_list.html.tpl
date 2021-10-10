{% extends "partials/layout_project.html.tpl" %}
{% block title %}Builds{% endblock %}
{% block name %}{{ project.name }} :: builds{% endblock %}
{% block content %}
      <ul class="filter" data-no_input="1">
        <div class="data-source" data-url="{{ url_for('list_builds_json', name = project.name) }}" data-type="json" data-timeout="0"></div>
        <li class="template">
            <div class="name">
                <a href="{{ url_for('show_build', name = project.name, id = '') }}%[id]"># %[id]</a>
            </div>
            <div class="description">
                <span class="%[result_l]">%[result_l]</span> on %[start_time_l]
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
