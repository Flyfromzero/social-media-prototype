# Generated by Django 4.2.13 on 2024-05-27 10:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core_post", "0002_alter_post_table"),
    ]

    operations = [
        migrations.AlterModelTable(
            name="post",
            table="core_post",
        ),
    ]
