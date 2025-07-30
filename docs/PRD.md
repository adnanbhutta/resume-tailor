# Resume Tailor – PRD

## Overview
A web app that helps users tailor their resume to a job description using AI. Users log in via email (magic link), input their resume and a job post, and receive a customized version of their resume matching the job.

## Features
- Email-based login (via Supabase Magic Link)
- Resume + job post input form
- Tailored resume output using AI (via n8n + OpenAI)
- MongoDB stores each tailored resume per user
- Dashboard to view/edit/download resumes

## Wireframes (Textual)
### 1. Login Page
- Email input → "Send Magic Link" button

### 2. Dashboard
- Button: "New Tailored Resume"
- List of previous resumes

### 3. Tailoring Form
- Textarea: Paste Resume
- Textarea: Paste Job Description
- Button: Generate Tailored Resume

### 4. Output Page
- View tailored resume
- Button: Download as PDF
- Button: Save to dashboard
