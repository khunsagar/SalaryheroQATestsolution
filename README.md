# SalaryheroQATestsolution
## About the Project
 This is test solution for salary hero QA Challenge using playwright 
### Top Feature 
- Easy to Configure.<br>
- Auto-waits for all the relevant checks to pass and only then performs the requested action.<br>
- Records videos for Test Cases.<br>
- Records the test script and every action on the target page is turned into generated script.<br>
- Generates trace file, which gives in-depth details of Test Case execution.<br>
- Execution of test case is faster when compared with other competitive framework in market.<br>
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.<br>
- It supports API testing (From Playwright version 1.16 onwards)<br>
- It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.<br>
- It has ability to produce and visually compare screenshots.<br>
- To slow down execution slowMo option is available.<br>

# Getting Started
## Clone This repo to your local  
``` https://github.com/khunsagar/SalaryheroQATestsolution.git ```
## Navigate to folder and install npm packages using <br>
 ``` npm install ```
## Installing playwright 
 Refrence : "https://playwright.dev/docs/intro"
 ```
 npm : npm init playwright@latest
 ```
 ```
 yarn : yarn create playwright
 ```
## Running Test 
 - User below command to run test 
### Scripts are already confgured inside pakage,json file 
 Running on CI Use  ``` nop run run_test_ci ``` <br>
 
 Running on Local   ``` npm run  run_test_local ``` <br>
 
 ![image](https://user-images.githubusercontent.com/51394096/227840834-45c8aac7-a780-41c6-bb29-3dcbbc66b4c5.png)

 
 ![image](https://user-images.githubusercontent.com/51394096/227840619-9f8ce13b-3a5e-4687-8296-20edd1292995.png)

## Reports 
### playwright have default htp reports that will be generated after test run <br>
### We cna configure eternal and internal reports patterns by changing config file 
Refrences : https://playwright.dev/docs/test-reporters#built-in-reporters

##Run this command after test run to view report <br>
``` npx playwright show-report ```
### Report will look like this

![image](https://user-images.githubusercontent.com/51394096/227841315-8fc1bf9e-e821-46a2-94b8-4d25b7cb59f8.png)

## Understanding of framework structure used 
I have used simple object pattern to design automation framework 
in page object pattern we seprate pages , locator and data and track them 
 - Fixtures  : All data  related to urls , product details and etc stored in this folders in json files
 - locator folders all CSS locators for web element are stored in this folder based on page 
 - e2e folder have all end to end test cases created 
 - pages folder have defination for all actions for pages .
 - utility folderconsist of  all common and shared  action we can use across frame work example login 
 - Playwright config can be done wuisng playwright.config file 
 - project config and can set upusinh pakage .json file  <br>
![image](https://user-images.githubusercontent.com/51394096/227844096-f8c94528-ff16-41e5-ae89-a7ff13c92911.png)


