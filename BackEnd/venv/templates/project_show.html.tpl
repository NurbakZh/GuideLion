{% extends "partials/layout_project.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}{{ project.name }}{% endblock %}
{% block content %}
    <div class="quote">{{ project.description }}</div>
    <div class="separator-horizontal"></div>
    <table>
        <tbody>
            <tr>
                <td class="right label" width="50%">status</td>
                <td class="left value {{ project.result_l }}" width="50%">{{ project.result_l | default('no builds') }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">next run</td>
                <td class="left value" width="50%">{{ project.next_time_l | default('not scheduled') }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">build time</td>
                <td class="left value" width="50%">{{ project.build_time_l | default('0 seconds') }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">build count</td>
                <td class="left value" width="50%">{{ project.builds | default(0) }} builds</td>
            </tr>
            <tr>
                <td class="right label" width="50%">build file</td>
                <td class="left value" width="50%"><a href="{{ url_for('config_project', name = project.name) }}">build.json</a></td>
            </tr>
        </tbody>
    </table>
{% endblock %}
