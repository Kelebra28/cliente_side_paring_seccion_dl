import React, { useState } from "react";
import { AcctionButton, EditsComments } from "../../components";
interface ShowCommentsProps {
  email: string;
  comment: string;
  onDelete: () => void;
  onEditSubmit: () => void;
  onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddComment: () => void;
}

export const ShowComments: React.FC<ShowCommentsProps> = ({
  email,
  comment,
  onDelete,
  onEditSubmit,
  onEditChange,
  onAddComment,
}) => {
  const [edit, setEdit] = useState(false);
  const [newComment, setNewComment] = useState(false);

  const handleEditSubmit = async () => {
    await onEditSubmit();
    setEdit(false);
  };

  const handleAddComment = async () => {
    await onAddComment();
    setNewComment(false);
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
      <h5 className="text-lg font-semibold">{email}</h5>
      {edit || newComment ? (
        <EditsComments
          comment={edit ? comment : ""}
          onEditChange={onEditChange}
          onEditSubmit={edit ? handleEditSubmit : handleAddComment}
          cancel={() => (edit ? setEdit(!edit) : setNewComment(!newComment))}
        />
      ) : (
        <p className="mt-2 text-gray-700">{comment}</p>
      )}
      <div className="mt-4 flex space-x-2">
        <AcctionButton
          acction="Edit"
          onClick={() => setEdit(!edit)}
          colorClass="bg-blue-600 hover:bg-blue-700"
        />
        <AcctionButton
          acction="Delete"
          onClick={onDelete}
          colorClass="bg-red-600 hover:bg-red-700"
        />
        <AcctionButton
          acction="Comment"
          onClick={() => setNewComment(!newComment)}
          colorClass="bg-green-600 hover:bg-green-700"
        />
      </div>
    </div>
  );
};
