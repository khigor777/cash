from django import template
register = template.Library()
from home.models import Html


@register.inclusion_tag("tag/side_text_editor.html")
def show_editor(value):
    html = Html.objects.get(name=value)
    return {'text':html}