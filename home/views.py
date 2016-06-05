from django.shortcuts import render
from home.models import Html
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')


def side_editor(request):
    if request.is_ajax():
        name = request.POST['name'].strip()
        title = request.POST['title'].strip()
        body = request.POST['body'].strip()
        html = Html.objects.get(name=name)
        html.title = title
        html.body = body
        result = html.save()
        return HttpResponse(result)
