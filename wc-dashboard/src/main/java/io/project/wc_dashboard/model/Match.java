package io.project.wc_dashboard.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Match {
    
    @Id
    private String matchno;
    private long matchid;
    private String matchname;
    private String seriesname;
    private LocalDate date;      
    private String teamid1;
    private String team1;
    private String teamcap1;
    private String teamruns1;
    private String teamwkts1;
    private String teamextras1;
    private String teamid2;
    private String team2;
    private String teamcap2;
    private String teamruns2;
    private String teamwkts2;
    private String teamextras2;
    private String stadium;
    private String city;
    private String venue;
    private String umpire1;
    private String umpire2;
    private String tossWinner;
    private String tossChoice;
    private String matchWinner;
    private String margin;
    private String playerOfMatch;
    public String getMatchno() {
        return matchno;
    }
    public void setMatchno(String matchno) {
        this.matchno = matchno;
    }
    public long getMatchid() {
        return matchid;
    }
    public void setMatchid(long matchid) {
        this.matchid = matchid;
    }
    public String getMatchname() {
        return matchname;
    }
    public void setMatchname(String matchname) {
        this.matchname = matchname;
    }
    public String getSeriesname() {
        return seriesname;
    }
    public void setSeriesname(String seriesname) {
        this.seriesname = seriesname;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public String getTeamid1() {
        return teamid1;
    }
    public void setTeamid1(String teamid1) {
        this.teamid1 = teamid1;
    }
    public String getTeam1() {
        return team1;
    }
    public void setTeam1(String team1) {
        this.team1 = team1;
    }
    public String getTeamcap1() {
        return teamcap1;
    }
    public void setTeamcap1(String teamcap1) {
        this.teamcap1 = teamcap1;
    }
    public String getTeamruns1() {
        return teamruns1;
    }
    public void setTeamruns1(String teamruns1) {
        this.teamruns1 = teamruns1;
    }
    public String getTeamwkts1() {
        return teamwkts1;
    }
    public void setTeamwkts1(String teamwkts1) {
        this.teamwkts1 = teamwkts1;
    }
    public String getTeamextras1() {
        return teamextras1;
    }
    public void setTeamextras1(String teamextras1) {
        this.teamextras1 = teamextras1;
    }
    public String getTeamid2() {
        return teamid2;
    }
    public void setTeamid2(String teamid2) {
        this.teamid2 = teamid2;
    }
    public String getTeam2() {
        return team2;
    }
    public void setTeam2(String team2) {
        this.team2 = team2;
    }
    public String getTeamcap2() {
        return teamcap2;
    }
    public void setTeamcap2(String teamcap2) {
        this.teamcap2 = teamcap2;
    }
    public String getTeamruns2() {
        return teamruns2;
    }
    public void setTeamruns2(String teamruns2) {
        this.teamruns2 = teamruns2;
    }
    public String getTeamwkts2() {
        return teamwkts2;
    }
    public void setTeamwkts2(String teamwkts2) {
        this.teamwkts2 = teamwkts2;
    }
    public String getTeamextras2() {
        return teamextras2;
    }
    public void setTeamextras2(String teamextras2) {
        this.teamextras2 = teamextras2;
    }
    public String getStadium() {
        return stadium;
    }
    public void setStadium(String stadium) {
        this.stadium = stadium;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getUmpire1() {
        return umpire1;
    }
    public void setUmpire1(String umpire1) {
        this.umpire1 = umpire1;
    }
    public String getUmpire2() {
        return umpire2;
    }
    public void setUmpire2(String umpire2) {
        this.umpire2 = umpire2;
    }
    public String getTossWinner() {
        return tossWinner;
    }
    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }
    public String getTossChoice() {
        return tossChoice;
    }
    public void setTossChoice(String tossChoice) {
        this.tossChoice = tossChoice;
    }
    public String getMatchWinner() {
        return matchWinner;
    }
    public void setMatchWinner(String matchWinner) {
        this.matchWinner = matchWinner;
    }
    public String getMargin() {
        return margin;
    }
    public void setMargin(String margin) {
        this.margin = margin;
    }
    public String getPlayerOfMatch() {
        return playerOfMatch;
    }
    public void setPlayerOfMatch(String playerOfMatch) {
        this.playerOfMatch = playerOfMatch;
    }
    
    
    
    
}
