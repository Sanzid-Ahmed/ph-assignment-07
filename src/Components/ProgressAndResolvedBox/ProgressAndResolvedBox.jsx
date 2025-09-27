import React from 'react';
import limg from '../../assets/vector1.png'
// import rimg from '../../assets/vector2.png'

const ProgressAndResolvedBox = ({progressTickets, ResolvedTickets}) => {
    return (
        <div className='w-11/12 mx-auto flex gap-6 mt-15 flex-col lg:flex-row'>
            <div className='rounded-lg w-full bg-linear-90 from-[#632EE3] to-[#9F62F2] flex-col justify-center items-center'>
                <div className='flex justify-between'>
                    <img className='md:block hidden max-[1500px]:w-[200px]' src={limg} alt="" />
                    <div className='flex justify-center items-center text-center mx-auto p-8'>
                        <p>In-Progress <br /><span className='text-6xl'>{progressTickets.length}</span> </p>
                    </div>

                    <img className='md:block hidden rotate-y-180 max-[1500px]:w-[200px]' src={limg} alt="" />
                </div>
            </div>
            <div className='rounded-lg w-full bg-linear-90 from-[#54CF68] to-[#00827A] flex-col justify-center items-center'>
                <div className='flex justify-between'>
                    <img className='md:block hidden max-[1500px]:w-[200px]' src={limg} alt="" />
                    <div className='flex justify-center items-center text-center mx-auto p-8'>
                        <p>Resolved <br /><span className='text-6xl'>{ResolvedTickets.length}</span> </p>
                    </div>

                    <img className='md:block hidden rotate-y-180 max-[1500px]:w-[200px]' src={limg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProgressAndResolvedBox;