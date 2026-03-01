# SLTB Season Ticket Management System  
## Advanced Git & DevOps Team Collaboration Assignment  

---

## 👥 Group Members

- **Seshan Sandeepa** – itbin-2312-0024 – DevOps Engineer / Release Manager / Frontend Developer  
- **Wathsala Kithulgala** – itbin-2312-0025 – Backend Developer  
- **Lishani Samarakoon** – itbin-2312-0005 – Frontend Developer (Application & Payment Module)  

---

## 📌 Project Overview

The SLTB Season Ticket Management System is a full-stack web application developed for the Sri Lanka Transport Board (SLTB).  

The purpose of this system is to allow passengers to apply for season tickets online instead of visiting physical counters.  

### Users can:

- Register and log in  
- Submit season ticket applications  
- Upload required documents  
- Complete a simulated payment process  
- Receive a demo QR-based ticket  

This project demonstrates:

- Team collaboration using Git  
- Feature branch workflow  
- Pull request review process  
- CI/CD automation  
- Cloud deployment  
- Docker containerization  

---

## 🚀 Live Deployment

### Frontend (Production – Vercel)

https://sltb-website-season-ticket-rey8y4cew-lishanis-projects.vercel.app  

The frontend is automatically deployed from the `main` branch using Vercel.

---

### Backend (Production – Railway)

https://sltb-website-season-ticket-production-156e.up.railway.app  

**Health Check Endpoint:**  
https://sltb-website-season-ticket-production-156e.up.railway.app/health  

---

## 🛠️ Technologies Used

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

### DevOps & Tools
- Git  
- GitHub  
- GitHub Actions  
- Docker  
- Docker Compose  
- Vercel  
- Railway  
- Postman  

---

## 🌿 Branch Strategy

We followed a structured Git workflow.

- `main` → Production-ready code  
- `feature/member1` → UI and layout  
- `feature/member2` → Authentication & application pages  
- `feature/member3` → Backend APIs & database  

All features were developed in separate branches and merged into `main` using pull requests after review and testing.

---

## 📂 Project Structure
├── client/ # React frontend
├── server/ # Node.js backend
├── Dockerfile # Frontend Dockerfile
├── server/Dockerfile # Backend Dockerfile
├── docker-compose.yml # Service orchestration
├── .dockerignore
├── .github/workflows/ # CI configuration
└── README.md


---

## 🐳 Docker Architecture

This project uses a multi-container architecture consisting of:

1. Backend container (Node.js + Express API)  
2. Frontend container (React production build served via Nginx)  

Docker Compose:

- Builds both services  
- Creates an internal Docker network  
- Manages service communication  
- Enables full application startup with a single command  

---

## 📄 Dockerfile & Compose References

### Backend Dockerfile
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/server/Dockerfile  

### Frontend Dockerfile
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/Dockerfile  

### Docker Compose Configuration
https://github.com/Lishani-Samarakoon/SLTB-website-Season-Ticket-/blob/main/docker-compose.yml  

The Docker implementation demonstrates:

- Lightweight Alpine base images  
- Multi-stage frontend build  
- Layer caching optimization  
- Production-only dependency installation  
- Externalized environment variables  
- Health check endpoint  
- Secure container execution  

---

## 🐳 Running With Docker (Recommended)

### Requirements

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

💻 Running Without Docker (Development Mode)
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

🔐 Environment Variables

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

⚙️ CI/CD Workflow

GitHub Actions automates:

Dependency installation

Frontend build validation

Backend validation

Merge protection

If checks pass:

Frontend auto-deploys to Vercel

Backend auto-deploys to Railway

This ensures stable production deployments.

🛡️ Security Considerations

Alpine base images reduce attack surface

.dockerignore excludes unnecessary files

Environment variables externalized

Only required ports exposed

Health check endpoint implemented

Separation of frontend & backend services

📊 Performance Optimization

Multi-stage frontend Docker build

Layer caching optimization

Reduced image size using Alpine

Production-only dependency installation

⚠️ Known Limitations

Payment process is simulated (demo only)

MongoDB must be configured separately

Backend and frontend deployed independently in production

📘 Learning Outcomes

This project improved our understanding of:

Git feature branch workflow

Pull request-based collaboration

CI/CD automation

Docker containerization

Multi-service orchestration

Cloud deployment strategies

Real-world DevOps practices

📄 License

Developed for academic purposes.
