import { Snackbar, Alert } from '@mui/material';

export default function ToastNotification({ onClose, snackbarData }) {
    return (
        <Snackbar open onClose={onClose} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert variant="filled" {...snackbarData} onClose={onClose} />
        </Snackbar>
    );
};