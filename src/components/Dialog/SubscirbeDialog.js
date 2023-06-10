import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Chip } from '@mui/material';
const SubscirbeDialog = (props) => {

    const [text, setText] = React.useState('Copy');
    const [variation, setVariantion] = React.useState('outlined')

    const handleClick = () => {
        setText('Copied!')
        setVariantion('contained')
    }

    const handleSubscribe = () => {
        setText('Copy');
        setVariantion('outlined');
        props.handleState();
      };

    return (
        <Dialog open={props.open} onClose={props.handleState}>
            <DialogTitle>Share</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To share this survey, Please type the email address or copy link to manually sharing it.
                <Chip label={text} sx={{ marginLeft: 1 }} onClick={handleClick} variant={variation} size="small" />
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleSubscribe}>Cancel</Button>
            <Button onClick={handleSubscribe}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default SubscirbeDialog