import { Box, Typography, Stack, Paper } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2'; // Icône boîte

export default function MiniCard({ title, number }) {
	return (
		<Paper
			elevation={2}
			sx={{
				p: 2,
				width:'200px',
				display: 'flex',
				alignItems:'center',
				borderRadius: 3,
				columnGap: 2
			}}
		>
			<Box
				sx={{
					p:'10px',
					backgroundColor: 'secondary.main',
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				>
					<Inventory2Icon fontSize="small" />
			</Box>

			<Box sx={{ display:'flex', flexDirection:'column'}}>
				<Typography variant="caption" noWrap color="text.secondary" fontSize={14} >
				{title}
				</Typography>
				<Typography variant="caption" noWrap fontSize={20} fontWeight={'600'}>
				{number}
				</Typography>
			</Box>
		</Paper>
	);
}
