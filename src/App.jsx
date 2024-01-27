import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initial fetch for Harry Potter
    fetchBooks('Sherlock+Holmes')
    fetchBook('harry+potter' );
    
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        setBooks(data.items || []);
      } else {
        console.error('Error fetching books:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch books error:', error);
    }
  };
  const fetchBook = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        setBooks(data.items || []);
      } else {
        console.error('Error fetching books:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch books error:', error);
    }
  };
  

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = () => {
    fetchBooks(searchQuery);
  };

  return (
    <div className="app">

      <SearchBar searchQuery={searchQuery} onSearchChange={(value) => setSearchQuery(value)} onSearch={handleSearch} />
      {selectedBook && <BookDetail book={selectedBook} />}
      <BookList books={books} onBookClick={handleBookClick} />

    </div>
  );
};

export default App;
