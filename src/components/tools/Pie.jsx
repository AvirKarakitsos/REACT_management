import { PieChart } from '@mui/x-charts/PieChart';

export default function Pie({ table }) {


    return (
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
}