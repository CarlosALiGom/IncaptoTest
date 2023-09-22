# Incapto Technical Test

Welcome to the Incapto tech repository! This API is built with TypeScript and Express to provide functionality for controlling a robot's movements on a 10x10 grid.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Enviroment variables](#enviroment-variables)
  - [Running the API](#running-the-api)
- [Tech Stack](#tech-stack)
- [Endpoints](#endpoints)
- [Test](#test)
- [SonarCloud](#sonarcloud)
- [Contact](#contact)

## Introduction

This repository contains a TypeScript-based API for controlling a robot on a 10x10 grid. The API allows you to send movement commands to the robot, and it will respond with the final position and direction after executing the commands.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.0.0)
- Package manager: npm (included with Node.js) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/CarlosALiGom/IncaptoTest.git
```

2. Navigate to the project directory or open it with VScode:

```bash
cd incapto-test
```

3. Install the dependencies:

```bash
npm install
```

### Enviroment variables

These environment variables are necessary for configuring the application. Replace 4000 with your desired port number if needed. The DEBUG variable sets the debugging output scope.

Before building and initializing the project, you should create a `.env` file with the following environment variables:

```plaintext
PORT=4000
DEBUG=incaptoTest-api:*
```

### Running the API

To start the API, run:

```bash
npm run build
npm run start
```

The API will be accessible at http://localhost:4000.

## Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)**: A superset of JavaScript that introduces static typing for enhanced code quality and developer productivity.

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime environment that allows you to run JavaScript on the server-side.

- **[Express](https://expressjs.com/)**: A fast, unopinionated, minimalist web framework for Node.js.

- **[Jest](https://jestjs.io/)**: A popular testing framework for JavaScript and TypeScript projects.

- **[Supertest](https://github.com/visionmedia/supertest)**: A library for testing HTTP assertions.

- **[ESLint](https://eslint.org/)**: A linter tool for identifying and fixing problems in your code.

- **[Prettier](https://prettier.io/)**: An opinionated code formatter that ensures consistent code style across the project.

- **[Husky](https://typicode.github.io/husky/#/)** and **[lint-staged](https://github.com/okonet/lint-staged)**: Tools for enforcing code quality and formatting standards before committing code.

- **[Dotenv](https://github.com/motdotla/dotenv)**: A zero-dependency module that loads environment variables from a .env file into process.env.

- **[Morgan](https://github.com/expressjs/morgan)**: A middleware for Express that provides HTTP request logging.

- **[Debug](https://github.com/visionmedia/debug)**: A utility for adding debug statements to your code.

## Endpoints

You can find the postman exported collection file in this project: [postman collection](incaptoTest.postman_collection.json)

### <u>Robot</u>

#### method:

- POST

#### url:

- http://localhost:4000/robot

#### request:

##### body:

- {
  "commands": "LMLM55M"
  }

#### response:

- 200
- {
  "output": "8|6|S"
  }

## Test

This application has been tested at 100% code lines. The unit testing has been done using Jest, and the integration test for the 'POST' '/robot' endpoint has been conducted with Supertest.

To run the test:

```bash
npm run test
```

To run the coverage:

```bash
npm run test:coverage
```

![test coverage](https://media.discordapp.net/attachments/1116096712147222662/1154845218101792779/image.png?width=700&height=562)

## SonarCloud

SonarCloud is a cloud-based static code analysis tool that helps identify code quality, security vulnerabilities, and bugs in your projects. It provides insights and actionable feedback to improve code maintainability, reliability, and security.

Heres my sonarCloud project link:

-https://sonarcloud.io/summary/new_code?id=CarlosALiGom_IncaptoTest

and a pic of the state at the end of the project:

![SonarCloud status](https://media.discordapp.net/attachments/1116096712147222662/1154850109792731246/image.png?width=1125&height=562)

## Contact

  <a href="https://www.linkedin.com/in/carlos-aliaga-g%C3%B3mez/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  
  Or carlosaligom@gmail.com
