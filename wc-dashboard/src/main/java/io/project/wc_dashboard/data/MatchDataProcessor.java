package io.project.wc_dashboard.data;

import java.time.LocalDate;

// import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.project.wc_dashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    //private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        
        
        Match match = new Match();
        match.setMatchno(matchInput.getMatchno());
        match.setMatchid(Long.parseLong(matchInput.getMatchid()));
        match.setMatchname(matchInput.getMatchname());
        match.setStadium(matchInput.getStadium());
        match.setCity(matchInput.getCity());
        match.setVenue(matchInput.getVenue());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setSeriesname(matchInput.getSeriesname());
        
        String firstTeam; 
        String secondTeam;
        String firstRuns;
        String secondRuns;
        String firstWkts;
        String secondWkts;
        String firstCap;
        String secondCap;
        
        
        if("bat".equals(matchInput.getToss_choice())){
            firstTeam=matchInput.getToss_winner();
            
            if(matchInput.getToss_winner().equals(matchInput.getTeam1())){
                secondTeam=matchInput.getTeam2();
                firstRuns=matchInput.getTeamruns1();
                secondRuns=matchInput.getTeamruns2();
                firstWkts=matchInput.getTeamwkts1();
                secondWkts=matchInput.getTeamwkts2();
                firstCap=matchInput.getTeamcap1();
                secondCap=matchInput.getTeamcap2();
            }else{
                secondTeam=matchInput.getTeam1();
                firstRuns=matchInput.getTeamruns2();
                secondRuns=matchInput.getTeamruns1();
                firstWkts=matchInput.getTeamwkts2();
                secondWkts=matchInput.getTeamwkts1();
                firstCap=matchInput.getTeamcap2();
                secondCap=matchInput.getTeamcap1();
            }

        }else{
            secondTeam=matchInput.getToss_winner();
            if(matchInput.getToss_winner().equals(matchInput.getTeam1())){
                firstTeam=matchInput.getTeam2();
                firstRuns=matchInput.getTeamruns2();
                secondRuns=matchInput.getTeamruns1();
                firstWkts=matchInput.getTeamwkts2();
                secondWkts=matchInput.getTeamwkts1();
                firstCap=matchInput.getTeamcap2();
                secondCap=matchInput.getTeamcap1();
            }else{
                firstTeam=matchInput.getTeam1();
                firstRuns=matchInput.getTeamruns1();
                secondRuns=matchInput.getTeamruns2();
                firstWkts=matchInput.getTeamwkts1();
                secondWkts=matchInput.getTeamwkts2();
                firstCap=matchInput.getTeamcap1();
                secondCap=matchInput.getTeamcap2();
            }
        }

        match.setTeamcap1(firstCap);
        match.setTeamcap2(secondCap);
        match.setTeam1(firstTeam);
        match.setTeam2(secondTeam);
        match.setTeamruns1(firstRuns);
        match.setTeamruns2(secondRuns);
        match.setTeamwkts1(firstWkts);
        match.setTeamwkts2(secondWkts);
        match.setTossWinner(matchInput.getToss_winner());
        match.setTossChoice(matchInput.getToss_choice());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());
        match.setMatchWinner(matchInput.getMatch_winner());
        match.setMargin(matchInput.getMargin());
        match.setPlayerOfMatch(matchInput.getPlayer_of_match());
        
        return match;
    }

}