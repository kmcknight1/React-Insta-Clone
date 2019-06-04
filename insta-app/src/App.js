import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  const data = dummyData;

  return (
    <div className="app">
      <header className="header">
       <SearchBar />
      </header>

      {data.map(item => (
          <PostContainer data={item} />
        ))}

    </div>
  );
}

export default App;
