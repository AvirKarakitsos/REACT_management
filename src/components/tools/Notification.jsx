import { Snackbar, Alert } from "@mui/material";

export default function Notification({snackbar, handleSnackbar}) {
    return(
        <Snackbar
            open={snackbar.isOpen}
            autoHideDuration={3000}
            onClose={() => handleSnackbar((prev) =>({...prev,isOpen: false}))}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert 
                onClose={() => handleSnackbar((prev) =>({...prev,isOpen: false}))} 
                severity={snackbar.status} 
                sx={{ fontSize: "18px" }}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    )
}