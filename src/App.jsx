import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { homeSliceAction } from './store/homeSlice';


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
    

      <h1 style={{color: 'white'}}>FILM VISTA {url?.total_pages}</h1>
    
  )
}

export default App
