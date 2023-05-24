from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

from .utilities import send_new_comment_notification



class AdvUser(AbstractUser):
    is_activated = models.BooleanField(
        default=True, db_index=True, verbose_name='Прощёл активацию?')
    send_messages = models.BooleanField(
        default=True, verbose_name='Уведомлять о новых комментариях?')

    def delete(self, *args, **kwargs):
        for item in self.item_set.all():
            item.delete()
        super().delete(*args, **kwargs)

    class Meta(AbstractUser.Meta):
        pass

class Size(models.Model):
    number = models.FloatField(verbose_name = 'Размер')
    
    class Meta:
        verbose_name_plural = 'Размеры'
        verbose_name = 'Размеры'
       

class Composition(models.Model):
    name = models.CharField(max_length=50, verbose_name = 'Материал')

    class Meta:
        verbose_name_plural = 'Материал'
        verbose_name = 'Материал'
      
    

class Tag(models.Model):
    name = models.CharField(max_length=50, verbose_name='Тег')

    class Meta:
        verbose_name_plural = 'Теги'
        verbose_name = 'Тег'
   
   

class Item(models.Model):
    title = models.CharField(max_length=50, verbose_name='Заголовок')
    producer = models.CharField(max_length=40, verbose_name='Производитель')
    price = models.FloatField(default=0, verbose_name='Цена')
    rating = models.FloatField(default=0, verbose_name='Рейтинг')
    sizes = models.ManyToManyField(Size, through='ItemSize', verbose_name='Размеры')
    composition = models.ManyToManyField(Composition, through='ItemComposition', verbose_name='Материал')
    description = models.TextField(verbose_name='Описание')
    tags = models.ManyToManyField(Tag, through='ItemTag', verbose_name='Теги')
    image = models.TextField(blank=True, verbose_name='Url изображения')
    author = models.ForeignKey(
        AdvUser, on_delete=models.CASCADE, verbose_name='Создатель', blank=True)
    is_active = models.BooleanField(
        default=True, db_index=True, verbose_name='Выводить в списке?')
    created_at = models.DateTimeField(
        auto_now_add=True, db_index=True, verbose_name='Дата и время публикации')

    def delete(self, *args, **kwargs):
        for ai in self.additionalimage_set.all():
            ai.delete()
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Объявления'
        verbose_name = 'Объявление'
        ordering = ['-created_at']

class ItemTag(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.RESTRICT, verbose_name='Тег')
    item = models.ForeignKey(Item, on_delete=models.RESTRICT, verbose_name='Объявление') 

    class Meta:
        verbose_name_plural = 'Теги'
        verbose_name = 'Тег'
   

class ItemSize(models.Model):
    size = models.ForeignKey(Size, on_delete=models.RESTRICT, verbose_name='Размер')
    item = models.ForeignKey(Item, on_delete=models.RESTRICT, verbose_name='Объявление')

    class Meta:
        verbose_name_plural = 'Размеры'
        verbose_name = 'Размер'
   

class ItemComposition(models.Model):
    composition = models.ForeignKey(Composition, on_delete=models.RESTRICT, verbose_name='Материал')
    item = models.ForeignKey(Item, on_delete=models.RESTRICT, verbose_name='Объявление')
    

    class Meta:
        verbose_name_plural = 'Материал'
        verbose_name = 'Материалы'
   

class AdditionalImage(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE,
                           verbose_name='Объявление')
    image = models.TextField(verbose_name='Url изображения')

    class Meta:
        verbose_name = 'Дополнительная иллюстрация'
        verbose_name_plural = 'Дополнительные иллюстрации'


class Comment(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE,
                           verbose_name='Объявление')
    author = models.CharField(max_length=30, verbose_name='Автор')
    content = models.TextField(verbose_name='Содержание')
    is_active = models.BooleanField(
        default=True, db_index=True, verbose_name='Выводить на экран?')
    created_at = models.DateTimeField(
        auto_now_add=True, db_index=True, verbose_name='Опубликован')

    class Meta:
        verbose_name_plural = 'Комментарии'
        verbose_name = 'Комментарий'
        ordering = ['created_at']


def post_save_dispatcher(sender, **kwargs):
    author = kwargs['instance'].item.author
    if kwargs['created'] and author.send_messages:
        send_new_comment_notification(kwargs['instance'])


post_save.connect(post_save_dispatcher, sender=Comment)


