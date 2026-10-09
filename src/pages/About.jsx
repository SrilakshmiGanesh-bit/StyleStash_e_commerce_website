import "./About.css";

function About() {
  // Why Choose Us cards
  const features = [
    {
      icon: "✦",
      title: "Trendy Fashion",
      description:
        "Discover the latest styles for your everyday look."
    },
    {
      icon: "♡",
      title: "Quality Clothing",
      description:
        "Enjoy stylish outfits made with care and comfort."
    },
    {
      icon: "🚚",
      title: "Easy Shopping",
      description:
        "Shop your favorite outfits from the comfort of home."
    },
    {
      icon: "₹",
      title: "Affordable Style",
      description:
        "Find fashionable clothing at prices you will love."
    }
  ];

  // Sample customer reviews for the website
  const reviews = [
    {
      name: "Ananya",
      rating: 5,
      comment:
        "Amazing collection! The designs are trendy, beautiful, and perfect for everyday wear."
    },
    {
      name: "Priya",
      rating: 5,
      comment:
        "I love the variety of outfits. StyleStash makes it easy to discover styles that match my personality."
    },
    {
      name: "Divya",
      rating: 4,
      comment:
        "Lovely fashion choices and a beautiful collection. I would love to explore more new arrivals!"
    },
    {
      name: "Sneha",
      rating: 5,
      comment:
        "Stylish looks at affordable prices. A lovely place to find inspiration for my wardrobe."
    }
  ];

  return (
    <div className="about-page">

      {/* 1. About Our Brand */}
      <section className="about-brand" id="about">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
            alt="Friends exploring fashionable clothing"
          />
        </div>

        <div className="about-text">
          <p className="subtitle">WELCOME TO STYLESTASH</p>

          <h1>Fashion That Speaks Your Style</h1>

          <p>
            StyleStash is your destination for trendy, stylish,
            and comfortable clothing. We believe fashion is more
            than just clothes — it is a way to express who you are.
          </p>

          <p>
            From everyday essentials to special occasion outfits,
            we bring fashion closer to you with styles that match
            your personality and budget.
          </p>

          
        </div>

      </section>

      {/* 2. Mission and Vision */}
      <section className="mission-section">

        <h2>Our Mission &amp; Vision</h2>

        <p className="section-intro">
          The ideas that inspire everything we do.
        </p>

        <div className="mission-cards">

          <div className="mission-card">
            <span>🎯</span>

            <h3>Our Mission</h3>

            <p>
              To make trendy and quality clothing accessible to
              everyone through a simple, enjoyable, and affordable
              online shopping experience.
            </p>
          </div>

          <div className="mission-card">
            <span>🌟</span>

            <h3>Our Vision</h3>

            <p>
              To become a trusted fashion destination where every
              shopper feels confident, comfortable, and unique
              in their own style.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="why-section">

        <h2>Why Choose StyleStash?</h2>

        <p className="section-intro">
          Your style, your comfort, your choice.
        </p>

        <div className="feature-cards">

          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <span className="feature-icon">
                {item.icon}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>
      </section>

      {/* 4. Our History */}
      <section className="history-section">

        <div className="history-text">
          <p className="subtitle">OUR JOURNEY</p>

          <h2>A Little Story Behind StyleStash</h2>

          <p>
            StyleStash started with a simple idea: shopping for
            fashionable clothes online should be easy, exciting,
            and affordable.
          </p>

          <p>
            We created this brand to bring trendy clothing closer
            to online shoppers. Our goal is to help people discover
            outfits they love without making shopping complicated.
          </p>

          <p>
            Today, StyleStash represents creativity, confidence,
            and the freedom to express yourself through fashion.
            And this is only the beginning of our journey!
          </p>
        </div>

        <div className="history-image">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900"
            alt="Fashionable clothes displayed in a store"
          />
        </div>

      </section>

      {/* 5. Existing Customer Reviews */}
      <section className="reviews-section" id="feedback">

        <p className="subtitle">CUSTOMER LOVE</p>

        <h2>What Our Customers Say</h2>

        <p className="section-intro">
          A little love from our StyleStash community.
        </p>

        <div className="reviews-cards">

          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div
                className="review-stars"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="review-comment">
                "{review.comment}"
              </p>

              <h3>{review.name}</h3>

              <p className="review-label">
                StyleStash Customer
              </p>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default About;