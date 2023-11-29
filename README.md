# Pretty Test Table

https://bakabokka.github.io/PrettyTestTable/

****
**React, Typescript, react-router-dom, axios, sass**

### What was the task?

* The table is filled with the data that is requested from the JSON file using the [API](https://development.kameleoon.net/oivanov/frontend-interview-task-api). You need to clone the project to your local machine and run it.
* When a user hovers over a table row it should be highlighted as shown in the mockup.
* Sites in the corresponding column must be displayed without the http or https protocols and www prefix.
* A user should be able to filter by item name. If the item exists we hide other
records and show only items that were found in the list. If no records are found there should be a message with the corresponding text and a reset button (see Figma).
* A user should be able to sort (ASC, DESC) by clicking on the titles of the columns:
  - name, type and site should be sorted in alphabetical order
* status should be sorted in:
  - ASC: Online, Paused, Stopped, Draft
  - DESC: Draft, Stopped, Paused, Online


****

### Additional tasks

* Using the react-router-dom library, implement routing between three pages: dashboard, results, and finalize. And don't forget to load the necessary data for each page.
* When a user clicks on the Results or Finalize button on dashboard page, you should redirect to URLs /results/[testId] and /finalize/[testId] accordingly, without reloading the browser window.
* It will be a plus if you:
  - will use TypeScript to complete the task
  - write tests
  - if a user can interact with the interface using the keyboard.

### How to try?
* Clone repo: `git clone` https://github.com/BakaBokka/PrettyTestTable.git
* Set dependencies: `npm i`
* Create production-build: `npm run build`
* Runs the app in the development mode on the local server: `npm start`
* Deploy production-build on GitHub Pages: `npm run deploy`
* And you will need server API from here [Link](https://development.kameleoon.net/oivanov/frontend-interview-task-api)

****

![Everything’s Gonna Be Alright](./src/images/eich.png)