# SLTB Season Ticket Web Application 
## Advanced Git & DevOps Team Collaboration Assignment  
---

## Group Members
- **Seshan Sandeepa** – itbin-2312-0024 – DevOps Engineer / Release Manager / Frontend Developer  
- **Wathsala Kithulgala** – itbin-2312-0025 – Backend Developer  
- **Lishani Samarakoon** – itbin-2312-0005 – Frontend Developer (Application & Payment Module)  

##  Project Overview

The SLTB Season Ticket Management System is a full-stack web application developed for the Sri Lanka Transport Board (SLTB).  

The main goal of this system is to allow passengers to apply for season tickets online instead of going to physical counters. By using this system, users can register, log in, submit their application, upload necessary documents, complete a simulated payment process, and receive a generated ticket.
The purpose of this system is to allow passengers to apply for season tickets online instead of visiting physical counters.  

This project was developed as part of the Advanced Git & DevOps Team Collaboration Assignment. The objective of the assignment was not only to build a functional web application, but also to demonstrate proper teamwork using Git, feature branches, pull requests, CI pipelines, and cloud deployment.
### Users can:

## Live Deployment 
- Register and log in  
- Submit season ticket applications  
- Upload required documents  
- Complete a simulated payment process  
- Receive a demo QR-based ticket  

The application is deployed on Vercel and connected to the main branch.
This project demonstrates:

Live URL:
https://websiteseasonticket.vercel.app/
- Team collaboration using Git  
- Feature branch workflow  
- Pull request review process  
- CI/CD automation  
- Cloud deployment  
- Docker containerization  


## Main Features
 Live Deployment

### User Features
### Frontend (Production – Vercel)

* User registration and login
* Online season ticket application form
* Image upload for required documents
* Simulated payment process
* QR-based ticket generation (demo)
* View submitted ticket details
https://websiteseasonticket.vercel.app/ 

### Admin Features
The frontend is automatically deployed from the `main` branch using Vercel.

* View all submitted applications
* Approve or reject applications
* Check payment status
* Manage application records
---

The system is responsive and works on both desktop and mobile devices.
### Backend (Production – Railway)

## Technologies Used
https://sltb-website-season-ticket-production-156e.up.railway.app  

Frontend:
**Health Check Endpoint:**  
https://sltb-website-season-ticket-production-156e.up.railway.app/health  

* React.js
* Vite
* HTML5
* CSS3
* JavaScript
---

Backend:
##  Technologies Used

### Frontend
- React.js  
- Vite  
- HTML5  
- CSS3  
- JavaScript  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Multer  

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (for handling image uploads)
### DevOps & Tools
- Git  
- GitHub  
- GitHub Actions  
- Docker  
- Docker Compose  
- Vercel  
- Railway  
- Postman  

DevOps and Tools:
---

* Git
* GitHub
* GitHub Actions
* Vercel (for deployment)
* Postman (for API testing)
##  Branch Strategy

## Branch Strategy
We followed a structured Git workflow.

To manage collaboration properly, we used a structured branching strategy.
- `main` → Production-ready code  
- `feature/member1` → UI and layout  
- `feature/member2` → Authentication & application pages  
- `feature/member3` → Backend APIs & database  

The **main** branch contains production-ready code.
All features were developed in separate branches and merged into `main` using pull requests after review and testing.

Each member worked on a separate feature branch:
---

* feature/member1 – UI design and layout
* feature/member2 – Authentication and application-related pages
* feature/member3 – Backend APIs and database integration
##  Project Structure

├── client/ # React frontend

├── server/ # Node.js backend

├── Dockerfile # Frontend Dockerfile

├── server/Dockerfile # Backend Dockerfile

├── docker-compose.yml # Service orchestration

├── .dockerignore

├── .github/workflows/ # CI configuration

└── README.md

All development was done in feature branches. After completing and testing features, changes were merged into the main branch using pull requests.

---

## CI/CD Implementation
##  Docker Architecture

GitHub Actions was configured to automate the build and validation process.
This project uses a multi-container architecture consisting of:

Whenever code is pushed to the main branch:
1. Backend container (Node.js + Express API)  
2. Frontend container (React production build served via Nginx)  

* Project dependencies are installed
* The frontend build process runs
* Backend validation is checked
* If everything passes, deployment is triggered
Docker Compose:

