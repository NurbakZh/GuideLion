{% extends "partials/layout_project.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}{{ project.name }} :: edit{% endblock %}
{% block content %}
    <form action="{{ url_for('update_project', name = project.name) }}" enctype="multipart/form-data" method="post" class="form">
        <input name="id" type="hidden" value="{{ project.name }}" />
        <div class="label">
            <label>Project Name</label>
        </div>
        <div class="input">
            <input class="text-field" name="name" placeholder="eg: colony" value="{{ project.name }}"
                   data-error="{{ errors.name }}" />
        </div>
        <div class="label">
            <label>Description</label>
        </div>
        <div class="input">
            <textarea class="text-field" name="description" placeholder="eg: some words about the project"
                      data-error="{{ errors.description }}">{{ project.description }}</textarea>
        </div>
        <div class="label">
            <label>Recursion</label>
        </div>
        <div class="recursion-set">
            <input class="recursion" name="days" value="{{ project.days }}" placeholder="-" /> days
            <input class="recursion" name="hours" value="{{ project.hours }}" placeholder="-" /> hours
            <input class="recursion" name="minutes" value="{{ project.minutes }}" placeholder="-" /> minutes
            <input class="recursion" name="seconds" value="{{ project.seconds }}" placeholder="-" /> seconds
        </div>
        <div class="label">
            <label>Build File</label>
        </div>
        <div class="input">
             <a data-name="build_file" class="uploader" data-error="{{ errors.build_file }}">Select & Upload the build file</a>
        </div>
        <span class="button" data-link="{{ url_for('show_project', name = project.name) }}">Cancel</span>
        //
        <span class="button" data-submit="true">Update</span>
    </form>
{% endblock %}
