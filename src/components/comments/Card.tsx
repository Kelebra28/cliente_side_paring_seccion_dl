import React from 'react';
import ShowComments from './ShowComments';

interface User {
    username: string;
}
interface Comment {
    id: number;
    content: string;
    id_users: number;
    User: User;
}

interface CardProps {
    data: Comment[];
    onDelete: (id: number) => void;
    onEditSubmit: (id: number) => void;
    onAddComment: (id: number) => void;
    onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Card: React.FC<CardProps> = ({ data, onDelete, onEditChange, onEditSubmit }) => {

    if (!data || data.length === 0) {
        return <h3 className="text-center text-gray-500">No comments</h3>;
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-10">
            {data.map((item, index) => {
                return (
                    <div key={index} className="mb-4">
                        <ShowComments 
                            email={item.User.username} 
                            comment={item.content} 
                            onDelete={() => onDelete(item.id)}
                            onEditSubmit={() => onEditSubmit(item.id)}
                            onEditChange={onEditChange}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Card;