import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

export const Meta = ({ article: { by, time, type } }) => {
  return (
    <List>
      {by && (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={by}
              secondary={
                <Typography>
                  <div>{time}</div>
                  <br />
                  Type: {type}
                </Typography>
              }
            />
          </ListItem>
        </>
      )}
    </List>
  );
};


