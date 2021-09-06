# Generated by Django 3.2.7 on 2021-09-06 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmark_api', '0003_auto_20210906_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='categories',
            field=models.ManyToManyField(blank=True, to='bookmark_api.Category'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='tags',
            field=models.ManyToManyField(blank=True, to='bookmark_api.Tag'),
        ),
    ]
