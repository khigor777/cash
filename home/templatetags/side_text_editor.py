from django import template
register = template.Library()
from home.models import Html


@register.inclusion_tag("tag/side_text_editor.html")
def show_editor(table_name, row, id, value):
    return {'data':{'table_name':table_name, 'row':row, 'id':id, 'value':value}}


@register.filter(name='get_class')
def get_class(value):
    return value.__class__.__name__


@register.filter(name='get_attribute')
def get_attribute(value):
    val = value.split('.')
    if isinstance(val, list):
        return val[-1]
    return value