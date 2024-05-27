# Project: University of Houston Web Scraper + AI-Powered Rate My Professor Reviews
Version: v1.0.

Last updated: May 26th, 2024.

Authors: [Conan Nguyen](https://github.com/conan-nhat-nguyen), [Hung Bui](https://github.com/hungqbui)

Languages used: Python, TypeScript

Libraries/Frameworks used:
  - Selenium: web scraping
  - Next.js: front-end
  - Google Generative AI: NLP Model
  - Axios: HTTP Requests

## Introduction

This application is recommended for all interested college students at University of Houston to find their classes' information and the associated professors' ratings in one go. 

Requirement: You need to have Python installed in your computer. For more information, please refer to the instructions in Python's website: https://www.python.org/ 

## Step 1: Clone this repository to your local computer

Use GitHub to clone the repository to your computer to use.
If necessary, please refer to this guide to learn how to clone repository in GitHub: 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Step 2: Create a virtual environment
Creating a virtual environment will help to store packages needed for this project locally in your computer. However, this is completely optional but recommended. You can skip to Step 3 to continue.

For the guide to create a virtual environment in Python, please refer to this: https://docs.python.org/3/library/venv.html

## Step 3: Install dependencies needed for the application

Put this command in your terminal in your code editor:
```
pip install requirements.txt
```
This will automatically install the needed dependencies and libraries needed to run the project. Wait for all the installations to finish before proceeding to Step 4.

## Step 4: Run the web scraper engine (backend)

Run this command in your terminal to run the web scraper engine:
```
python app.py
```
Or run this command for some versions of python:
```
python3 app.py
```

## Step 5: Run the interactive UI webpage (frontend)
Run these commands to start the Next.js application where you can start using the application:

1. Navigte to scraper-app folder (where all Next.js files are stored):
```
cd scraper-app
```
2. Once you are in /scraper-app directory, install dependencies for Next.js application:
```
pip install
```

Run Next.js application in developmental mode:
```
npm run dev
```
The app should be running now. Navigate to http://localhost:3000 to start using the app.

You should see the application like this:

![sample form](https://github.com/conan-nhat-nguyen/uh-web-scraper-app/blob/main/images/form.png)

There should be dropdown options for each field. Please select the option that fit your need. 

For MatchID, please put in the course number you need to search for. For example: **COSC 1336**
- Subject: ```COSC```
- MatchID: ```1336```
  
### Examples of how to fill out the form:
#### 1) Searching a class with only ```Session``` and ```Subject```

Example: Searching for ```Regular Academic Session``` for ```BTEC``` classes

![Searching for BTEC Classes](https://github.com/conan-nhat-nguyen/uh-web-scraper-app/blob/main/images/form1_searching_BTEC.png)

And then you should get: 

![Results for BTEC Classes](https://github.com/conan-nhat-nguyen/uh-web-scraper-app/blob/main/images/form1_result_BTEC.png)

Note: If there is no matching professor from UH class database with Rate My Professor's database, the summary will display "No description available."


#### 2) Searching for a class with other fields

Example: Searching for 
- Session: ```Regular Academic Session```
- Subject: ```COSC```
- Match Type: ```is exactly```
- MatchID: ```1136```
- Career: not selected

Here are how you would choose in the form: 

![Searching for COSC Classes](https://github.com/conan-nhat-nguyen/uh-web-scraper-app/blob/main/images/form2_searching_COSC1136.png)

And you should get: 

![Result for COSC Classes](https://github.com/conan-nhat-nguyen/uh-web-scraper-app/blob/main/images/form2_result_COSC1136.png)

Note: If you put in a nonexistant class, you will get a network error.


### And there you have it! You have successfully searched for a class at UH using our app along with the associated professor's AI-summarized Rate My Professor's rating comments.

### Thank you for using our app! 
