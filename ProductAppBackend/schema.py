from graphene import ObjectType, Schema
import productApp

class Query(productApp.schema.Query, ObjectType):
    pass


schema= Schema(query= Query)