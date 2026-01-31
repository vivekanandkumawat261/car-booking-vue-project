# 💡 CityLight – Lighting Showroom Website (Vue.js)

CityLight is a modern, responsive **lighting showroom website** built using **Vue 3 + Vite + Tailwind CSS**.  
The project showcases products, services, pricing, blogs, and contact details for **City Light, Bajaj Road, Sikar (Rajasthan)**.

This project is designed as a **real business website** with clean UI, smooth navigation, reusable components, and structured data handling.

---

## 🚀 Project Overview

CityLight provides an elegant digital presence for a lighting showroom, allowing users to:

- Browse lighting products
- View detailed product pages
- Explore pricing plans
- Read blogs & testimonials
- Contact the showroom via form & map
- Experience a smooth multi-page SPA using Vue Router

---

## ✨ Key Features

### 🏠 General
- Single Page Application (SPA)
- Responsive & mobile-friendly design
- Smooth routing with scroll-to-top behavior
- Reusable layout components

### 🛍️ Product & Lighting Features
- Lights listing page
- Light detail page with:
  - Brand
  - Price
  - Warranty
  - Ratings
  - Features & reviews
- Pricing comparison table

### 📄 Pages
- Home
- About Us
- Services
- Lights
- Light Details
- Pricing
- Blog
- Contact

### 📰 Blog System
- Static blog data
- Author, date & comments
- Blog listing with cards

### 📞 Contact Page
- Contact details with icons
- Working contact form (frontend)
- Google Maps embedded location

### 🎨 UI / UX
- Tailwind CSS for styling
- Swiper for sliders
- Vue Icons for modern icons
- Hero sections, testimonials & CTAs

---

## 🧱 Tech Stack

### Frontend
- **Vue 3**
- **Vite**
- **Vue Router**
- **Tailwind CSS**
- **Swiper**
- **Vue Icons (@kalimahapps)**

### Tooling
- ES Modules
- Component-based architecture
- Static data-driven UI

---

## 📂 Project Structure

citylight/
├── src/
│ ├── assets/
│ │ └── images/
│ ├── components/
│ │ ├── cards/
│ │ ├── composables/
│ │ ├── homePage/
│ │ ├── layout/
│ │ └── carDetails/
│ ├── data/
│ │ ├── carsData.js
│ │ ├── blogData.js
│ │ ├── carDetails.js
│ │ └── testimonyData.js
│ ├── page/
│ │ ├── HomePage.vue
│ │ ├── AboutPage.vue
│ │ ├── ProductsPage.vue
│ │ ├── PricingPage.vue
│ │ ├── LightsPage.vue
│ │ ├── LightDetails.vue
│ │ ├── BlogPage.vue
│ │ └── ContactPage.vue
│ ├── router/
│ │ └── index.js
│ ├── App.vue
│ └── main.js
│
├── package.json
├── vite.config.js
└── README.md


---

## 🧭 Routes Overview

| Route | Description |
|------|-------------|
| `/` | Home page |
| `/about` | About CityLight |
| `/services` | Services |
| `/lights` | All lights |
| `/light/:id` | Light details |
| `/pricing` | Pricing table |
| `/blog` | Blogs |
| `/contact` | Contact page |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/citylight.git
cd citylight
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev
4️⃣ Open in Browser
http://localhost:5173
🗺️ Business Details Used
Business Name: City Light

Location: Bajaj Road, Sikar, Rajasthan, India

Google Maps: Embedded on Contact page

Email: vivekanandkumawat@gmail.com

Phone: +91 9828251124

🎯 Learning Outcomes
Vue 3 Composition API

Vue Router nested layouts

Tailwind CSS utility-first styling

Component reusability

SPA architecture

Data-driven UI rendering

Real-world business website structure

🚀 Future Enhancements
Backend integration (Node / Firebase / Supabase)

Admin dashboard

Product filtering & search

Dynamic blog CMS

Contact form backend

SEO optimization

Deployment (Netlify / Vercel)

👨‍💻 Author
Vivekanand Kumawat
Frontend & Full Stack Developer
Vue.js • React • FastAPI • UI/UX

