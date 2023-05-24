from django.contrib import admin
from .models import Item, AdditionalImage, AdvUser, Size, Composition, Tag



class AdvUserAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'is_activated', 'date_joined')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    # list_filter = (NonactivatedFilter, )
    fields = (('username', 'email'), 
              ('first_name', 'last_name'), 
              ('send_messages', 'is_active', 'is_activated'), 
              ('is_staff', 'is_superuser'), 
              'groups', 'user_permissions', 
              ('last_login', 'date_joined'),          
              )
    readonly_fields = ('last_login', 'date_joined')
    # actions = (send_activation_notifications,)

class AdditionalImageInline(admin.TabularInline):
    model = AdditionalImage

class SizeInline(admin.TabularInline):
    model = Item.sizes.through

class CompositionInline(admin.TabularInline):
    model = Item.composition.through
    
class TagInline(admin.TabularInline):
    model = Item.tags.through

    
class ItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'producer', 'price', 'rating', 'image', 'description', 'author', 'is_active', 'created_at')
    fields = ('title', 'producer', 'price', 'rating', 'description', 'is_active', 'author', 'image')
    inlines = (AdditionalImageInline, CompositionInline, TagInline, SizeInline)

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    fields = ('name',)

class SizeAdmin(admin.ModelAdmin):
    list_display = ('number',)
    fields = ('number',)

class CompositionAdmin(admin.ModelAdmin):
    list_display = ('name',)
    fields = ('name',)

admin.site.register(Item, ItemAdmin)
admin.site.register(AdvUser, AdvUserAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Size, SizeAdmin)
admin.site.register(Composition, CompositionAdmin)