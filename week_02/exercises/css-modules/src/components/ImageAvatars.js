import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Badge, ButtonGroup, Alert } from "@mui/material";

export default function ImageAvatars() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={1} color="secondary" variant="dot">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Badge>
        <Badge badgeContent={2} color="secondary" overlap="circular">
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </Badge>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
      <ButtonGroup size="small" variant="contained">
        <button>Hello world</button>
        <button>Hello world</button>
        <button>Hello world</button>
      </ButtonGroup>
      <Alert variant="outlined" severity="success">
        This is a success Alert.
      </Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </div>
  );
}
