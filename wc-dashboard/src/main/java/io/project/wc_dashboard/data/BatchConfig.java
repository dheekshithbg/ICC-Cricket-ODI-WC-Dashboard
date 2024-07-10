package io.project.wc_dashboard.data;
import io.project.wc_dashboard.model.Match;

import javax.sql.DataSource;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.transaction.PlatformTransactionManager;



@Configuration
public class BatchConfig {
    private final String[] FIELD_NAMES = new String[] {"matchno","matchid","matchname","seriesname","date", "teamid1","team1","teamcap1","teamruns1","teamwkts1","teamextras1","teamid2",
        "team2","teamcap2","teamruns2","teamwkts2","teamextras2","stadium","city","venue","umpire1",
        "umpire2","toss_winner","toss_choice","match_winner","margin","player_of_match"};

    @Bean
    public FlatFileItemReader<MatchInput> reader() {
        return new FlatFileItemReaderBuilder<MatchInput>()
                .name("personItemReader")
                .resource(new ClassPathResource("match-data.csv"))
                .delimited()
                .names(FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<MatchInput>() {{
                    setTargetType(MatchInput.class);
                }})
                .build();
     }
    

    @Bean
    public MatchDataProcessor processor() {
        return new MatchDataProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<Match> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Match>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO match (matchno,matchid,matchname,seriesname,date, teamid1,team1,teamcap1,teamruns1,teamwkts1,teamextras1,teamid2,team2,teamcap2,teamruns2,teamwkts2,teamextras2,stadium,city,venue,umpire1,umpire2,toss_winner,toss_choice,match_winner,margin,player_of_match) "
                        + " VALUES (:matchno,:matchid,:matchname,:seriesname,:date,:teamid1,:team1,:teamcap1,:teamruns1,:teamwkts1,:teamextras1,:teamid2,:team2,:teamcap2,:teamruns2,:teamwkts2,:teamextras2,:stadium,:city,:venue,:umpire1,:umpire2,:tossWinner,:tossChoice,:matchWinner,:margin,:playerOfMatch)")
                .dataSource(dataSource)
                .build();
    }
    

    @Bean
    public Job importUserJob(JobRepository jobRepository,JobCompletionNotificationListener listener, Step step1) {
        return new JobBuilder("importUserJob", jobRepository)
                .incrementer(new RunIdIncrementer())
                .listener(listener)
                .flow(step1)
                .end()
                .build();
    }

    @Bean
    public Step step1(JobRepository jobRepository, PlatformTransactionManager transactionManager, JdbcBatchItemWriter<Match> writer) {
        return new StepBuilder("step1", jobRepository)
                .<MatchInput, Match> chunk(10, transactionManager)
                .reader(reader())
                .processor(processor())
                .writer(writer)
                .build();
    }

}
