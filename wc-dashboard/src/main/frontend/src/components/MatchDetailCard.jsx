import React from 'react'
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({teamName, match}) => {
  if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailsCard">
      <h4> vs  <Link to={otherTeamRoute}> {otherTeam}</Link></h4> 
      <p>{match.date}</p>
      <p>{match.team1} : {match.teamruns1}/{match.teamwkts1}</p> 
      <p>{match.team2} : {match.teamruns2}/{match.teamwkts2}</p> 
      <p>{match.margin}</p>  
      <p>Man of the Match: {match.playerOfMatch}</p> 
      <p>{match.stadium}, {match.city}, {match.venue}</p>
      {/* <br /> */}
    </div>
  );
}