This setup helped us detect errors early and ensure that only working code is deployed.
- Builds both services  
- Creates an internal Docker network  
- Manages service communication  
- Enables full application startup with a single command  

The project is connected to Vercel for automatic production deployment.
---

##  Dockerfile & Compose References

## Project Structure
### Backend Dockerfile
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/server/Dockerfile  

The project is divided into two main parts:
### Frontend Dockerfile
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/Dockerfile  

* The **client** folder contains the React frontend application.
* The **server** folder contains the Node.js and Express backend.
* The **.github/workflows** folder contains the CI/CD configuration files.
### Docker Compose Configuration
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/docker-compose.yml  

This structure keeps the frontend and backend clearly separated and easier to maintain.
The Docker implementation demonstrates:

## How to Run the Project Locally
- Lightweight Alpine base images  
- Multi-stage frontend build  
- Layer caching optimization  
- Production-only dependency installation  
- Externalized environment variables  
- Health check endpoint  
- Secure container execution  

---

##  Running With Docker (Recommended)

### Requirements

* Node.js version 18 or higher
* MongoDB (local installation or MongoDB Atlas)
* Git
- Docker Desktop installed  
- Docker Desktop running  

---

### Build and Start Containers

```bash
docker compose up --build
This command will:

Build backend container

Build frontend container

Create Docker network

Start both services

Application Ports (Local Docker Mode)

Frontend:
http://localhost:8080

Backend:
http://localhost:5000

Health Check:
http://localhost:5000/health

Stop Containers
docker compose down

 Running Without Docker (Development Mode)
Requirements

Node.js v18+

MongoDB

Git

Clone Repository

git clone https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-.git
cd SLTB-website-Season-Ticket-

Run Backend
cd server
npm install
npm start

Backend runs on:
http://localhost:5000

Run Frontend

cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

 Environment Variables

The backend uses environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
NODE_ENV=production

Environment variables should be configured via:

docker-compose.yml

.env file

Railway environment settings

Sensitive data is never hardcoded.

 CI/CD Workflow

GitHub Actions automates:

Dependency installation

Frontend build validation

Backend validation

Merge protection

If checks pass:

Frontend auto-deploys to Vercel

Backend auto-deploys to Railway

This ensures stable production deployments.

Security Considerations

Alpine base images reduce attack surface

.dockerignore excludes unnecessary files

Environment variables externalized

Only required ports exposed

### Steps
Health check endpoint implemented

1. Clone the repository
Separation of frontend & backend services

   git clone [https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-.git](https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-.git)
Performance Optimization

2. Navigate into the project folder
Multi-stage frontend Docker build

   cd SLTB-website-Season-Ticket-
Layer caching optimization

3. Install and run the frontend
Reduced image size using Alpine

   cd client
   npm install
   npm run dev
Production-only dependency installation

4. Open a new terminal and run the backend
 Known Limitations

   cd server
   npm install
   npm start
Payment process is simulated (demo only)

Frontend will run on:
[http://localhost:5173](http://localhost:5173/)
MongoDB must be configured separately

Backend will run on:
[http://localhost:5000](http://localhost:5000)
Backend and frontend deployed independently in production

## Challenges Faced
 Learning Outcomes

During development, we faced several real-world challenges:
This project improved our understanding of:

* Merge conflicts when multiple members edited similar files
* CI workflow errors due to incorrect configurations
* MongoDB connection issues
* Problems connecting frontend payment UI with backend APIs
* Deployment failures that required debugging
Git feature branch workflow

By solving these issues, we gained practical experience in team collaboration and DevOps practices.
Pull request-based collaboration

## Learning Outcomes
CI/CD automation

Through this project, we improved our understanding of:
Docker containerization

* Working as a team using Git and GitHub
* Managing feature branches and pull requests
* Handling and resolving merge conflicts
* Setting up and fixing CI/CD workflows
* Deploying a full-stack application to the cloud
* Organizing frontend and backend architecture properly
Multi-service orchestration

Overall, this assignment helped us understand how real-world development teams collaborate and manage code using DevOps practices.
Cloud deployment strategies

## Final Status
Real-world DevOps practices

The CI pipeline is running successfully.
The application is deployed and accessible online.
The main branch contains stable production-ready code.
The project demonstrates proper Git workflow, CI/CD integration, and cloud deployment.
 License

Developed for academic purposes.
