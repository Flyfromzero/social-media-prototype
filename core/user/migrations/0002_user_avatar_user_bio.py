# Generated by Django 4.2.13 on 2024-05-24 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core_user", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="avatar",
            field=models.ImageField(null=True, upload_to=""),
        ),
        migrations.AddField(
            model_name="user",
            name="bio",
            field=models.TextField(null=True),
        ),
    ]
