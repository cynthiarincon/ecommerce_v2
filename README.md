# Skinthia E-Commerce Platform

A full-stack e-commerce web application built with React, Node.js, Express, and PostgreSQL. This project showcases a modern skincare brand with a complete product catalog, filtering system, and responsive design.

## 🚀 Live Demo

- **Frontend:** [ecommerce-v2-beta.vercel.app](https://ecommerce-v2-beta.vercel.app)
- **Backend:** [skinthia-backend.onrender.com](https://skinthia-backend.onrender.com)
- **GitHub Repository:** [github.com/cynthiarincon/ecommerce_v2](https://github.com/cynthiarincon/ecommerce_v2)

## 📋 Features

### Pages
- **Home Page:** Hero slider with autoplay functionality, featured products from database, newsletter signup
- **Products Page:** 12 products rendered from PostgreSQL database with working filters (price and product type)
- **Contact Page:** Form validation with name, email, and message fields
- **Placeholder Page:** Coming soon page for future features (login/cart)

### Functionality
- **Product Filtering:** Filter by price (Under $10, Under $15) and product type (Skincare, Merch)
- **Database Integration:** All products fetched from PostgreSQL database via REST API
- **Responsive Design:** Mobile-first design with tablet and desktop breakpoints
- **Component Architecture:** Reusable React components (Header, Footer, ProductCard, etc.)
- **Client-Side Routing:** React Router for seamless navigation

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **React Router** for routing
- **SCSS** for styling
- **Environment Variables** for API configuration

### Backend
- **Node.js** & **Express.js**
- **PostgreSQL** database
- **CORS** for cross-origin requests
- **dotenv** for environment configuration

### Deployment
- **Vercel** (Frontend)
- **Render** (Backend + Database)

## 📁 Project Structure
```
ecommerce_v2/
├── public/
│   ├── assets/
│   │   ├── images/        # Product images, icons
│   │   └── videos/        # Hero video
│   └── product.json       # Legacy product data
├── server/
│   ├── index.js           # Express server
│   ├── .env              # Database credentials
│   └── package.json
├── src/
│   ├── components/
│   │   ├── CouponBanner.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Newsletter.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── PlaceholderPage.jsx
│   ├── styles/
│   │   └── index.scss
│   ├── App.jsx
│   └── main.jsx
├── .env                   # Frontend environment variables
├── vercel.json           # Vercel routing config
└── README.md
```

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  photo VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE
);
```

## 🔌 API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/products/featured` - Fetch featured products only

## 🚀 Local Development

### Prerequisites
- Node.js (v14+)
- PostgreSQL
- npm or yarn

### Frontend Setup
```bash
# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000" > .env

# Run development server
npm run dev
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with your database credentials
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=skinthia_db
PORT=5000

# Run server
node index.js
```

### Database Setup
```bash
# Connect to PostgreSQL
psql -U your_user

# Create database
CREATE DATABASE skinthia_db;

# Run schema and seed data (see server/schema.sql)
```

## 🎨 Design Features

- **Color Scheme:** Cyan (#28e5fa) and Yellow (#ffff57)
- **Typography:** Montserrat font family
- **Animations:** Marquee banner, hover effects, smooth transitions
- **Responsive Grid:** 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)

## 📱 Responsive Breakpoints

- **Mobile:** < 500px (1 column grid)
- **Tablet:** 500px - 799px (2 column grid)
- **Desktop:** 800px+ (4 column grid)

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=your_backend_url
```

### Backend (server/.env)
```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=skinthia_db
DATABASE_URL=postgresql://user:password@host/database
PORT=5000
```

## 🚢 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Add environment variable: `VITE_API_URL`
3. Deploy automatically on push to main branch

### Backend (Render)
1. Create Web Service from GitHub repository
2. Set root directory to `server`
3. Add environment variables (DB credentials)
4. Create PostgreSQL database on Render
5. Connect backend to database

## 📝 Key Learnings

- Converting from MySQL to PostgreSQL for cloud deployment
- Implementing environment variables for different deployment environments
- Building reusable React components with props and state
- Using React Router for SPA navigation
- Deploying full-stack applications to cloud platforms
- Integrating frontend with backend API
- Creating responsive designs with SCSS media queries

## 🎯 Future Enhancements

- Shopping cart functionality
- User authentication and login system
- Product detail pages
- Checkout and payment integration
- Search functionality
- Product reviews and ratings

## 👤 Author

**Cynthia Rincon**
- GitHub: [@cynthiarincon](https://github.com/cynthiarincon)
- Road to Hire Coding Apprentice - Cohort 18

## 📄 License

This project was created as part of the Road to Hire coding apprenticeship program.
