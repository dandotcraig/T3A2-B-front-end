import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='animate-spin w-16 h-16 border-4 border-t-transparent border-black rounded-full'></div>
        </div>
        
    )
}

export default Spinner