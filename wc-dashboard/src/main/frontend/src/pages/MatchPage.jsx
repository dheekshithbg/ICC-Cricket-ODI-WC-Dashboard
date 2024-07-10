import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName,year } = useParams();
    
    useEffect(() => {
        const fetchMatches = async () => {
            let normalizedTeamName = teamName;
            if (teamName.toLowerCase() === 'india') {
                normalizedTeamName = 'India';
            }
            const response = await fetch(`http://localhost:5127/team/${normalizedTeamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        };
        fetchMatches();
    }, []);

    if (!matches.length) {
        return <div>Match not found</div>;
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold mb-4">Match Page</h1>
            {matches.map(match => (
                <MatchDetailCard teamName={teamName} match={match} />
            ))}
        </div>
    );
};
