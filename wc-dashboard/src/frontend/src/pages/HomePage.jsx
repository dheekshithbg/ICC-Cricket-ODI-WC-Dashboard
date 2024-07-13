import React from 'react';
import { teamInfo } from '../constants';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <section className='home-container'>
            <div className='py-7 flex flex-col items-center'>
                <h1 className='head-text text-center mb-8'>Cricket World Cup ODI Dashboard</h1>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-12 justify-center items-center'>
                    {teamInfo.map((team1) => (
                        <Link to={`/teams/${team1.name}`} key={team1.name}>
                            <div className='block-container relative w-32 h-32'>
                                <div className='rounded-xl absolute inset-0 bg-gray-200'></div>
                                <div className='btn-front rounded-xl flex flex-col justify-center items-center relative'>
                                    <img
                                        src={team1.imageUrl}
                                        alt={team1.name}
                                        className='w-16 h-16 object-contain mb-2'
                                    />
                                    <h2 className='text-sm'>{team1.name}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
