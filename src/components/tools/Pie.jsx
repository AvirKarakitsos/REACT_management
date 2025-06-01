import { PieChart } from '@mui/x-charts/PieChart';
import CircularProgress from '@mui/material/CircularProgress';

export default function Pie({ table, load }) {

    if(!load) return (
        <PieChart
            series={[
                {
                data: table,
                },
            ]}
            width={200}
            height={200}
        />			
    )
    else return(<CircularProgress/>)
}