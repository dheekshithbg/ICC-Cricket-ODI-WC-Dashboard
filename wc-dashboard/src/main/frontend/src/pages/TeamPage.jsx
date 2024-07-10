import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

export const TeamPage = () => {
    const [team, setTeam] = useState({});
    const { teamName } = useParams();
    
    useEffect(() => {
        const fetchMatches = async () => {
            let normalizedTeamName = teamName;
            if (teamName.toLowerCase() === 'india') {
                normalizedTeamName = 'India';
            }
            const response = await fetch(`http://localhost:5127/team/${normalizedTeamName}`);
            const data = await response.json();
            setTeam(data);
        };
        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <div>Team not found</div>;
    }

    return (
        <section className='max-container'>
                <h1 className='head-text'>
                    <span className='blue-gradient_text font-semibold drop-shadow'>
                    {" "}
                    {team.teamName}
                </span>{" "}
            </h1>
            <h2 className='subhead-text mt-5'>Latest Matches</h2>
            <MatchDetailCard teamName={team.teamName} match={team.matches && team.matches[0]} />
            {team.matches && team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}
        </section>
    );
};
