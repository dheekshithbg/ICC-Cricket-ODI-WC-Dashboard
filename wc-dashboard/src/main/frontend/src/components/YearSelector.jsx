import React from 'react';
import { Link } from 'react-router-dom';

// export const YearSelector = ({ teamName }) => {
//   let years = [];
//   const startYear = parseInt(process.env.REACT_APP_DATA_START_YEAR, 10);
//   const endYear = parseInt(process.env.REACT_APP_DATA_END_YEAR, 10);

//   for (let i = startYear; i <= endYear; i++) {
//     years.push(i);
//   }

//   return (
//     <ol className="text-right list-none">
//       {years.map(year => (
//         <li key={year} className="my-2">
//           <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
//         </li>
//       ))}
//     </ol>
//   );
// };

function YearSelector(){
    return (
        <div>
            <p>Hello year</p>
        </div>
    );
}

export default YearSelector;