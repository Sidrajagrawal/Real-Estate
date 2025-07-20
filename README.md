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

### Additional Setup
```bash
# Django Secret Key: KEEP THIS SECRET SECURE!
# Generate a new, strong key for your project. You can do this in a Python shell:
# from django.core.management.utils import get_random_secret_key
# print(get_random_secret_key())
SECRET_KEY=your_unique_django_secret_key

# Debug mode (Set to True for development, False for production)
DEBUG=True

# Gmail SMTP Configuration for sending emails (e.g., user verification, password reset)
# IMPORTANT: You MUST use an App Password for this, not your regular Gmail password.
# See instructions below on how to generate an App Password.
EMAIL_HOST_USER=your_gmail_address@example.com
EMAIL_HOST_PASSWORD=your_gmail_app_password

# Cloudinary Configuration for image and file storage
# Get these credentials from your Cloudinary Dashboard: https://cloudinary.com/console
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Superuser credentials (for initial setup convenience in development only)
# ⚠️ For production, REMOVE or COMMENT OUT these lines after initial setup for security!
# Always create production superusers manually using `python manage.py createsuperuser`.
Super_User_email=your_desired_superuser_email@example.com
Super_User_password=your_desired_superuser_password_for_dev
```

### Backend (Django)

```bash
# 1. Clone project & navigate to the backend folder
cd backend

# 2. Install uv if you don't have it
pip install uv

# 3. Create virtual environment and install dependencies using uv
uv sync

#4 Navigate to backend where manage.py file present
cd backend

# 5. Make migrations & run the Django development server
uv run python manage.py makemigrations # Only run if you have new models or changes
uv run python manage.py migrate
uv run python manage.py runserver

```

### Frontend (React js)
```bash
#1. cd frontend

# 2. Install dependencies
npm install

# 3. Run development server
npm start
```

How to Get Your API Keys and App Passwords
🏞️ Cloudinary Setup
Visit Cloudinary: Go to the official Cloudinary website: https://cloudinary.com/

Sign Up / Log In: Create a free account or log in if you already have one.

Access Dashboard: Once logged in, navigate to your Dashboard.

Find API Credentials: On your dashboard, you'll typically see your Cloud Name, API Key, and API Secret prominently displayed. Copy these values and paste them into your .env file.

📧 Gmail App Password for Email Verification
For your Django application to send emails via Gmail, you need to use an App Password instead of your regular Gmail account password, especially if you have 2-Step Verification enabled (which is highly recommended for security).

Enable 2-Step Verification (if not already enabled):

Go to your Google Account: https://myaccount.google.com/

In the left navigation panel, click Security.

Under "Signing in to Google," find "2-Step Verification" and turn it on by following the on-screen prompts. You'll typically verify a phone number.

Generate an App Password:

After enabling 2-Step Verification, go back to the Security page in your Google Account.

Under "How you sign in to Google," click on App passwords. (If you don't see this, ensure 2-Step Verification is fully set up, or try searching for "App passwords" in the Google Account search bar).

You might be asked to re-enter your Google password.

In the "Select app" dropdown, choose "Mail".

In the "Select device" dropdown, choose "Other (Custom name)" and type a name like "Django Backend" or "Real Estate App".

Click Generate.

A 16-character app password will be displayed (e.g., abcd efgh ijkl mnop). Copy this password immediately, as it will not be shown again.

Paste this generated password into the EMAIL_HOST_PASSWORD variable in your .env file.



