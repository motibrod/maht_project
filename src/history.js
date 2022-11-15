import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function History() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <Typography
        variant="h2"
        padding={3}
        textAlign="center"
        margin="auto"
        marginTop={5}
      >
        Eazy Gift
      </Typography>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={800}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        backgroundColor="#f0f0f5"
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={dense}
                onChange={(event) => setDense(event.target.checked)}
              />
            }
            label="Enable dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            display="flex"
            flexDirection={"column"}
            fontSize="35px"
          >
            Gift's you given
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Box>
    </div>
  );
}
