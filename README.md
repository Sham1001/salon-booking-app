# Salon Booking App

A modern, responsive single-page website for a hair salon / grooming studio, built with React and Tailwind CSS. Includes a scroll-animated landing page, image gallery with lightbox, client testimonials, and a booking form that hands off directly to WhatsApp — no backend required.

## Live Demo

🔗 [https://salon-booking-app-lemon.vercel.app/](https://salon-booking-app-lemon.vercel.app/)

## Features

- **Hero & About sections** — introduces the studio with a black-and-gold premium aesthetic
- **Interactive gallery** — grid layout with a full-screen lightbox (click to open, arrow keys / on-screen arrows to navigate, `Esc` to close)
- **Testimonials** — client reviews with star ratings
- **Booking form → WhatsApp** — customers fill out a form (name, phone, service, preferred time, notes) which opens a pre-filled WhatsApp message to the salon, so no backend or database is needed to receive bookings
- **Scroll reveal animations** — sections animate in as the user scrolls, via a reusable `Reveal` component
- **Fully responsive** — mobile-first layout using Tailwind breakpoints

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) 

## Project Structure

```
src/
├── assets/            
├── component/
│   ├── Navbar.jsx      
│   ├── Footer.jsx     
│   └── Reveal.jsx      
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Testimonial.jsx
│   └── Contact.jsx
└── App.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Sham1001/salon-booking-app.git
cd salon-booking-app
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port Vite/CRA assigns).

### Build for production

```bash
npm run build
```

## Configuration

Before deploying, update the following placeholder values:

- **WhatsApp number** in `Contact.jsx` — replace `91XXXXXXXXXX` with the salon's real WhatsApp number (country code + number, digits only, no `+` or spaces)
- **Contact details** (phone, email, hours) in `Contact.jsx`
- **Gallery images** in `src/assets/` — swap in real salon photos
- **Copy/content** across `About.jsx`, `Testimonial.jsx`, and `Contact.jsx` — replace demo text with the actual salon's name, specialty, and details

## How Booking Works

Since this project has no backend, the contact form doesn't submit to a server. Instead, on submit it:

1. Collects the form data (name, phone, service, preferred time, notes)
2. Formats it into a readable, pre-filled WhatsApp message
3. Opens `https://wa.me/<number>?text=<message>` in a new tab

This opens WhatsApp (Web or the app, depending on device) with the message ready to send — the customer just taps send, and the booking lands directly in the salon's WhatsApp chat.

## License

This is a personal portfolio project, built to demonstrate front-end development skills. Feel free to explore the code for learning or reference purposes.

## Acknowledgements

Built as a portfolio/demo project to showcase a modern salon booking landing page using React and Tailwind CSS.