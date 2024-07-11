import React from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const normalizedTeamName = teamName === "india" ? "India" : teamName;
  const otherTeam = match.team1 === normalizedTeamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isWinner = normalizedTeamName === match.winner;

  return (
    <div className="MatchSmallCard bg-white shadow-md rounded-lg p-4 mt-4">
      <p>
        vs <Link to={otherTeamRoute} className="text-blue-500">{otherTeam}</Link>
      </p>
      <p>{match.team1}: {match.teamruns1}/{match.teamwkts1}</p>
      <p>{match.team2}: {match.teamruns2}/{match.teamwkts2}</p>
      <p>{match.margin}</p>
    </div>
  );
};
