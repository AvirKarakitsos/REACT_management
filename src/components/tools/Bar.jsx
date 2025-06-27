import { BarChart } from '@mui/x-charts/BarChart';
import CircularProgress from '@mui/material/CircularProgress';

export default function Bar( {table, load} ) {

    if(!load) return(
        <BarChart
            height={300}
            borderRadius={8}
            xAxis={ table.x }
            series={table.series}
        />)
    else return(<CircularProgress/>)
}
