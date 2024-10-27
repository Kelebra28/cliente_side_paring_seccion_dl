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
    onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Card: React.FC<CardProps> = ({ data, onDelete, onEditChange, onEditSubmit }) => {
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <ShowComments 
                        key={index} 
                        email={item.User.username} 
                        comment={item.content} 
                        onDelete={() => onDelete(item.id)}
                        onEditSubmit={() => onEditSubmit(item.id)}
                        onEditChange={onEditChange}
                    />
                );
            })}
        </div>
    );
};

export default Card;