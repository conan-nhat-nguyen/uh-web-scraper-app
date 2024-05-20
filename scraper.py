import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import NoSuchElementException
import os
from bs4.formatter import HTMLFormatter
import google.generativeai as genai
import rmp

genai.configure(api_key="AIzaSyD7isfX8OIe0PbRZgmq07bSvL-zwsiLWSU")

def web_driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--verbose")
    options.add_argument('--no-sandbox')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument("--window-size=1920, 1200")
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(options=options)
    return driver

def generate_comment(comments):
    model = genai.GenerativeModel('gemini-pro')

    prompt = "Summerize these comments from students about a particular professor in a concise manner (less than 100 words):\n"

    for i, cmt in enumerate(comments):
        prompt += "Student Comment " + str(i + 1) + ": "  + cmt + "\n"


    response = model.generate_content(prompt)

    return response.text

def search_classes(session = "", subject = "", match_type = "", match_id = "", career = ""):
  cols = ["class", "section", "day_times", "room", "instructor"]
  # Input Fields
  url = "https://saprd.my.uh.edu/psc/saprd/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL"
  driver3 = web_driver()
  driver3.get(url)  

  session_select = Select(driver3.find_element(By.NAME, "SSR_CLSRCH_WRK_SESSION_CODE$0"))
  subject_select = Select(driver3.find_element(By.NAME, "SSR_CLSRCH_WRK_SUBJECT_SRCH$1"))
  match_type_select = Select(driver3.find_element(By.NAME, "SSR_CLSRCH_WRK_SSR_EXACT_MATCH1$2"))
  match_id_input = driver3.find_element(By.NAME, "SSR_CLSRCH_WRK_CATALOG_NBR$2")
  career_select = Select(driver3.find_element(By.NAME, "SSR_CLSRCH_WRK_ACAD_CAREER$3"))

  session_select.select_by_index(session)
  subject_select.select_by_value(subject)
  match_type_select.select_by_value(match_type)
  match_id_input.send_keys(match_id)
  career_select.select_by_value(career)

  submit_btn = driver3.find_element(By.NAME, "CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH")
  submit_btn.click()

  # Wait until class list response
  WebDriverWait(driver3, 15).until(EC.presence_of_element_located((By.ID, "win0divSSR_CLSRSLT_WRK_GROUPBOX1")))


  # Get all table class rows
  rows = []
  k = 0
  while True:
    try:
      row_element = driver3.find_element(By.ID, f"trSSR_CLSRCH_MTG1${k}_row1")
      rows.append(row_element)
      k += 1
    except NoSuchElementException:
      break

  print(f"Found {len(rows)} rows")

  # Find the inner text
  def get_innermost_child(element):
      children = element.find_elements(By.XPATH ,".//span")

      if children[0].find_elements(By.XPATH, ".//a"):
        return children[0].find_elements(By.XPATH, ".//a")[0]

      return children[0]

  # Return all classes that were returned
  results = []
  for j, row in enumerate(rows):
    cells = row.find_elements(By.TAG_NAME, "td")
    str_cur = ""

    fields = []

    for i in range(5):
      cur = get_innermost_child(cells[i])
      fields.append(cur.text.replace("\n", " "))


    course_obj = {}
    for i, col in enumerate(cols):
      course_obj[col] = fields[i]

    rmpProfile = rmp.get_professor_by_name(course_obj["instructor"])
    if rmpProfile != None:
      print(rmpProfile.difficulty)

    results.append(course_obj)

  return results

 
      