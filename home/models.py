from django.db import models

# Create your models here.
class Html(models.Model):


    id = models.AutoField(primary_key=True)
    title=models.CharField(max_length=800)
    body =models.TextField()
    name =models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.title