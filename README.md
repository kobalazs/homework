# Homework: Hacker News V4.0

## Description

A redesign of Hacker News homepage using React & Axios.

### Assumptions

- List only new stories, showing author and title information.

- Use pagination for better performance.

- Add an in-memory cache (TTL = 60 sec) to reduce API load.

- Skip optimising for accessibility or internationalization.

## Installation guide

### Requirements

1. Node.js v20.11.0 or later
2. npm version 10.2.4 or later

### Download source code

```
git clone git@github.com:kobalazs/homework.git
cd homework
```

### Install & start client

```
npm i
npm start
```

Client is served at http://localhost:3000/

### Run tests & linter

```
npm run test
npm run lint
```

## Original specification

Hacker News is an excellent resource for front end engineers, but it looks quite ugly - have a look here: https://news.ycombinator.com/ .

Luckily, there is an Official Hacker News API (https://github.com/HackerNews/API) that we can use to create a better version. Using vue, react, or angular utilize the Hacker News API to create a web application that shows the latest stories. This project does not require you to implement a user profile page or comments just redesign the front page of hacker news.

What we’re looking for:
* Readable and DRY code
* A clean, easy to use UI
* Use of best practices in you framework (vue, react, or angular)
* We value test coverage

Aside from what is outlined above, you have free reign in any design decisions and implementation details. You are free to use any version of angular or react and any CSS preprocessors. Plain CSS is okay, too!

Send the code in a password protected zip or via dropbox to us and state any assumptions that you made.
