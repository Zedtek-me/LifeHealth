from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from ProductAppBackend.productApp.models import *

class ProductNode(DjangoObjectType):
    class Meta:
        model= Product
        filter_fields= ["name", "sku", "description", "sku", "price", "owner"]
        interface= relay.Node,


class Query(ObjectType):
    product= relay.Node.Field(ProductNode)
    all_products= DjangoFilterConnectionField(ProductNode)