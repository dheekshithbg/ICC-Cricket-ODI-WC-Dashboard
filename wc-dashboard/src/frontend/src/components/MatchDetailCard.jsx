import React from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({ teamName, match }) => {
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
    <div className={isWinner ? 'MatchDetailWinCard' : 'MatchDetailLossCard'}>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Teams: {isWinner}</h2>
        <p className="text-lg">
          {normalizedTeamName} vs <Link to={otherTeamRoute} className="text-blue-500">{otherTeam}</Link>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Date:</h2>
        <p>{reverseDate(match.date)}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Scores:</h2>
        <p>{match.team1}: {match.teamruns1}/{match.teamwkts1}</p>
        <p>{match.team2}: {match.teamruns2}/{match.teamwkts2}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Result:</h2>
        <p>{match.margin}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Man of the Match:</h2>
        <p>{match.playerOfMatch}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Venue:</h2>
        <p>{match.stadium}, {match.city}, {match.venue}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">{match.team1} Captain:</h2>
        <p>{match.teamcap1}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">{match.team2} Captain:</h2>
        <p>{match.teamcap2}</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Series:</h2>
        <p>{match.seriesname}</p>
      </div>
    </div>
  );
};
