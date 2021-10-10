{% extends "partials/layout.html.tpl" %}
{% block header %}
    {{ super() }}
    <div class="links sub-links">
        {% if sub_link == "info" %}
            <a href="{{ url_for('show_project', name = project.name) }}" class="active">info</a>
        {% else %}
            <a href="{{ url_for('show_project', name = project.name) }}">info</a>
        {% endif %}
        //
        {% if sub_link == "builds" %}
            <a href="{{ url_for('list_builds', name = project.name) }}" class="active">builds</a>
        {% else %}
            <a href="{{ url_for('list_builds', name = project.name) }}">builds</a>
        {% endif %}
        //
        {% if sub_link == "delete" %}
            <a href="{{ url_for('run_project', name  = project.name) }}" class="active">run</a>
        {% else %}
            <a href="{{ url_for('run_project', name  = project.name) }}">run</a>
        {% endif %}
        //
        {% if sub_link == "edit" %}
            <a href="{{ url_for('edit_project', name = project.name) }}" class="active">edit</a>
        {% else %}
            <a href="{{ url_for('edit_project', name = project.name) }}">edit</a>
        {% endif %}
        //
        {% if sub_link == "delete" %}
            <a href="{{ url_for('delete_project', name = project.name) }}" class="active">delete</a>
        {% else %}
            <a href="{{ url_for('delete_project', name = project.name) }}">delete</a>
        {% endif %}
    </div>
{% endblock %}
