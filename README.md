# Project: University of Houston Web Scraper + AI-Powered Rate My Professor Reviews
Version: v1.0

Languages used: Python, TypeScript

Libraries/Frameworks used:
  - Selenium (web scraping)
  - Next.js (front-end)
  - Google Generative AI (NLP Model)
  - Axios: HTTP Requests

## Introduction

This application is recommended for all interested college students at University of Houston to find their classes' information and the associated professors' ratings in one go. 

Requirement: You need to have Python installed in your computer. For more information, please refer to the instructions in Python's website: https://www.python.org/ 

## Step 1: Clone this repository to your local computer

Use GitHub to clone the repository to your computer to use.
If necessary, please refer to this guide to learn how to clone repository in GitHub: 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Step 2: Create a virtual environment (optional)
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
python scraper.py
```
Or run this command for some versions of python:
```
python3 scraper.py
```

## Step 5: Run the interactive UI webpage (frontend)
Run these commands to start the Next.js application where you can start using the application:

1. Navigte to scraper-app folder (where all Next.js files are stored):
```
cd scraper-app
```
2. Once you are in /scraper-app directory, run Next.js application in developmental mode:
```
npm run dev
```
The app should be running now. Navigate to http://localhost:3000 to start using the app.

You should see the application like this:
/// PIC

There should be dropdown options for each field. Please select the option that fit your need. 

For MatchID, please put in the course number you need to search for. For example: **COSC 1336**
- Subject: ```COSC```
- MatchID: ```1336```
  
Examples of how to fill out the form:
1) /// PIC 2
/// Result

2) /// PIC 3
/// Result

3) /// PIC 4
/// RESULT
