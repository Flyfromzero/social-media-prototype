# Generated by Django 4.2.13 on 2024-07-14 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core_comment", "0001_initial"),
        ("core_user", "0006_user_posts_liked"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="comments_liked",
            field=models.ManyToManyField(
                related_name="commented_by", to="core_comment.comment"
            ),
        ),
    ]
