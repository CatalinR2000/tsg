import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogAddRoom() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={"studentAddRoom"} variant="outlined" color="primary" onClick={handleClickOpen}>
                Camera noua
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Numar camera"
                        type="number"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Locuri camera"
                        type="number"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Student 1"
                        type="text"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Student 2"
                        type="text"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Student 3"
                        type="text"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Student 4"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Adauga
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}