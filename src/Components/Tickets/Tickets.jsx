import React, { useState, useEffect } from 'react';
import PARB from '../ProgressAndResolvedBox/ProgressAndResolvedBox'
import Ticket from './Ticket';
import TaskStatus from '../Task Status/TaskStatus';
import { Toaster, toast } from 'sonner'
import ResolvedTasks from '../Resolved Task/ResolvedTasks';

const Tickets = ({ promiseTickets }) => {
    // const ticketsData = use(promiseTickets)
    // console.log(ticketsData);
    
    const [data, setData] = useState([]);
    useEffect(() => {
        let mounted = true;

        promiseTickets
            .then(fetchedData => {
                if (mounted) setData(fetchedData);
            })
            .catch(err => console.error(err));

        return () => {
            mounted = false;
        };
    }, [promiseTickets]);

    
    
    
    const [progressTickets, setTickets] = useState([]);
    const [ResolvedTickets, setResolvedTickets] = useState([]);


    
    
    
    const handelProgress = (ticket) => {
        // console.log(ticket);
        let flag = 0;
        for (let i = 0; i < progressTickets.length; i++) {
            if (ticket.id === progressTickets[i].id) {
                flag = 1;
            }
        }
        if (flag == 0) {
            setTickets([...progressTickets, ticket]);
            toast.success("Ticket added to progress ✅");
        } else {
            toast.warning("This ticket is already in progress ⚠️");
        }
        // console.log(progressTickets.length)
    }

    
    
    
    const removeFromProgress = (progressTicket) => {
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.title !== progressTicket.title));
        setResolvedTickets([...ResolvedTickets, progressTicket]);
        setData(prev => prev.filter(ticket => ticket.title !== progressTicket.title));
        toast.success("Completed!");
    };

    
    
    return (
        <div>
            <Toaster richColors position="top-right" />
            <PARB progressTickets={progressTickets} ResolvedTickets={ResolvedTickets} ></PARB>
            <div className='w-11/12 mx-auto mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8'>
                <div className='lg:col-span-2'>
                    <h1 className='text-black mb-4 text-2xl font-bold'>Customer Tickets</h1>
                    <div className='grid gap-4 lg:grid-cols-2'>
                        {
                            data.map(ticket => <Ticket ticket={ticket} handelProgress={handelProgress} progressTickets = {progressTickets}></Ticket>)
                        }
                    </div>
                </div>
                <div>
                    <TaskStatus progressTickets={progressTickets} removeFromProgress={removeFromProgress} data={data}></TaskStatus>
                    <ResolvedTasks ResolvedTickets={ResolvedTickets}></ResolvedTasks>
                </div>
            </div>
        </div>
    );
};

export default Tickets;