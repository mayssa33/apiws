import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";

function App() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);





const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'harry potter'},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': 'b478a7dd24msh1d2a4f86b706856p11c46bjsn227146a51949'
  }
};
useEffect(() => {
  const fetchdata = async() =>{
    const res = await axios.request(options)
    console.log(res.data.d)
    setusers(res.data.d)

  }
  fetchdata()
  setloading(false)
}, [])
// axios.request(options).then(function (response) {
// setusers(response.data.d).then()
// }).catch(function (error) {
// 	console.error(error);
// });



  // useEffect (() => {
  //   const fetchData = () => {
  //     fetch ("https://jsonplaceholder.typicode.com/users")
  //     .then((response)=> response.json())
      
  //     .then((data)=> setusers(data))
  //     .catch((err) => console.log(err))

  //   };
  //   fetchData();
  // }, []);




  return (
    <div className="App">
      {
        loading ? <h1>loading...</h1>
     :
     <div>
       {users.map(el=>
        <div> 
           <img src={el.i.imageUrl} alt="" />
           {/* <h2>{el.id}</h2> */}
         </div>)}
     </div>
    }
    </div>
  );
}

export default App;
