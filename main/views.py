from django.shortcuts import render
from django.views import View
from .userlocation import get_ip_geolocation_data
import json



def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

# Create your views here.
class HomePageView(View):
    def get(self,request):
        ip = get_client_ip(request)
        get_location = get_ip_geolocation_data(ip)
        geolocation_data = json.loads(get_location)
        print(geolocation_data)
        context ={}
        return render(request, 'index.html', context)