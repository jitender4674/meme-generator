import React, {useEffect, useState} from 'react'
import Card from '../components/Card';
import { memesData } from '../api call/meme-api-call';
import './styles/Home.css';

const Home = () => {

    const [data,setData] = useState([]);

    useEffect(() =>{
        memesData().then((memes) => setData(memes.data.memes));
    },[])

    console.log(data);



  return (
    <div className='home-grid'>{data.map(el => <><Card imgUrl={el.url} memeName={el.name} key={el.id}/>  </>)}</div>
  )
};

export default Home