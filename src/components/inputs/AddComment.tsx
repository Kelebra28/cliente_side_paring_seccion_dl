import React from "react";
import { Input, AcctionButton } from "../../components";

interface AddCommentProps {
  formValues: {
    email: string;
    content: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
}

export const AddComment: React.FC<AddCommentProps> = ({
  formValues,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="mt-12 w-6/12 h-10/12">
      <Input
        onChange={onChange}
        name="email"
        placeholder="Add a email"
        value={formValues.email}
      />
      <textarea
        className="w-full p-4 mt-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        cols={60}
        rows={5}
        onChange={onChange}
        name="content"
        placeholder="Add a comment"
        value={formValues.content}
      />
      <AcctionButton
        acction="Submit"
        onClick={onSubmit}
        colorClass="bg-green-600 hover:bg-green-700"
      />
    </div>
  );
};
