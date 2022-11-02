from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User
# Create your models here.

class Product(models.Model):
    name= models.CharField(max_length= 2000, blank=False, null=False, default="random")
    description= models.CharField(max_length=200000, blank=True, null= True)
    sku= models.UUIDField(default= uuid4().urn.replace("urn:uuid:", "").split("-")[0])
    price= models.BigIntegerField()
    image= models.ImageField(upload_to='product_images/', blank= True)
    owner= models.ForeignKey(User, related_name="owner", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
