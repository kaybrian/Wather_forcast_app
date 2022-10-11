import requests
import json
from django.conf import settings

# calls in an api key that is generated from open weather platfrom
# make sure you sign up for an api key if you dont have any
open_weather_secret_key = settings.OPEN_API_KEY

# the open weather url
open_weather_url = "https://api.openweathermap.org/data/2.5/forecast?"

def get_weather_date(city_name="kigali"):  
    '''
    Summary:
        The Function is used to call an api, weather api form the 
        open weather api to get weather information about a particular city 
        If no city is passed through, the api takes in "kigali" as the default city. 

    Parameters:
        city_name (str): Name of the city whose information needs to be gotten 

    Returns:
        response: the response returned is in form of a python dict
    
    '''     
    city_url = open_weather_url + "q=" + city_name + "&cnt=5" + "&appid=" + open_weather_secret_key
    # call the api url and get a respone
    response = requests.get(city_url)

    # format the data into a python json object
    res = response.json()
    
    # Check to see if the City exits
    if res["cod"] != "404":
        results = {
            "current_day":{
                "current_tmp": int(res["list"][0]['main']['temp']) - 273.15,
                "description":res["list"][0]['weather'][0]['main'],
                "wind":res["list"][0]['wind']['speed'],
                "humidity":res["list"][0]['main']['humidity'],
                "Cloudiness":res["list"][0]['clouds']['all']
            },
            "day1":{
                "temp":int(res['list'][1]['main']['temp']) - 273.15
            },
            "day2":{
                "temp":int(res['list'][2]['main']['temp']) - 273.15
            },
            "day3":{
                "temp":int(res['list'][3]['main']['temp']) - 273.15
            },
            "day4":{
                "temp":int(res['list'][4]['main']['temp']) - 273.15
            }
        }
        return results
    else:
        return {"Message":"sorry we have a problem"}



#  results = {
#             "current_day":{
#                 "current_time": res["list"][0]['main']['temp'],
#                 "description":res["list"][0]['weather']['main'],
#                 "wind":res["list"][0]['wind']['speed'],
#                 "humidity":res["list"][0]['main']['humidity'],
#                 "Cloudiness":res["list"][0]['clouds']['all']
#             },
#             "day1":{
#                 "temp":res['list'][1]['main']['temp'] 
#             },
#             "day2":{
#                 "temp":res['list'][2]['main']['temp'] 
#             },
#             "day3":{
#                 "temp":res['list'][3]['main']['temp'] 
#             },
#             "day3":{
#                 "temp":res['list'][4]['main']['temp'] 
#             }
#         }