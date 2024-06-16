# FCB Web

Angular application developed to display the roster and statistics of FC Barcelona's first team.


### 🔹Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Development Tools](#development-tools)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)


### 🔹Installation

Steps to install the project:

```sh
git clone https://github.com/Elisenda-LV/fcbweb
cd fcbweb
npm install
```


### 🔹Usage

How to start and use the project:

```sh
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser to see the application.


### 🔹Project Structure

Explanation of the folder and file structure:

```
src/
  app/
    core/
    models/
    modules/
    services/
    ...
  assets/
    i18n/
  ...
```

### 🔹Best Practices

1. **Clean Code**: Keep the code clear and understandable.
2. **Reusable Components**: Break your application into small, reusable components.
3. **Use of Services**: Encapsulate business logic and data access in services.
4. **Testing**: Write tests for your code, especially for critical components and services.
 

### 🔹Development Tools

#### 🧩Testing
We've used Karma and Jasmine for testing. Write tests for your code.  To run the tests, use:

'''sh
ng test

#### 🧩Prettier

To maintain consistent formatting throughout the code, we've added Prettier. Prettier will automatically format the code.


#### 🧩ESLint

To ensure we follow best practices and maintain clean code, we've added ESLint. ESLint analyzes the code and highlights potential errors and bad practices.

To run ESLint, use:

```sh
npm run lint
```

### 🔹Deployment

The project is deployed on Vercel. You can access the live versions here:

Develop Branch: https://dev-fcbweb.vercel.app/players
Master Branch: https://prod-fcbweb.vercel.app/

