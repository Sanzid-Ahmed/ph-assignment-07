import React from 'react';

const TaskStatusChild = ({progressTicket, removeFromProgress}) => {
    return (
        <div className='rounded-md text-black bg-white p-4 mb-4'>
            <h1 className='font-bold text-xl'>{progressTicket.title}</h1>
            <button onClick={() => removeFromProgress(progressTicket)} className='btn border-0 w-full mt-4 py-3 px-4 text-white font-bold bg-[#02A53B]'>Complete</button>
        </div>
    );
};

export default TaskStatusChild;