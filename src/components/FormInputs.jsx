import React from "react";
import { Input } from "./Styles";
import { Grid } from "@mui/material";
import MultipleSelect from "./MultipleSelect";
// import { FormControl } from "@mui/material";
// import { InputLabel } from "@mui/material";
// import { Select } from "@mui/material";
// import { MenuItem } from "@mui/material";
// import UnstyledSelectIntroduction from "./Test"

function FormInputs() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Input aria-label="First Name" placeholder="First Name..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="Last Name" placeholder="Last Name..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Company" placeholder="Company..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Company" placeholder="Occupation..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Address Line 1" placeholder="Address Line 1..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Address Line 2" placeholder="Address Line 2..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="City" placeholder="City..." />
      </Grid>
      <Grid item xs={6}>
        {/* <UnstyledSelectIntroduction /> */}

        {/* <FormControl fullWidth size="medium">
          <InputLabel id="states-label">States...</InputLabel>
          <Select labelId="states-label" label="States...">
            <MenuItem value="state1">State 1</MenuItem>
            <MenuItem value="state2">State 2</MenuItem>
            <MenuItem value="state3">State 3</MenuItem>
          </Select>
        </FormControl> */}
        <MultipleSelect />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="Zip Code" placeholder="Zip Code..." />
      </Grid>
    </Grid>
  );
}

export default FormInputs;
