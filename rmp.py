import requests
import re
import base64
import json

def search_prof(prof_name):
    url = f"https://www.ratemyprofessors.com/search/professors/1109?q={prof_name}"
    page = requests.get(url)

    data = re.findall(r'"legacyId":(\d+)', page.text)
    prof_list = []

    return data[0] if len(data) > 0 else None

def get_professor_by_id(prof_id):
    url = f"https://www.ratemyprofessors.com/ShowRatings.jsp?tid={prof_id}"
    page = requests.get(url)
    comments = re.findall(r'"comment":"(.*?)"', page.text)

    headers = {
        "Referer": f"https://www.ratemyprofessors.com/ShowRatings.jsp?tid={prof_id}",
        "Authorization": "Basic dGVzdDp0ZXN0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
        "Content-Type": "application/json"
    }
    professor_query = {
        "query":"query RatingsListQuery($id: ID!) {node(id: $id) {... on Teacher {school {id} courseCodes {courseName courseCount} firstName lastName numRatings avgDifficulty avgRating department wouldTakeAgainPercent}}}",
        "variables" : {
            "id": base64.b64encode((f"Teacher-{prof_id}").encode('ascii')).decode('ascii')
        }
    }

    data = requests.post(url="https://www.ratemyprofessors.com/graphql", json=professor_query, headers=headers)

    if data is None or json.loads(data.text)["data"]["node"] is None:
        raise ValueError("Professor not found with that id or bad request.")


    prof_data = json.loads(data.text)["data"]["node"]

    return {
        "comments": comments,
        "overall": prof_data['avgRating'],
        "difficulty": prof_data['avgDifficulty'],
    }

def get_professor_by_name(prof_name):
  return get_professor_by_id(search_prof(prof_name))