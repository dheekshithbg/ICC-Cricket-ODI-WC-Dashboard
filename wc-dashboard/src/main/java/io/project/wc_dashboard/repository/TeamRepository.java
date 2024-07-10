package io.project.wc_dashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.project.wc_dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
