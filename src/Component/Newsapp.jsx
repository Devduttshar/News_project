
import React, { useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const API_KEY = 'ee0616792a5b4bc6ba5c6d5a303b1f47';
  const [searchTerm, setSearchTerm] = useState('india'); // State to store search term
  const [newsData, setNewsData] = useState([]); // State to store fetched news data

  // Function to fetch news data
  const getData = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles); // Update state with fetched articles
    } catch (error) {
      console.error('Error fetching news:', error); // Error handling
    }
  };

  // Handle search input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    getData(category); // Fetch news data for the selected category
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <li>
            <a href="#all-news">All News</a>
          </li>
          <li>
            <a href="#trending">Trending</a>
          </li>
        </ul>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search News"
            onChange={handleChange}
            value={searchTerm}
          />
          <button onClick={() => getData(searchTerm)}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay updated with Trending News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={() => handleCategoryClick('sports')}>Sports</button>
        <button onClick={() => handleCategoryClick('politics')}>Politics</button>
        <button onClick={() => handleCategoryClick('entertainment')}>Entertainment</button>
        <button onClick={() => handleCategoryClick('health')}>Health</button>
        <button onClick={() => handleCategoryClick('fitness')}>Fitness</button>
      </div>
      <div className="news-cards">
        {newsData && newsData.length > 0 ? (
          newsData.map((article, index) => <Card key={index} article={article} />)
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
