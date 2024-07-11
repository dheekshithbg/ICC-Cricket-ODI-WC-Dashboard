import React from "react";
import { Link } from "react-router-dom";

export const YearSelector = ({ teamName, selectedYear }) => {
    let years = [2023, 2019, 2015, 2011, 2007, 2003, 1999, 1996, 1992, 1987, 1983, 1979, 1975];
    
    return (
        <div>
            {years.map(year => (
                <li key={year} className={year === selectedYear ? 'font-bold text-blue-500' : ''}>
                    <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
                </li>
            ))}
        </div>
    );
};
