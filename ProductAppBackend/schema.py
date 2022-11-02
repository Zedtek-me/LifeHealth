from graphene import ObjectType, Schema
from productApp.schema import Query

class Query(Query, ObjectType):
    pass


shema= Schema(query= Query)