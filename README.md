# 📄 Resume Tailor – AI-Powered Web App

An intelligent web application that helps users automatically tailor their resumes to specific job descriptions using AI. Designed for job seekers, built for developers, and optimized for speed, clarity, and automation.

---

## 🚀 Live Demo  
👉 [https://resume-tailor.vercel.app](https://resume-tailor.vercel.app)

---

## ✨ Key Features

✅ **Email Authentication with Magic Link**  
Secure user login powered by [Supabase Auth](https://supabase.com/docs/guides/auth). No passwords required — just one-click sign-in with your email.

🧠 **AI Resume Tailoring with OpenAI**  
Users paste their resume + job description → AI matches and tailors the resume for the role using GPT-4 via [n8n](https://n8n.io/).

📦 **Database Storage (MongoDB)**  
Tailored resumes are stored per user securely using MongoDB, enabling users to view, re-edit, and reuse older tailored versions.

⚙️ **CI/CD & Hosting on Vercel**  
Auto-deploys on push via GitHub using Vercel’s CI/CD pipeline. Ultra-fast static + dynamic rendering.

🎨 **Modern, Responsive UI**  
Built with [Next.js 14](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) for clean UI and mobile responsiveness.

---

## 🖥️ Tech Stack

| Layer        | Technology                        |
|--------------|------------------------------------|
| Frontend     | Next.js, Tailwind CSS              |
| Auth         | Supabase Magic Link                |
| AI Logic     | n8n + OpenAI GPT-4                 |
| Backend DB   | MongoDB                            |
| Deployment   | Vercel + GitHub CI/CD              |
| Version Ctrl | Git + GitHub                       |

---

## 🧪 Project Structure

```bash
grand-project/
│
├── app/         → Frontend UI (Next.js)
├── api/         → Backend setup (Supabase + MongoDB)
├── ai/          → n8n AI workflow (OpenAI prompt)
├── docs/        → PRD, wireframes, docs
├── README.md    → This file

### 📥 Installation & Running Locally
### 1. Clone the repo
git clone https://github.com/adnanbhutta/resume-tailor.git

### 2. Move into project
cd resume-tailor/grand-project

### 3. Install dependencies
npm install

### 4. Add environment variables
touch .env.local
### 🛠️ Example .env.local
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-anon-key
MONGO_URI=your-mongodb-uri
### 5. Run the app
npm run dev
Open http://localhost:3000 to view it in your browser.
### 🔄 How It Works
User logs in with email (magic link)

User pastes their resume and a job description

App sends both to n8n → AI tailors the resume

Response is displayed + saved to MongoDB

User can view/download it from dashboard
### 🧠 n8n AI Workflow (JSON file included)
The n8n flow takes this structure:
Prompt: "Tailor this resume to the following job post.

Resume:
{{ $json.resume }}

Job Description:
{{ $json.jobDesc }}"
### 💡 Future Improvements
PDF export of tailored resumes

Autosave & draft mode

Job title keyword suggestions

Admin dashboard for analytics
### 🙌 Credits
Adnan Ali
adnanbhutta51274@gmail.com
### 📬 Contact
Made with 💙 by Adnan Ali
adnanbhutta51274@gmail.com