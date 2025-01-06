import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import KnittingTools from '../../assets/knitting-tools.png';
import FreeKnittingPatterns from '../../assets/free-knitting-patterns.png';
import DroppedStitches from '../../assets/dropped-stitches.png';
import BudgetYarn from '../../assets/budget-yarn.png';
import StressReliever from '../../assets/stress-reliever.png';
import ChristmasKnitting from '../../assets/christmas-knitting.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Knitting for Beginners: Tools You Need to Start',
      description: 'Learn what tools and materials you need to begin your knitting journey.',
      image: KnittingTools,
    },
    {
      id: 2,
      title: '10 Free Knitting Patterns for Beginners',
      description: 'Explore 10 free and easy knitting patterns perfect for beginners.',
      image: FreeKnittingPatterns,
    },
    {
      id: 3,
      title: 'How to Avoid Dropped Stitches',
      description: 'Tips and tricks to help you avoid the common problem of dropped stitches.',
      image: DroppedStitches,
    },
    {
      id: 4,
      title: 'Top 5 Yarn Brands for Budget Crafters',
      description: 'Discover the best yarn brands that are affordable and high quality.',
      image: BudgetYarn,
    },
    {
      id: 5,
      title: 'Why Knitting is the Perfect Stress Reliever',
      description: 'Find out why knitting is a great way to reduce stress and relax.',
      image: StressReliever,
    },
    {
      id: 6,
      title: '5 Easy Christmas Knitting Projects',
      description: 'Get inspired with these 5 simple Christmas-themed knitting projects.',
      image: ChristmasKnitting,
    },
  ]; 

  return (
    <div className="blog">
      <section className="blog__header">
        <h1>Blog</h1>
        <p>Discover stories, tips, and insights about the wonderful world of knitting.</p>
      </section>

      <section className="blog__posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
