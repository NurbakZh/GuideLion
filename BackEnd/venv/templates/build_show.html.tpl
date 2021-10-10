{% extends "partials/layout_build.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}{{ project.name }} :: {{ build.id }}{% endblock %}
{% block content %}
    <table>
        <tbody>
            <tr>
                <td class="right label" width="50%">result</td>
                <td class="left value {{ build.result_l }}" width="50%">{{ build.result_l }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">start time</td>
                <td class="left value" width="50%">{{ build.start_time_l }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">end time</td>
                <td class="left value" width="50%">{{ build.end_time_l }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">duration</td>
                <td class="left value" width="50%">{{ build.delta_l }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">size</td>
                <td class="left value" width="50%">{{ build.size_string }}</td>
            </tr>
            <tr>
                <td class="right label" width="50%">system</td>
                <td class="left value" width="50%">{{ build.system }}</td>
            </tr>
        </tbody>
    </table>
{% endblock %}
