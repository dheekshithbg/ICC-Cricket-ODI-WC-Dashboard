import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';
import { YearSelector } from '../components/YearSelector';

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    let normalizedTeamName = teamName;
    if (teamName.toLowerCase() === 'india') {
        normalizedTeamName = 'India';
    }

    useEffect(() => {
        const fetchMatches = async () => {
            const apiUrl = import.meta.env.VITE_API_ROOT_URL;
            const response = await fetch(`${apiUrl}/team/${normalizedTeamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    }, [teamName, year]);

    if (!matches.length) {
        return <div>Match not found</div>;
    }

    return (
        <div className="grid grid-cols-10 gap-8">
            <div className="col-span-1">
                <h2 className="text-xl font-bold mb-2 mt-14">Select Year</h2>
                <ul className="list-none">
                    <YearSelector teamName={teamName} selectedYear={parseInt(year)} />
                </ul>
            </div>
            
            <div className="col-span-9 flex flex-col items-center space-y-4 mb-14">
                <h1 className="blue-gradient_text text-2xl font-bold mb-4 ">{normalizedTeamName}</h1>
                {matches.map(match => (
                    <MatchDetailCard key={match.id} teamName={teamName} match={match} />
                ))}
            </div>
        </div>
    );
};
