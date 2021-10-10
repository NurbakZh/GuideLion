{% include "partials/doctype.html.tpl" %}
<head>
    {% block head %}
        {% include "partials/content_type.html.tpl" %}
        {% include "partials/includes.html.tpl" %}
        <title>Automium / {% block title %}{% endblock %}</title>
    {% endblock %}
</head>
<body class="ux">
    <div id="header">
        {% block header %}
            <h1>{% block name %}{% endblock %}</h1>
            <div class="links">
                {% if link == "home" %}
                    <a href="{{ url_for('index') }}" class="active">home</a>
                {% else %}
                    <a href="{{ url_for('index') }}">home</a>
                {% endif %}
                //
                {% if link == "projects" %}
                    <a href="{{ url_for('list_projects') }}" class="active">projects</a>
                {% else %}
                    <a href="{{ url_for('list_projects') }}">projects</a>
                {% endif %}
                //
                {% if link == "new_project" %}
                    <a href="{{ url_for('new_project') }}" class="active">new project</a>
                {% else %}
                    <a href="{{ url_for('new_project') }}">new project</a>
                {% endif %}
                //
                {% if link == "about" %}
                    <a href="{{ url_for('about') }}" class="active">about</a>
                {% else %}
                    <a href="{{ url_for('about') }}">about</a>
                {% endif %}
            </div>
        {% endblock %}
    </div>
    <div id="content">{% block content %}{% endblock %}</div>
    {% include "partials/footer.html.tpl" %}
</body>
{% include "partials/end_doctype.html.tpl" %}
