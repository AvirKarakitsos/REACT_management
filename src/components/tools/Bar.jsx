import { BarChart } from '@mui/x-charts/BarChart';

export default function Bar( {table} ) {
    //scaleType: 'band',
    return(
        <BarChart
            height={300}
            borderRadius={8}
            xAxis={ table.x }
            series={table.series}
        />
    )
}
