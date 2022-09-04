import React from 'react';
import { Hearts } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div>
            <Hearts
                height="80"
                width="80"
                color="#daa520"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;