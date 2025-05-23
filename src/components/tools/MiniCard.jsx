import { Box, Typography, Paper } from '@mui/material';

export default function MiniCard({ title, number, children }) {
	return (
		<Paper
			elevation={2}
			sx={{
				px: 2,
				py: 1,
				width:'250px',
				display: 'flex',
				alignItems:'center',
				borderRadius: 3,
				columnGap: 2,
				backgroundColor: '#fff'
			}}
		>

			{ children }

			<Box sx={{ display:'flex', flexDirection:'column'}}>
				<Typography variant="caption" noWrap color="text.secondary" fontSize={16} fontWeight={'500'} >
					{title}
				</Typography>
				<Typography variant="caption" noWrap fontSize={20} fontWeight={'600'}>
					{number}
				</Typography>
			</Box>
			
		</Paper>
	);
}
