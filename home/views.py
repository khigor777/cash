from django.shortcuts import render
from home.models import Html
from django.http import HttpResponse


def index(request):
    html = Html.objects.filter(name__contains='index_page')
    context = {
        'left_side_texts': html
    }
    return render(request, 'index.html', context)


def side_editor(request):
    if request.is_ajax():
        table = request.POST['table'].strip()
        row = request.POST['row'].strip()
        id = request.POST['id'].strip()
        value = request.POST['value'].strip()

        html = eval(table).objects.get(pk=int(id))
        setattr(html, row, value)
        html.save()
        return HttpResponse('ok')
