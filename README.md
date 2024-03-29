# issue tracker

A nodejs + ejs application to track issues/bugs for a project.

## Installation

To install issue-tracker, please follow these steps:
Fork this repository then
Clone this repository using the following command:

```
$ git clone (https://github.com/Vaibhav-Kumar1312/issue-tracker.git)
```

Install the required dependencies using the following command:

```
$ npm install
```

Start the application using the following command:

```
$ npm start
```

Open the application in your web browser by visiting the following URL:

```
$ http://localhost:8000
```

## Features

- Home Page -- Here you can see all of your existing projects in sidebar menu
- New Project -- By clicking the button of new project on sidebar you can create a new project
- Project Detail page -- This page shows the project detail and you can create issues about the project and also search and filter the Issues
- Create issue page -- Create an issue about the project and add labells and custom labels to the project

## Folder Structure

```
issue-tracker/
|── |assets/
│   |      ├── css/
│   │      |     ├── styles.css
│   |      ├── js/
│   |            ├── script.js
│   ├── config
|   |
├── routes/
│   ├── index.js
|   |
├── controllers/
|   |-- homeController
|   |
├── models/
│   ├── project.js
│   ├── issue.js
|   |
├── views/
├── package.json
├── README.md

```
