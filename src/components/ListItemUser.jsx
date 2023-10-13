import {
    Avatar,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import React from "react";
function ListItemUser({ image, primaryText, secondaryText }) {
    return (
        <ListItem>
            <ListItemText
                primary={<Typography variant="p">{primaryText}</Typography>}
            />
        </ListItem>
    );
}
export default ListItemUser;
