import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ALLHero from './ALLHero';

function App() {

  const tokens = '2007395856077470';

  const[hero, setHero] = useState('batman');
  const[items, setItems] = useState([]);
   
  const heroSearch = (e) => {
       setHero(e.target.value);
  }

  useEffect(() => {
      
    const heroCall = async () => {
         await axios.get(`https://superheroapi.com/api/${tokens}/search/${hero}`)
         .then(res => res.data.results)
         .then(res => setItems(res))
         .catch(err => console.log('Err', err))
    };

    heroCall();

  },[hero]);

  return (
    <div className="App">
    <div className='text-center '>
     <h1 className='text-green-300  text-4xl md:text-6xl'>GhostSuperHeroes</h1>
      <div className='pt-4 mt-5 border border-green-300 solid w-80 h-16 m-auto rounded'>
      
      <div className='mr-24'>
     <input type='text' placeholder='Type any superhero' onChange={heroSearch} value={hero} className='border-black border-none solid bg-transparent text-white outline-none'/>
     </div>
      
      </div>
     <div className='grid grid-cols-1 gap-4 px-20 mb-8 pt-24 md:grid-cols-2 md:gap-2 md:px-28 lg:grid-cols-3 lg:gap-2 lg:px-52'>

     {items?.length && items.map((val, idx) => {
         return(
             <ALLHero 
             val={val}
             key={idx}
             id={idx}  
             />
       );
       })
     }
     </div>

     </div>
    </div>
  );
}

export default App;
