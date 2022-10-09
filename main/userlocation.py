from django.conf import settings
import requests


location_api_key = settings.LOCATION_API_KEY


api_url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + location_api_key


def get_ip_geolocation_data(ip_address):
    '''
    
    '''
    if ip_address != "127.0.0.1":
        response = requests.get(api_url + "&ip_address=" + ip_address)
    else:
        ip_address = '41.186.18.11'
        response = requests.get(api_url + "&ip_address=" + ip_address)
    print(response.content)
