import React from 'react';
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const history = useNavigate()
    const goBack = () => {
        history('/')
    }
    return (
        <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={goBack}>
                <kbd class="kbd">◀︎</kbd>
                Back</button>
        </div>
    );
};

export default Back;