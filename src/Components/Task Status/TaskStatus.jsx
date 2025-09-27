import React from 'react';
import TaskStatusChild from './TaskStatusChild';

const TaskStatus = ({progressTickets, removeFromProgress, data}) => {
    let notice;
    if(data.length === 0){
        notice = (<p className='text-black text-center pt-[25%] pb-[25%] bg-white rounded-md'>There is no ticket.</p>);
    }
    else{
        notice = (<p className='text-black text-center pt-[25%] pb-[25%] bg-white rounded-md'>Select a ticket to add to Task Status</p>);
    }
    
    return (
        <div>
            <h1 className='text-black mb-4 text-2xl font-bold'>Task Status</h1>
            <div className='w-full min-h-75 rounded-md'>
                {
                    progressTickets.length === 0?(
                        notice
                    ):(
                        progressTickets.map(progressTicket => <TaskStatusChild progressTicket ={progressTicket} removeFromProgress ={removeFromProgress}></TaskStatusChild>)
                    )
                }
            </div>
        </div>
    );
};

export default TaskStatus;