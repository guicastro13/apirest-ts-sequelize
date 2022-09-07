require('dotenv').config();

module.exports = {
    dialet: 'postgres',
    url: process.env.DATABASE_URL 
}