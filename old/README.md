# Guide Notes

## Link to the project

https://splitez.vanessabarsotti.com/

## Description

This application is being developed to help splitting common expenses of groups of friends on events and calculate each participant's share.

### Sprint #01

- This first sprint includes the initial setup, structure of compontents, and design.
- The goal for this sprint is to be able to include groups, expenses, and get each individual share.
- Next sprint (sprint #2) goals:
  - Fix sprint #1 bugs
  - Develop local storage system
  - Delete groups or expenses (delete button)
  - Improve Results display

## If cloning the project

- git clone https://github.com/vbarsott/splitEZ.git
- npm install
- npm run dev

## If creating from scratch

- Run: `npx create-react-app splitez`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Start: `npm start`

## Install modules:

### Router

- Router: `npm i react-router-dom`

### Styling

- Sass: `npm i sass --save-dev`
- Import inside App.js: `import './styles/css/styles.css';`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Run sass: `npm run sass`
- Create directories inside src folder:
  - styles
    - css
    - scss => styles.scss file
- Bootstrap: `npm i bootstrap`
- React Bootstrap: `npm i react-bootstrap`
- React icons: `npm i react-icons`

## Setup to run all together

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`
