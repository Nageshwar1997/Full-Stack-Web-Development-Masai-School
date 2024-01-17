# js-masai-country-finder

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
✅ able to submit the app - 1 (default)
✅ basic drop downs exists  - 1 mark
✅ fetchCountries should fetch the results - 2 marks
✅ should display counrty cards on load - 1
✅ should sort population in descending order - 1 mark
✅ should sort population in ascending order - 1 mark
✅ filter by region should work - 1 mark
✅ sort and filter should work together (asc) - 1 mark
✅ sort and filter should work together (desc) - 1 mark

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases.

## Description

### `Instructions`

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)

# Problem Statement

- Build a Country finder app, where a user can find all countries and its info.

- Use https://restcountries.com/v3.1/all API to fetch all countries list.

- Your app will have only one page where you need to display all countries in form of cards with following information

  - Country name
  - Image of flag
  - Population
  - Region
  - Capital

- Your card should look like

  ![Screenshot 2022-09-17 at 4.03.01 PM.png](https://i.imgur.com/hxzwIG4.png)

- Your app should also have sort and filtering functionality

  - Sort by Population
  - Filter by Region
    - All (by default all the countries from the API should be displayed)
    - Africa
    - America
    - Asia
    - Europe
    - Oceania

- Note that sort and filter should work simultaneously.
  - Should be able to sort the filtered results

## Submission

- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Make sure you follow all instructions carefully.
- Submit before deadline.

## Boilerplate

- Given the following functions to complete

  - fetchCountries - make an api call and return the countries data
  - renderData - accepts data of the countries and display the cards
    - use `textContent` to append data to the DOM (dont use innerHtml or innerText)
  - handleSortAndFilter - handle sort by population and filter by region (should work together)
    - sortLogic - logic to sort the countries by ascending and descending order
    - filterByLogic - logic to filter the countries by region

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename index.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
