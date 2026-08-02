# 🌍 Wanderlust

Wanderlust is a full-stack, premium web application that allows users to discover, list, and review extraordinary homes and vacation stays across the globe. Built with a stunning modern **Dark Glassmorphism** aesthetic, the platform provides a seamless and luxurious user experience.

## ✨ Features

- **Premium UI/UX:** A bespoke dark-theme interface featuring frosted glass cards, dynamic background videos, and elegant typography (Instrument Serif & Barlow).
- **User Authentication:** Secure signup, login, and logout functionality powered by Passport.js.
- **Property Listings:** Users can browse all global stays, or create, edit, and delete their own premium listings.
- **Interactive Reviews:** A built-in 5-star rating and comment system allows users to leave feedback on destinations they've visited.
- **Image Handling:** Supports beautiful, high-resolution imagery for property displays.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop browsing.

## 🛠️ Tech Stack

- **Frontend:** EJS (Embedded JavaScript), Vanilla CSS3 (Custom Glassmorphism Design System), Bootstrap 5, FontAwesome
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Passport.js (Local Strategy)
- **Routing:** Express Router for modular codebase (Listings, Users, Reviews)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. **Clone the repository (or download the project folder):**
   ```bash
   git clone https://github.com/vyshnavi2409/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your secret keys:
   ```env
   # Add your MongoDB connection string, Cloudinary credentials, and secret keys here
   # Example:
   # DB_URL=mongodb://127.0.0.1:27017/wanderlust
   # SECRET=your_super_secret_string
   ```

4. **Start the Application:**
   ```bash
   node app.js
   # or run with nodemon for live-reloading:
   # nodemon app.js
   ```

5. **View the App:**
   Open your browser and navigate to `http://localhost:8080`.

## 📂 Project Structure

```text
├── public/          # Static assets (CSS, Javascript, Images)
├── routes/          # Express route definitions (listings.js, user.js, review.js)
├── models/          # MongoDB schemas (Listing, User, Review)
├── views/           # EJS templates for the frontend
│   ├── includes/    # Reusable partials (Navbar, Footer, Flash alerts)
│   ├── layouts/     # Master layouts (boilerplate.ejs)
│   ├── listings/    # Pages related to listings (index, show, new, edit)
│   └── users/       # Pages related to authentication (login, signup, profile)
├── app.js           # Main application entry point
├── package.json     # Node.js dependencies and scripts
└── .env             # Environment variables (do not commit this file)
```

## 🎨 Design Philosophy
The UI was meticulously crafted to avoid the "generic web app" feel. By utilizing `backdrop-filter: blur()`, carefully chosen opacities, and a pitch-black background, Wanderlust achieves a cinematic, highly-polished user experience reminiscent of high-end luxury brands.
