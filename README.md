# 🎓 LMS Platform

A full-stack **Learning Management System (LMS)** built with **Next.js**, **Sanity CMS**, **Clerk authentication**, and **Stripe** for seamless course delivery, content management, user authentication, and monetization.

## 🛠️ Core Technologies

| Technology | Description |
|------------|-------------|
| **Next.js** | React framework for fast, SEO-optimized web apps |
| **Sanity CMS** | Headless CMS for managing dynamic course content |
| **Clerk** | Authentication and user management |
| **Stripe** | Payment gateway for secure and flexible transactions |

---

## ✨ Features

- 🚀 Modern, responsive LMS interface
- 🔐 User Authentication & Authorization via Clerk
- 📚 Course & Module Management using Sanity CMS
- 💳 Secure Payments and Subscriptions with Stripe
- 🧑‍🎓 Student Dashboard & Progress Tracking
- 🎥 Video Lessons, Quizzes, and Assignments
- 📈 Admin dashboard for managing users, content, and orders

---

### Environment Variables

Create a `.env.local` file with:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
# For Sanity Studio to read
# This is NEEDED for sanity to see the required variables in the studio deployment
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
# Read Token
SANITY_API_TOKEN=
# Full Access Admin Token
SANITY_API_ADMIN_TOKEN=

# Next.js
NEXT_PUBLIC_BASE_URL= http://localhost:3000

# Stripe
# https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
# Set this environment variable to support webhooks — https://stripe.com/docs/webhooks#verify-events
STRIPE_WEBHOOK_SECRET=
```

---

### Installation

```bash
# Clone the repository
git clone https://github.com/Rabbitooth/LMS

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### Setting up Sanity CMS

1. Create a Sanity account
2. Create a new project
3. Install the Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```
4. Initialize Sanity in your project:
   ```bash
   sanity init
   ```
5. Deploy Sanity Studio:
   ```bash
   sanity deploy
   ```

### Setting up Clerk

1. Create a Clerk application
2. Configure authentication providers
3. Set up redirect URLs
4. Add environment variables

### Setting up Stripe

1. Create a Stripe account
2. Set up webhook endpoints
3. Configure payment settings
4. Set up webhook forwarding for local development:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe-checkout/webhook
   ```

---

### Key Components

- Course Management System

  - Content creation and organization
  - Module and lesson structuring
  - Rich text editing
  - Media integration

- Progress Tracking

  - Lesson completion
  - Course progress calculation
  - Module progress visualization

- Payment Processing

  - Secure checkout
  - Course enrollment
  - Stripe integration

- User Authentication
  - Clerk authentication
  - Protected routes
  - User roles

---

## Usage

### Creating a Course

1. Access Sanity Studio
2. Create course structure with modules and lessons
3. Add content and media
4. Publish course

### Student Experience

1. Browse available courses
2. Purchase and enroll in courses
3. Access course content
4. Track progress through modules
5. Mark lessons as complete
