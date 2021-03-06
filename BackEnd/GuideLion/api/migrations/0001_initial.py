# Generated by Django 3.2.7 on 2021-10-09 17:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Curator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('mail', models.EmailField(default=None, max_length=200)),
                ('profile_photo', models.ImageField(default=None, upload_to='photos/%Y%m%d')),
                ('password', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('category', models.CharField(max_length=1000)),
                ('price', models.IntegerField(default=None)),
                ('rating', models.IntegerField(default=None)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('mail', models.EmailField(default=None, max_length=200)),
                ('profile_photo', models.ImageField(default=None, upload_to='photos/%Y%m%d')),
                ('password', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_name', models.CharField(max_length=1000)),
                ('date', models.CharField(max_length=1000)),
                ('curator_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Curator', to='api.curator')),
                ('student_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Student', to='api.student')),
            ],
        ),
    ]
