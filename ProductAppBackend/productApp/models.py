from django.db import models
from uuid import uuid4
# Create your models here.

class Product(models.Model):
    name= models.Charfield(max_length= 2000, blank=False, null=False, default="random")
    descriptioin= models.CharField(max_length=200000, blank=True, null= True)
    sku= models.UUIDField(default= uuid4().time_low)
    price= models.BigIntegerField()
    image= models.ImageField(upload_to='product_images', blank= True)

    def __str__(self):
        return self.name
