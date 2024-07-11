import React from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;

  const reverseDate = (dateString) => {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    } else {
      return 'Invalid date format';
    }
  };

  const normalizedTeamName = teamName === "india" ? "India" : teamName;
  const otherTeam = match.team1 === normalizedTeamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isWinner = teamName === match.matchWinner;

  return (
    <div className={`MatchSmallCard bg-white shadow-md rounded-lg p-4 mt-4 ${isWinner ? 'border-r-4 border-green-500' : 'border-r-4 border-red-500'}`}>
      <div className="flex justify-between items-center">
        <p>
          vs <Link to={otherTeamRoute} className="text-blue-500">{otherTeam}</Link>
        </p>
        <p className="ml-auto">{reverseDate(match.date)}</p>
      </div>
      <p>{match.team1}: {match.teamruns1}/{match.teamwkts1}</p>
      <p>{match.team2}: {match.teamruns2}/{match.teamwkts2}</p>
      <p>{match.margin}</p>
    </div>
  );
};
