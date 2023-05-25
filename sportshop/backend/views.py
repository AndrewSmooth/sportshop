from django.shortcuts import render
from backend.models import Item, Comment, ItemTag, ItemSize, ItemComposition
from operator import attrgetter

from rest_framework.views import APIView
from .models import Item
from .serializer import ItemSerializer
from rest_framework.response import Response


class ItemView(APIView):
    def get(self, request, pk):
        item = Item.objects.get(pk=pk)
        item_tags = ItemTag.objects.all().filter(item=item)
        item_sizes = ItemSize.objects.all().filter(item=item)

        item_composition = ItemComposition.objects.all().filter(item=item)
        ais = item.additionalimage_set.all()

        item_tgs = []
        for item_tag in item_tags:
            item_tgs.append(item_tag.tag.name)

        item_cms = []
        for item_comp in item_composition:
            item_cms.append(item_comp.composition.name)

        item_szs = []
        for item_size in item_sizes:
            item_szs.append(item_size.size.number)
            # print(el.size.number)
        print(item_tgs)

        item_ais = [item.image]
        for item_ai in ais:
            item_ais.append(item_ai.image)
        print(item_ais)



        pictures = [item.image, ais]
        # comments = Comment.objects.filter(item=pk, is_active=True)
        output = {
                'name': item.title,
                'producer': item.producer,
                'price': item.price,
                'rating': item.rating,
                'sizes': item_szs,
                'composition': item_cms,
                'discription': item.description,
                'tags': item_tgs,
                # 'pictures': ['https://sun1-98.userapi.com/impg/IvXcH923ZK9yrO51MiRP9LGiAlFzgmd6Dnfzjw/FHyxlnYtaFw.jpg?size=600x800&quality=96&sign=03cfa082c4f7d25722b68edc65da2297&type=album', 'https://sun9-77.userapi.com/impg/rLIMylmGESNmf8RPiec8uiPP1OqUonfoz7K8Cg/17C4PQ4x1eo.jpg?size=600x800&quality=96&sign=56434ba1eb1bb0fb61ed06da05e217dc&type=album', 'https://sun9-7.userapi.com/impg/XLRCHIOS14tENbmhHtiMq9sgUcb47VWtnuRy3Q/RNPwTU2iNNU.jpg?size=600x800&quality=96&sign=6c774204295a9ce98bcc482f1621e06d&type=album'],
                'pictures': item_ais,
                'reviews': [{'name': 'Andrew', 'rating': 4, 'review': 'Классные кроссовки' }]
            } 
        print(item_sizes)
        return Response(output)
    

class ItemsView(APIView):
    def get(self, request, url_tags, ordering):
        items_with_url_tags = []
        items = []
        url_tags = url_tags.split(':')
        for url_tag in url_tags:
            for item_tag in ItemTag.objects.all():
                if item_tag.tag.name == url_tag:
                    items_with_url_tags.append(item_tag.item)
        for item_with_url_tag in items_with_url_tags:
            if items_with_url_tags.count(item_with_url_tag) == len(url_tags):
                items.append(item_with_url_tag)
        if ordering != 'default':
            if ordering == 'rating':
                items = sorted(set(items), key=attrgetter('rating'), reverse=True)
            elif ordering == 'priceMax':
                items = sorted(set(items), key=attrgetter('price'), reverse=True)
            elif ordering == 'priceMin':
                items = sorted(set(items), key=attrgetter('price'), reverse=False)
        output = []
        for item in items:
            item_dict = {
                'id': item.id,
                'name': item.title,
                'producer': item.producer,
                'price': item.price,
                'rating': item.rating,
                'picture': item.image,
            }
            output.append(item_dict)
        print(output)       
        print('кайф')       
        return Response(output)
    

def item(request, pk):
    item = Item.objects.get(pk=pk)
    item_tags = ItemTag.objects.all().filter(item=item)
    item_sizes = ItemSize.objects.all().filter(item=item)
    item_composition = ItemComposition.objects.all().filter(item=item)
    ais = item.additionalimage_set.all()
    comments = Comment.objects.filter(item=pk, is_active=True)
    context = {'item': item, 'tags': item_tags, 'sizes': item_sizes, 'composition': item_composition, 'ais': ais, 'comments': comments}
    return render(request, 'main/item.html', context)


def items(request, url_tags, ordering):
    items_with_url_tags = []
    items = []
    url_tags = url_tags.split(':')
    for url_tag in url_tags:
        for item_tag in ItemTag.objects.all():
            if item_tag.tag.name == url_tag:
                items_with_url_tags.append(item_tag.item)
    for item_with_url_tag in items_with_url_tags:
        if items_with_url_tags.count(item_with_url_tag) == len(url_tags):
            items.append(item_with_url_tag)
    if ordering != 'default':
        if ordering == 'rating':
            items = sorted(set(items), key=attrgetter('rating'), reverse=True)
        elif ordering == 'priceMax':
            items = sorted(set(items), key=attrgetter('price'), reverse=True)
        elif ordering == 'priceMin':
            items = sorted(set(items), key=attrgetter('price'), reverse=False)
    context = {'items': items}
    return render(request, 'main/items.html', context)
        
    



    # def post(self, request):
    #     serializer = ItemSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         serializer.save()
    #         return Response(serializer.data)

    

