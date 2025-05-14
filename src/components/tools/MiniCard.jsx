import { Box, Typography, Paper } from '@mui/material';

export default function MiniCard({ title, number, children }) {
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

			{ children }

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
