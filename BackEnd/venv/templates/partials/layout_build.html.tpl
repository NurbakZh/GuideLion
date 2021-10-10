{% extends "partials/layout.html.tpl" %}
{% block header %}
    {{ super() }}
    <div class="links sub-links">
        {% if sub_link == "info" %}
            <a href="{{ url_for('show_build', name = project.name, id = build.id) }}" class="active">info</a>
        {% else %}
            <a href="{{ url_for('show_build', name = project.name, id = build.id) }}">info</a>
        {% endif %}
        //
        {% if sub_link == "log" %}
            <a href="{{ url_for('log_build', name = project.name, id = build.id) }}" class="active">log</a>
        {% else %}
            <a href="{{ url_for('log_build', name = project.name, id = build.id) }}">log</a>
        {% endif %}
        //
        {% if sub_link == "files" %}
            <a href="{{ url_for('files_build', name = project.name, id = build.id, path = '') }}" class="active">files</a>
        {% else %}
            <a href="{{ url_for('files_build', name = project.name, id = build.id, path = '') }}">files</a>
        {% endif %}
        //
        {% if sub_link == "delete" %}
            <a href="{{ url_for('delete_build', name = project.name, id = build.id) }}" class="active">delete</a>
        {% else %}
            <a href="{{ url_for('delete_build', name = project.name, id = build.id) }}">delete</a>
        {% endif %}
    </div>
{% endblock %}
