import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { homeSliceAction } from './store/homeSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFount from './pages/404/PageNotFount';


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector(store => store.homeSlice);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then(
      (res)=>{
        console.log(res)
        dispatch(homeSliceAction.getApiConfiguration(res));
      });
  }

  useEffect(()=>{
    return apiTesting();
  },[]);


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:mediaType/:id' element={<Detail/>}/>
          <Route path='/search/:query' element={<SearchResult/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>}/>
          <Route path='*' element={<PageNotFount/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
