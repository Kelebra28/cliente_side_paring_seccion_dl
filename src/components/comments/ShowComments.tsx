import React from 'react';
import AcctionButton from './AcctionButton';

const  ShowComments = ({ email, comment } :any) => {

    return(
        <div>
            <h5>{email}</h5>
            <p>{comment}</p>
            <div>
                <AcctionButton acction='Edit'/>
                <AcctionButton acction='Detele'/>
                <AcctionButton acction ='Comment'/>
            </div>
        </div>
    );
};

export default ShowComments;