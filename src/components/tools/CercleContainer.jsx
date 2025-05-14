import { Box } from '@mui/material';

export default function CercleContainer({ children }) {
	return (
        <Box
            sx={{
                p:'8px',
                backgroundColor: 'secondary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                {children}
        </Box>
    )
}
