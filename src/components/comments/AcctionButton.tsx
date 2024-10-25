import React from 'react';

const AcctionButton = ({ acction, onClick } : any) => {

    return(
        <button onClick={onClick}>{acction}</button>
    );


};

export default AcctionButton;
