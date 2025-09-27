import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';


const Ticket = ({ ticket, handelProgress, progressTickets }) => {
    // console.log(ticket)
    let priorityText;
    if (ticket.priority === "High") {
        priorityText = <p className="text-[#F83044]">HIGH PRIORITY</p>;
    }
    else if (ticket.priority === "Medium") {
        priorityText = <p className="text-[#FEBB0C]">MEDIUM PRIORITY</p>;
    }
    else {
        priorityText = <p className="text-[#02A53B]">LOW PRIORITY</p>;
    }


    let position;
    if (Object.values(progressTickets).some(obj => obj.title === ticket.title)) {
        position = (
            <p className='text-white flex gap-1.5 justify-center items-center py-1 px-3 bg-[#9C7700] rounded-3xl md:mt-0 mt-5 md:text-[12px] md:w-[35%] md:h-9'>
                <div className='bg-[#FEBB0C] w-3.5 h-3.5 rounded-4xl'></div>
                In- Progress
            </p>
        );
    } else {
        position = (
            <p className='text-black flex gap-1.5 justify-center items-center py-1 px-3 bg-[#B9F8CF] rounded-3xl md:mt-0 mt-5 md:h-9'>
                <div className='bg-[#02A53B] w-3.5 h-3.5 rounded-4xl'></div>
                Open
            </p>
        );
    }



    const handelProgressChild = () => {
        console.log("Hello");
        handelProgress(ticket);
    }


    return (
        <div onClick={handelProgressChild} className='p-4 bg-white shadow-sm rounded-md cursor-pointer'>
            <div className='flex md:flex-row flex-col justify-between mb-2'>
                <h1 className='text-black font-bold text-xl'>{ticket.title}</h1>
                {position}
            </div>
            <p className='text-[#627382]'>{ticket.description}</p>
            <div className='flex md:flex-row flex-col justify-between mt-4'>
                <div className='flex md:flex-row flex-col justify-between gap-4'>
                    <p className='text-[#627382]'># {ticket.id}</p>
                    {priorityText}
                </div>
                <div className='flex md:flex-row flex-col justify-between gap-4 md:mt-0 mt-5'>
                    <p className='text-[#627382]'>{ticket.customer}</p>
                    <p className='text-[#627382]'><FontAwesomeIcon icon={faCalendarDays} />{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;