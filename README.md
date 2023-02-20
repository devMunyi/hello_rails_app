<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [Hello React Rails] <a name="about-project"></a>
![hello-gif](https://thumbs.gfycat.com/PepperyGrizzledClownanemonefish-max-1mb.gif)

**[Hello React Rails]** is a project is meant for setting up a "Hello world" Rails project as one app with Webpack and React. It is meant to be a starting point for a Rails project with React.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li>Rails</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Random Greeting message]**
- **[Single Fullstack web app]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link] :smiley: not yet available

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>


### Prerequisites

In order to run this project you need followed installed on your computer:
- Ruby v3+, 
- Rails v7+ 
- PostgreSQL
- An IDE e.g [Visual studio code](https://code.visualstudio.com/).
- [A terminal](https://code.visualstudio.com/docs/terminal/basics).

### Setup

Clone this repository to your desired folder or download the Zip folder:

```
git clone https://github.com/devMunyi/hello_rails_app
```

- Navigate to the location of the folder in your machine:

**`you@your-Pc-name:~$ cd hello_rails_app`**

### Installations

Install dependencies to this project with:

```
  bundle install
```
```
  npm install
```

Setup Database (Mandatory)

- Create `.env` file and add the following three lines(be sure to replace with your details):

```
POSTGRES_HOST='localhost'
POSTGRES_USERNAME='your_postgress_username'
POSTGRES_PASSWORD='your_postgress_password'

- To create database run:

```
rails db:create
```

If you have made a migration then run this command

```
rails db:migrate
```
```
rails db:seed
```
### Usage

To run the project, execute the following command:

```sh
  ./bin/dev  # for building tailwind css, and webpack, and rails server
``` 
Or
```sh
  rails server or rails s  # after build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Samuel Munyi**

- GitHub: [@devMunyi](https://github.com/devMunyi)
- LinkedIn: [Samuel Munyi](https://www.linkedin.com/in/samuel-munyi)
- Twitter: [@munyi_sam](https://twitter.com/munyi_sam)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Add Loading Icon awaiting api call to send response]**
- [ ] **[Add more features on UI including styling]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank:
- [Microverse](https://www.microverse.org/)
- Code Reviewers

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
