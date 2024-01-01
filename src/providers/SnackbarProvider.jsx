import React, { useCallback, useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import Alert from '@mui/material/Alert'
import { node } from "prop-types";

const SnackbarContext = React.createContext(null);

export const SnackbarProvider = ({ children }) => {
    const [isSnackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("in snackbar");
    const [snackColor, setSnackColor] = useState("success");
    const [snackVariant, setSnackVariant] = useState("filled");

    const setSnack = useCallback((color, message, variant = "filled") => {
        setSnackOpen(true);
        setSnackColor(color);
        setSnackVariant(variant);
        setSnackMessage(message);
    }, []);

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSnackOpen}
                onClose={() => setSnackOpen(prev => !prev)}
                autoHideDuration={5000}
            >
                <Alert severity={snackColor} variant={snackVariant}>
                    {snackMessage}
                </Alert>
            </Snackbar>

            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
        </>
    )
};


export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
};

SnackbarProvider.propTypes = {
    children: node.isRequired,
};