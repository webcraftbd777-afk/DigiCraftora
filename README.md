# DigiCraftora - Digital Agency Appointment Booking System

Official, production-grade full-stack web application for **DigiCraftora** — Digital Engineering & Growth Consulting Agency founded and led by **Mustafizur Rahaman**.

---

## 🌟 Key Features

- **Strategic Appointment Booking**: Complete consultation workflow with date picker, open slot filtering, double-booking prevention, meeting type selection (Google Meet, WhatsApp Call, Direct Cellular Call), and unique booking references (`DC-XXXX`).
- **Client Booking Tracking & Self-Service**: Real-time appointment lookup by reference code or phone/email, with client-side reschedule and cancellation requests.
- **Agency Services & Rate Matrix**: High-ticket portfolio showcasing Website Design, E-Commerce, Custom Web Apps, SEO, Digital Marketing, AI Automation, and UI/UX Design with live pricing and timeline estimates.
- **Executive Admin Portal**: Protected console for the DigiCraftora team to view all bookings, update appointment statuses (`confirmed`, `rescheduled`, `cancelled`, `completed`), manage booking rules, and set emergency lockdowns.
- **Multilingual Localization**: Seamless language switching between English (`en`), Hindi (`hi`), and Bengali (`bn`).
- **Interactive Map & Social Integration**: Real office location on Google Maps, direct WhatsApp floating dialer (`+91 7427979100`), Instagram, Facebook, and YouTube social channels.
- **Full-Stack Architecture**: React 19 frontend seamlessly paired with an Express.js API backend and JSON file-based persistent data store (`data/appointments.json`, `data/rules.json`).

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js**: Version 18.0 or higher (Node 20+ recommended)
- **npm** (or `pnpm` / `yarn` / `bun`)

### 2. Installation
Extract the downloaded ZIP archive into a folder of your choice and open your terminal inside the project directory:

```bash
# Navigate to the project root
cd digicraftora-website

# Install all project dependencies
npm install
```

### 3. Environment Variables
Create your local `.env` configuration file from the provided `.env.example`:

```bash
cp .env.example .env
```

*(Note: The application runs with sensible defaults out of the box. You only need to add external keys if you plan to enable external cloud services).*

### 4. Start the Development Server

```bash
npm run dev
```

The Express API backend and Vite frontend will start together on:
👉 **`http://localhost:3000`**

Open `http://localhost:3000` in your browser.

---

## 🛠️ Production Build & Deployment

To generate an optimized production bundle:

```bash
# Compile and bundle the React client into the dist/ directory
npm run build

# Start the production Express server
npm start
```

---

## 📁 Project Structure

```plaintext
├── .env.example           # Example environment variables template
├── .gitignore             # Standard git exclusions (node_modules, build, .env)
├── index.html             # HTML entry point with metadata, OG tags, and Google Fonts
├── metadata.json          # Project configuration metadata
├── package.json           # Package dependencies, build scripts, and engine specs
├── README.md              # Project documentation and local setup guide
├── server.ts              # Express.js REST API server with slot engine and Vite middleware
├── tsconfig.json          # TypeScript compiler configuration
├── vite.config.ts         # Vite configuration with Tailwind CSS v4 & React plugin
├── data/                  # Persistent data directory
│   ├── appointments.json  # Seed and active appointment records
│   └── rules.json         # Business hours, booking slots, and calendar rules
├── public/                # Static public assets (images, logos, founder portraits)
│   ├── founder.jpg
│   ├── founder-hero.jpg
│   └── founder-avatar.jpg
└── src/                   # React 19 frontend source code
    ├── main.tsx           # React DOM root entry point
    ├── App.tsx            # Main application coordinator with tab routing
    ├── index.css          # Global styling with Tailwind CSS v4 imports
    ├── assets/            # High-resolution images and portrait assets
    ├── components/        # Reusable UI components
    │   ├── BookingConfirmationModal.tsx
    │   ├── DigiCraftoraBanner.tsx
    │   ├── DigiCraftoraLogo.tsx
    │   ├── FloatingWhatsApp.tsx
    │   ├── Footer.tsx
    │   ├── FounderHeroCard.tsx
    │   ├── GoogleMapWidget.tsx
    │   └── Header.tsx
    ├── data/              # Static frontend definitions
    │   ├── servicesData.ts # Service packages, pricing, and features
    │   └── translations.ts # English, Hindi, and Bengali localization strings
    ├── types/             # Shared TypeScript interface definitions
    │   └── index.ts
    └── views/             # Full page views
        ├── AdminPortalView.tsx     # Admin dashboard & management
        ├── BookAppointmentView.tsx # Interactive slot booking form
        ├── DeploymentGuideView.tsx # Supabase SQL schema & deployment blueprint
        ├── HomeView.tsx            # Hero, services overview, and testimonials
        ├── LoginView.tsx           # Authentication modal (Admin & Client)
        ├── ServicesRatesView.tsx   # Detailed rates and package matrix
        └── TrackBookingView.tsx    # Appointment lookup and management
```

---

## 🔐 Admin Console Credentials (Local Demo)

To access the Admin Portal (`/admin-portal` or via the top navigation):
- **Email**: `webcraftbd777@gmail.com` *(or `admin@digicraftora.com`)*
- **Password**: `digiadmin2025` *(or `admin`)*

---

## 📞 Agency Contact Information

- **Founder & CEO**: Mustafizur Rahaman
- **Official WhatsApp**: [+91 7427979100](https://wa.me/917427979100)
- **Direct Phone**: `+91 7427979100` / `7427979100`
- **Email**: `webcraftbd777@gmail.com`
- **Instagram**: [@digicraftora](https://www.instagram.com/digicraftora?psln=MXd3bWpwZDNoa3RsZQ==)
- **Facebook**: [DigiCraftora](https://www.facebook.com/share/1CSWzyyHp7/)
- **YouTube**: [USAMemeHub6](https://www.youtube.com/@USAMemeHub6)
- **Location**: [Find us on Google Maps](https://maps.app.goo.gl/Ru9A2eN3WLRL6eTd7)

---
*Built with React 19, TypeScript, Tailwind CSS, and Express.*
