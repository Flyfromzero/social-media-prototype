# Generated by Django 4.2.13 on 2024-05-28 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core_post", "0003_alter_post_table"),
        ("core_user", "0005_alter_user_table"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="posts_liked",
            field=models.ManyToManyField(related_name="liked_by", to="core_post.post"),
        ),
    ]
