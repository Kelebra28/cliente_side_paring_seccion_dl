import React, { useState } from "react";
import { useServiceContext } from "../context/services/ServicesContext";
import Card from "./comments/Card";
import AddComment from "./inputs/AddComment";
import {
  createCommentService,
  deleteCommentService,
  editCommentService,
} from "../services";

const LayoutContext = () => {
  const { data, fetchData } = useServiceContext();
  const [formValues, setFormValues] = useState({
    email: "",
    content: "",
  });
  const [editValues, setEditValues] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditValues(value);
  };

  const handleOnSubmit = async () => {
    try {
      await createCommentService(formValues);
      await fetchData();
      setFormValues({
        email: "",
        content: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDelete = async (id: number) => {
    try {
      await deleteCommentService(id);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnEditSubmit = async (id: number) => {
    try {
      await editCommentService(id, { content: editValues });
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col w-max">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Density Labs's Forum
      </h1>
      <AddComment onChange={handleOnChange} onSubmit={handleOnSubmit} />
      <Card
        data={data}
        onDelete={handleOnDelete}
        onEditSubmit={handleOnEditSubmit}
        onEditChange={handleOnEditChange}
      />
    </div>
  );
};

export default LayoutContext;
