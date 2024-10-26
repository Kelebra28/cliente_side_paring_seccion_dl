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
}

const Card: React.FC<CardProps> = ({ data }) => {
    console.log('data', data);
    return (
        <div>
            {data.map((item, index) => {
                console.log('item', item);
                return (
                    <ShowComments key={index} email={item.User.username} comment={item.content} />
                );
            })}
        </div>
    );
};

export default Card;