from rest_framework import serializers
from .models import AdvUser, Size, Composition, Tag, Item, ItemTag, ItemSize, ItemComposition, AdditionalImage

class AdvUserSerializer(serializers.ModelSerializer):
    model = AdvUser
    fields = ['id', 'is_activated', 'send_messages']


class SizeSerializer(serializers.ModelSerializer):
    model = Size
    fields = ['id', 'number']


class CompositionSerializer(serializers.ModelSerializer):
    model = Composition
    fields = ['id', 'name']


class TagSerializer(serializers.ModelSerializer):
    model = Tag
    fields = ['id', 'name']


class ItemSerializer(serializers.ModelSerializer):
    model = Item
    fields = ['id', 'title', 'producer', 'price', 'rating', 'sizes', 'composition', 'description', 'tags', 'image', 'author', 'is_active', 'created_at']


class ItemTagSerializer(serializers.ModelSerializer):
    model = ItemTag
    fields = ['id', 'tag', 'item']


class ItemSizeSerializer(serializers.ModelSerializer):
    model = ItemSize
    fields = ['id', 'size', 'item']


class ItemCompositionSerializer(serializers.ModelSerializer):
    model = ItemComposition
    fields = ['id', 'compositon', 'item']


class AdditionalImageSerializer(serializers.ModelSerializer):
    model = AdditionalImage
    fields = ['id', 'item', 'image']