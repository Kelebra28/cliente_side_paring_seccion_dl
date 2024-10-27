import React from 'react';
import AcctionButton from '../comments/AcctionButton';

interface EditsCommentsProps {
    comment: string;
    onEditChange: any;
    onEditSubmit: () => void;
    cancel: () => void;
}

const EditsComments: React.FC<EditsCommentsProps> = ({ comment, onEditChange, onEditSubmit, cancel }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <textarea 
                onChange={onEditChange} 
                cols={30} 
                rows={10} 
                className="w-full p-2 border border-gray-300 rounded-md"
            >
                {comment}
            </textarea>
            <div className="mt-4 flex space-x-2">
                <AcctionButton onClick={onEditSubmit} acction='Save' colorClass='bg-blue-600 hover:bg-blue-700' />
                <AcctionButton onClick={cancel} acction='Cancel' colorClass='bg-gray-600 hover:bg-gray-700' />
            </div>
        </div>
    );
};

export default EditsComments;