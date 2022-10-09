from django.conf import settings
import requests
import json


# getting the location api key 
location_api_key = settings.LOCATION_API_KEY

# api call to the u
api_url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + location_api_key


def get_ip_geolocation_data(ip_address):
    '''
    Summary:
        This function takes in a user's ip address and it returns their location details

    Parameters:
        ip_address (str): this is the user's ip address 

    Returns:
        response: the response returned is in form of a python dict
    
    '''
    if ip_address != "127.0.0.1":
        response = requests.get(api_url + "&ip_address=" + ip_address)
        geolocation_data = json.loads(response.content)
        
        context = { 
                "flag":geolocation_data['flag']['svg'],
                "city_name": geolocation_data['city'],
                "country": geolocation_data['country'],
                "current_time":geolocation_data['timezone']['current_time'],
                "country_code":geolocation_data['country_code']
            }
        return context
    else:
        ip_address = '41.186.18.11'
        response = requests.get(api_url + "&ip_address=" + ip_address)
        geolocation_data = json.loads(response.content)
        
        context = { 
                "flag":geolocation_data['flag']['svg'],
                "city_name": geolocation_data['city'],
                "country": geolocation_data['country'],
                "current_time":geolocation_data['timezone']['current_time'],
                "country_code":geolocation_data['country_code']
            }
        return context
