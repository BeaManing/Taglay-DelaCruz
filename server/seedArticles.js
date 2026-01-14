require('dotenv').config();
const mongoose = require('mongoose');
const Article = require('./models/Article'); // make sure path is correct
const articles = require('./article-content'); // your JS array
const connectDB = require('./config/db');

const seedArticles = async () => {
  try {
    await connectDB(); // connect to MongoDB
    await Article.deleteMany(); // clear old articles
    await Article.insertMany(articles); // insert new articles
    console.log('Articles seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedArticles();
