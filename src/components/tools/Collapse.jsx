import { Collapse, Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { useState } from "react";

export default function CollapseComponent( {title, children} ) {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Box 
                elevation={2}
                sx={{
                    px: 4,
                    paddingTop: 2,
                    m: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: 2,
                    backgroundColor: 'background.default',
                    cursor: 'pointer'
                }}
                onClick={() => setOpen((prev) => !prev)}
            >
                <Typography variant='h2'> {title} </Typography>
                <ArrowBackIosIcon 
                    fontSize='medium'
                    sx={{
                        transition: 'transform 1s ease',
                        transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
                    }}
                />
            </Box>

            <Collapse in={open}>
                <Box
                    sx={{
                        p: 4,
                        mx: 4,
                        borderRadius: 2,
                        backgroundColor: '#fff',
                    }}
                >

                {children}

                </Box>
            </Collapse>
        </Box>

    );
}