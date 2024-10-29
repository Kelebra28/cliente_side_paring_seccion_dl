import React, { useState, useMemo } from "react";
import { useServiceContext } from "../context";
import { LoaderModal, AddComment, Card } from "../components";
import {
  createCommentService,
  deleteCommentService,
  editCommentService,
  createNestedCommentService,
} from "../services";

export const LayoutContext: React.FC = () => {
  const { data, fetchData, loading } = useServiceContext();
  const [formValues, setFormValues] = useState({
    email: "",
    content: "",
  });
  const [editValues, setEditValues] = useState("");

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      setEditValues("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCommentToComment = async (id: number) => {
    try {
      await createNestedCommentService(id, { content: editValues });
      await fetchData();
      setEditValues("");
    } catch (error) {
      console.log(error);
    }
  };

  const memoizedData = useMemo(() => data, [data]);

  if (!memoizedData) {
    return <LoaderModal />;
  }

  return (
    <div className="flex justify-center items-center flex-col w-max">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Density Labs's Forum
      </h1>
      <AddComment
        formValues={formValues}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      <Card
        data={memoizedData}
        onDelete={handleOnDelete}
        onEditSubmit={handleOnEditSubmit}
        onEditChange={handleOnEditChange}
        onAddComment={handleAddCommentToComment}
      />
    </div>
  );
};
