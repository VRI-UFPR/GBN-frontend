import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
};

export default function MyModal({ show, setShow, children }) {
    const handleClose = () => setShow(false);

    return (
        <Modal open={show} onClose={handleClose}>
            <Box sx={style}>
                <Box id="modal-description">
                    {children}
                </Box>
            </Box>
        </Modal>
    );
}