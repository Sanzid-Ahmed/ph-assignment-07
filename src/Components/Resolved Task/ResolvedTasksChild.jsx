import React from 'react';

const ResolvedTasksChild = (ticket) => {
    console.log("Name", ticket.ticket.title)
    return (
        <div>
            <div className='rounded-md hover:bg-[#7bffc850] hover:text-green-500  text-black bg-[#E0E7FF] border p-4 mb-4 cursor-pointer'>
                <h1 className='font-bold'>{ticket.ticket.title}</h1>
                <p className='font-bold mt-2'>✅ Completed</p>
            </div>
        </div>
    );
};

export default ResolvedTasksChild;