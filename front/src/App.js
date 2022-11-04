import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

import Articles from './components/Articles';

function App() {
  const [articles,setArticles] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/articles')
    .then(res => res.json())
    .then(data => setArticles(data))
  },[])


  return (
    <div className='container m-auto'>
      <Articles articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
