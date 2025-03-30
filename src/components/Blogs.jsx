import React, { useRef } from "react";
import "./Blogs.css"; 

const Blogs = () => {
  const blogPosts = [
    { title: "My First React Project", description: "React is like Legos.", image: "/react logo.jpeg" },
    { title: "My First React Project", description: "React is like Legos.", image: "/react logo.jpeg" },
    { title: "My First React Project", description: "React is like Legos.", image: "/react logo.jpeg" },
    { title: "My First React Project", description: "React is like Legos.", image: "/react logo.jpeg" },
    { title: "My First React Project", description: "React is like Legos.", image: "/react logo.jpeg" },
  ];

  const containerRef = useRef(null);

  const scrollToCard = (index) => {
    const container = containerRef.current;
    const cardWidth = container.scrollWidth / blogPosts.length;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section id="blogs" className="blogs-section">
      <h2>Our Blogs</h2>
      <div className="blogs-container" ref={containerRef}>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={`/public${post.image}`} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <div className="dot-navigation">
        {blogPosts.map((_, index) => (
          <span key={index} className="dot" onClick={() => scrollToCard(index)}></span>
        ))}
      </div>
    </section>
  );
};

export default Blogs;