import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function MemberCard({ member }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {member.firstname} {member.lastname}
          </Typography>
          <Typography variant="h4" component="div">
            {member.role}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            describes the heading
          </Typography>
          <Typography variant="body1">
            Card content
            <br />
            {'"describes the content"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Card Button</Button>
        </CardActions>
      </Card>
    </div>
  );
}
