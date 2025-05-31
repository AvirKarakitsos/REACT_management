import { Box, Typography, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function MiniCard({ title, number, load, children }) {
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
					{!load ? number : <CircularProgress size={20} thickness={5} />}
				</Typography>
			</Box>
			
		</Paper>
	);
}
