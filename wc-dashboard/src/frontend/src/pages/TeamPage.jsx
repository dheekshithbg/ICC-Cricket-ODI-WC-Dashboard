import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';

export const TeamPage = () => {
    const [team, setTeam] = useState({});
    const { teamName } = useParams();
    const [matchWins, setMatchWins] = useState(0);
    const pieParams = { height: 150, width: 200, margin: { right: 5 } }; 
    const palette = ['red', 'green'];

    useEffect(() => {
        const fetchMatches = async () => {
            let normalizedTeamName = teamName;
            if (teamName.toLowerCase() === 'india') {
                normalizedTeamName = 'India';
            }
            const apiUrl = import.meta.env.VITE_API_ROOT_URL;
            const response = await fetch(`${apiUrl}/team/${normalizedTeamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data);
            if (data.totalWins) {
                setMatchWins(data.totalWins);
            }
        };
        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <div>Loading...</div>;
    }

    const matchLosses = team.totalMatches - matchWins;

    return (
        <section className='max-container'>
            <div className="flex justify-between items-center">
                <h1 className='head-text'>
                    <span className='blue-gradient_text font-semibold drop-shadow'>
                        {team.teamName}
                    </span>
                </h1>
                <Box>
                    <h2 className="text-md ml-14 mb-2">
                        Win/Loss
                    </h2>
                    <PieChart
                        colors={palette}
                        series={[{ data: [{ value: matchLosses }, { value: matchWins }] }]}
                        {...pieParams}
                    />
                </Box>
            </div>
            <h2 className='subhead-text mt-5'>Latest Matches</h2>
            <MatchDetailCard teamName={team.teamName} match={team.matches && team.matches[0]} />
            {team.matches && team.matches.slice(1).map((match,index) => <MatchSmallCard key={index+1} teamName={team.teamName} match={match} />)}
            <div className="MatchSmallCard bg-white shadow-md rounded-lg p-4 mt-4">
                <Link to={`/teams/${teamName}/matches/2023`} className="text-blue-500 font-bold">More →</Link>
            </div>
        </section>
    );
};
