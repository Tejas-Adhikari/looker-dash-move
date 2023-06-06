import requests
import time
import json

# folder_id = 443
# convertedFD_id = str(folder_id)

def move_dash():
    base_url = "https://generalmillsdev.cloud.looker.com:19999/api/4.0/folders/search?name="
    folder_name = input('Enter your folder name : ')
    url = base_url + folder_name
    response = requests.request("GET", url, headers=headers, data=payload)
    data = response.json()
    if data == []:
        print("No Folder found")
    else:
        get_data = data[0]
        name = get_data['id']
        print(name)
        convertedFD_id =str(name)

    base_url = "https://generalmillsdev.cloud.looker.com:19999/api/4.0/dashboards/"
    url = base_url + convertedDB_id + "/move?folder_id=" + convertedFD_id
    response = requests.request("PATCH", url, headers=headers, data=payload)
    print(response.status_code)


base_url = "https://generalmillsdev.cloud.looker.com:19999/api/4.0/dashboards/search?title="
dash_name = input('Enter your dashboard name : ')
url = base_url + dash_name
payload = ""
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer pkcq7Tw8DkJwCknDjQfc4dsCswBdh42xbpwRRCyF'
}


response = requests.request("GET", url, headers=headers, data=payload)
data = response.json()

if data == []:
    print("No Dashboard found")
else:
    get_data = data[0]
    title = get_data['dashboard_elements']
    get_id = title[0]
    get_dashboard_id = get_id['dashboard_id']
    print(get_dashboard_id)
    convertedDB_id =str(get_dashboard_id)
    move_dash()
