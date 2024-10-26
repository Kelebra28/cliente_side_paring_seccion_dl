// src/components/MyComponent.tsx
import React from 'react';
import { useServiceContext } from '../context/services/ServicesContext';
import Card from './comments/Card';
import AddComment from './inputs/AddComment';
import { createCommentService } from '../services';


const LayoutContext = () => {
  const { data } = useServiceContext();
  const [formValues, setFormValues] = React.useState({
    email: '',
    content: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
        ...prevValues,
        [name]: value
    }));
  };

  const handleOnSubmit = async () => {
    console.log('---> data', formValues);
    try {
      await createCommentService(formValues);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('data', data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from Service</h1>
        <AddComment onChange={(e : any) => handleOnChange(e)} onSubmit={() => handleOnSubmit()}/>
        <Card data={data} />
    </div>
  );
};

export default LayoutContext;