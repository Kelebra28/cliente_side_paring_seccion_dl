import React, { useState, useEffect } from 'react';
import { testService } from './services/test.service';
import Input from './components/inputs/Input';
import Card from './components/comments/Card';
import AcctionButton from './components/comments/AcctionButton';
import './App.css';

function App() {

  const [data, setData] = useState({
   email: '',
   comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]:  value,
    });
  };

  const handleOnSubmit = async () => {
    // try {
    //   const response = await testPostService(data);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error)
    // }
    console.log('---> data', data)
  };
  

const fetchData = async () => {
  try {
    const response = await testService();
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

// console.log(data);
useEffect(() => {
  fetchData();
}, []);


  return (
    <div className="App">
      <div className="data_entry">
          <Input 
            placeholder='Email' 
            name='email'
            onChange={(e : any ) => handleChange(e)}
          />
          <Input 
            placeholder='Comment'
            name='comment'
            onChange={(e : any ) => handleChange(e)}
          />
          <AcctionButton acction='Submit' onClick={() => handleOnSubmit()}/>
      </div>
      <div className="show_data">
          <Card />
      </div>
    </div>
  );
}

export default App;
