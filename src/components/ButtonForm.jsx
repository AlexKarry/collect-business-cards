import React from "react";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ButtonForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              size="large"
              variant="contained"
              fullWidth
              endIcon={<SendIcon />}
              color="success"
            >
              Send
            </Button>
          </Grid>
          {/* ...place for the next button */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ButtonForm;
