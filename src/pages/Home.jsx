import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* 1. Welcome Banner */}
      <section className="welcome-section">
        <div className="welcome-content">
          <p className="welcome-label">WELCOME TO</p>
          <h1>StyleStash</h1>
          <h2>Your Style, Your Statement.</h2>
          <p>
            Discover fashion that reflects your personality.
            Explore the latest trends and create your own style.
          </p>
          <a href="#gallery" className="welcome-btn">
            Explore Collection
          </a>
        </div>
      </section>

      {/* 2. Fashion Quotes */}
      <section className="quotes-section">
        <p className="section-label">OUR PHILOSOPHY</p>
        <h2>Fashion Is More Than What You Wear</h2>

        <div className="quotes-container">
          <div className="quote-card">
            <span>“</span>
            <p>Style is a way to say who you are without speaking.</p>
          </div>

          <div className="quote-card">
            <span>“</span>
            <p>Wear what makes you feel confident and beautiful.</p>
          </div>

          <div className="quote-card">
            <span>“</span>
            <p>Your individuality is your most beautiful trend.</p>
          </div>
        </div>
      </section>

      {/* 3. Achievements */}
      <section className="achievements-section">
        <p className="section-label">OUR JOURNEY</p>
        <h2>Style That Brings Us Together</h2>

        <div className="achievements-container">
          <div className="achievement">
            <h3>1,000+</h3>
            <p>Fashion Products</p>
          </div>

          <div className="achievement">
            <h3>5,000+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="achievement">
            <h3>50+</h3>
            <p>Fashion Brands</p>
          </div>

          <div className="achievement">
            <h3>24/7</h3>
            <p>Online Shopping</p>
          </div>
        </div>
      </section>

      {/* 4. Fashion Gallery */}
      <section className="gallery-section" id="gallery">
        <p className="section-label">STYLE INSPIRATION</p>
        <h2>Explore Our Gallery</h2>
        <p className="gallery-description">
          Find inspiration for your next favorite look.
        </p>

        <div className="gallery-container">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
              alt="Friends exploring fashion"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600"
              alt="Modern women's fashion"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600"
              alt="Fashion street style"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600"
              alt="Contemporary fashion outfit"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"
              alt="Fashion editorial look"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
              alt="Elegant fashion styling"
            />
          </div>
        </div>
      </section>

      

    </div>
  );
}

export default Home;

