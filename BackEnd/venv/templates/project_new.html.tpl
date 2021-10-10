{% extends "partials/layout.html.tpl" %}
{% block title %}Projects{% endblock %}
{% block name %}New Project{% endblock %}
{% block content %}
    <form action="{{ url_for('create_project') }}" enctype="multipart/form-data" method="post" class="form">
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
            <input class="recursion" name="days" placeholder="-" value="{{ project.days }}" /> days
            <input class="recursion" name="hours" placeholder="-" value="{{ project.hours }}" /> hours
            <input class="recursion" name="minutes" placeholder="-" value="{{ project.minutes }}" /> minutes
            <input class="recursion" name="seconds" placeholder="-" value="{{ project.seconds }}" /> seconds
        </div>
        <div class="label">
            <label>Build File</label>
        </div>
        <div class="input">
             <a data-name="build_file" class="uploader" data-error="{{ errors.build_file }}">Select & Upload the build file</a>
        </div>
        <div class="quote">
            By clicking Submit Project, you agree to our Service Agreement and that you have
            read and understand our Privacy Policy.
        </div>
        <span class="button" data-submit="true">Submit Project</span>
    </form>
{% endblock %}
