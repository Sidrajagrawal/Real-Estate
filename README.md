# 🏡 Banke Bihari Group – Real Estate Platform

A full-stack web platform that allows users to **buy and sell real estate properties** across India. Built with **React.js** on the frontend and **Django + Django REST Framework** on the backend, with **JWT Authentication**, image uploads, and multi-step property submission flow.

---

## 📌 Features

### 🔑 Authentication
- JWT-based authentication using `Simple JWT`
- Register, login, logout, email verification
- Password reset and token-based secure flow

### 🏠 Sell Property
- Protected **multi-step property submission form**
- Only logged-in users can post property
- Upload property images and floor plans
- Includes seller contact info (phone, email)

### 🏘 Buy Property
- View property listings with image, location, price
- Click to view detailed information
- Contact seller via **phone** or **email**

### 🧑 User Roles
- Admin can manage listings in Django Admin Panel
- Regular users can only post and view their properties

---

## 🔧 Tech Stack

| Layer       | Technology                            |
|-------------|---------------------------------------|
| Frontend    | React.js, React Router DOM, Axios     |
| Backend     | Django, Django REST Framework         |
| Auth        | Simple JWT (Access + Refresh Tokens)  |
| File Upload | Django Media & ImageField             |
| Database    | MySql (can be upgraded to Mongo DB)   |


---

## 🚀 Setup Instructions

### Backend (Django)

```bash
# 1. Clone project & move into backend folder
cd backend

# 2. Create virtual environment
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Make migrations & run
python manage.py migrate
python manage.py runserver

```

### Frontend (React js)
```bash
#1. cd frontend

# 2. Install dependencies
npm install

# 3. Run development server
npm start
```

