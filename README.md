# SLTB Season Ticket Web Application

Advanced Git & DevOps Team Collaboration Assignment


## Group Members

Seshan Sandeepa – itbin-2312-0024 – DevOps Engineer / Release Manager / Frontend Developer
Wathsala Kithulgala – itbin-2312-0025 – Backend Developer
Lishani Samarakoon – itbin-2312-0005 – Frontend Developer (Application & Payment Module)

## Project Overview

The SLTB Season Ticket Management System is a full-stack web application created for the Sri Lanka Transport Board (SLTB).

The main goal of this system is to allow passengers to apply for season tickets online instead of going to physical counters. By using this system, users can register, log in, submit their application, upload necessary documents, complete a simulated payment process, and receive a generated ticket.

This project was developed as part of the Advanced Git & DevOps Team Collaboration Assignment. The objective of the assignment was not only to build a functional web application, but also to demonstrate proper teamwork using Git, feature branches, pull requests, CI pipelines, and cloud deployment.

## Live Deployment 

The application is deployed on Vercel and connected to the main branch.

Live URL:
[https://sltb-website-season-ticket-rey8y4cew-lishanis-projects.vercel.app](https://sltb-website-season-ticket-rey8y4cew-lishanis-projects.vercel.app)

Whenever changes are pushed to the main branch and pass the CI checks, the updated version is automatically deployed.

## Main Features

### User Features

* User registration and login
* Online season ticket application form
* Image upload for required documents
* Simulated payment process
* QR-based ticket generation (demo)
* View submitted ticket details

### Admin Features

* View all submitted applications
* Approve or reject applications
* Check payment status
* Manage application records

The system is responsive and works on both desktop and mobile devices.

## Technologies Used

Frontend:

* React.js
* Vite
* HTML5
* CSS3
* JavaScript

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (for handling image uploads)

DevOps and Tools:

* Git
* GitHub
* GitHub Actions
* Vercel (for deployment)
* Postman (for API testing)

## Branch Strategy

To manage collaboration properly, we used a structured branching strategy.

The **main** branch contains production-ready code.

Each member worked on a separate feature branch:

* feature/member1 – UI design and layout
* feature/member2 – Authentication and application-related pages
* feature/member3 – Backend APIs and database integration

All development was done in feature branches. After completing and testing features, changes were merged into the main branch using pull requests.


## CI/CD Implementation

GitHub Actions was configured to automate the build and validation process.

Whenever code is pushed to the main branch:

* Project dependencies are installed
* The frontend build process runs
* Backend validation is checked
* If everything passes, deployment is triggered

This setup helped us detect errors early and ensure that only working code is deployed.

The project is connected to Vercel for automatic production deployment.


## Project Structure

The project is divided into two main parts:

* The **client** folder contains the React frontend application.
* The **server** folder contains the Node.js and Express backend.
* The **.github/workflows** folder contains the CI/CD configuration files.

This structure keeps the frontend and backend clearly separated and easier to maintain.

## How to Run the Project Locally

### Requirements

* Node.js version 18 or higher
* MongoDB (local installation or MongoDB Atlas)
* Git

### Steps

1. Clone the repository

   git clone [https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-.git](https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-.git)

2. Navigate into the project folder

   cd SLTB-website-Season-Ticket-

3. Install and run the frontend

   cd client
   npm install
   npm run dev

4. Open a new terminal and run the backend

   cd server
   npm install
   npm start

Frontend will run on:
[http://localhost:5173](http://localhost:5173)

Backend will run on:
[http://localhost:5000](http://localhost:5000)

## Challenges Faced

During development, we faced several real-world challenges:

* Merge conflicts when multiple members edited similar files
* CI workflow errors due to incorrect configurations
* MongoDB connection issues
* Problems connecting frontend payment UI with backend APIs
* Deployment failures that required debugging

By solving these issues, we gained practical experience in team collaboration and DevOps practices.

## Learning Outcomes

Through this project, we improved our understanding of:

* Working as a team using Git and GitHub
* Managing feature branches and pull requests
* Handling and resolving merge conflicts
* Setting up and fixing CI/CD workflows
* Deploying a full-stack application to the cloud
* Organizing frontend and backend architecture properly

Overall, this assignment helped us understand how real-world development teams collaborate and manage code using DevOps practices.

## Final Status

The CI pipeline is running successfully.
The application is deployed and accessible online.
The main branch contains stable production-ready code.
The project demonstrates proper Git workflow, CI/CD integration, and cloud deployment.

