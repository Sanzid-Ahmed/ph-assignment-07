import React from 'react';
import ResolvedTasksChild from './ResolvedTasksChild';

const ResolvedTasks = ({ ResolvedTickets }) => {
    console.log("Number => ", ResolvedTickets.length);

    return (
        <div>
            <h1 className='text-black my-4 text-2xl font-bold'>Resolved Tasks</h1>
            { ResolvedTickets.length > 0 ? (
                ResolvedTickets.map(ticket => <ResolvedTasksChild ticket ={ticket}></ResolvedTasksChild>)
            ) : (
                <p className='text-black text-center pt-[25%] pb-[25%] bg-white rounded-md'>
                    No resolved tasks yet.
                </p>
            )}
        </div>
    );
};

export default ResolvedTasks;
