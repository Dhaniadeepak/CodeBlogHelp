import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Blogs from './components/Blogs'
import Pagination from './components/pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlogsPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogsPosts();
  },[])
  return (
    <div className="App">
     <Header/>
     <Blogs/>
     <Pagination/>
    </div>
  );
}

export default App;
