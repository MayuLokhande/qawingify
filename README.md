Dream Journal – Playwright Automation Framework 
Automated functional testing of the Dream Journaling Website:

https://arjitnigam.github.io/myDreams/

This project validates core UI behavior, table data integrity, and recurring dream logic using Playwright with JavaScript following Page Object Model (POM) 

Setup and  Execution

Install Dependencies : npm init -y 
npm init playwright@latest
Install Playwright Browsers : npx playwright install


Project Structure
QAwingify
    tests/
      e2e/
       homepage.spec.js
       dreamsDiary.spec.js
│   page-objects/
        homePage.js
        dreamsDiary.js
package.json│
playwright.config.js
README.md

Test Coverage
Home Page 
Loading animation appears
Loading animation disappears (~3 seconds)
Main content becomes visible
"My Dreams" button is visible
Clicking "My Dreams" opens dreams-diary.html and dreams-total.html
in new tabs/windows.


Dreams Diary
Exactly 10 dream entries
Each row contains: Dream Name, Days Ago, Dream Type
Dream Type must be either: "Good" or "Bad"

Verified Statistics:
Metric                   Expected Value
Good Dreams                      6
Bad Dreams                       4
Total Dreams                     10
Recurring Dreams                 2


Test Execution Screenshots :
Core UI Functional Test
Loader visibility
Main content visibility

Table Validation
Exactly 10 rows
All columns populated
Dream type is either "Good" or "Bad"


Run Tests (Headless Mode)
npx playwright test

Run Tests (Headed Mode)
npx playwright test --headed

Reports
Playwright automatically generates an HTML report.
commad : npx playwright show-report