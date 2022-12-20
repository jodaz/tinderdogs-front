import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreHorizontal } from 'lucide-react';

const ITEM_HEIGHT = 48;

const Menu = ({ children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizontal />
            </IconButton>
            <MuiMenu
                hideBackdrop
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.24)',
                        borderRadius: '8px'
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {React.Children.map(children, child => (
                    <MenuItem
                        key={child}
                        onClick={handleClose}
                    >
                        {React.cloneElement(child)}
                    </MenuItem>
                ))}
            </MuiMenu>
        </div>
    );
}

export default Menu;