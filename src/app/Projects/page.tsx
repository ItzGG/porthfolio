"use client";

import { itim } from "@/componants/fonts/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Typography
          className={itim.className}
          variant="h2"
          sx={{ color: "white" }}
        >
          Projects
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginTop: 5 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "90%" }}
        >
          <Grid item xs={8} lg={4}>
            <Box sx={{ height: 250, bgcolor: "white" }}></Box>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Box sx={{ height: 250, bgcolor: "white" }}></Box>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Box sx={{ height: 250, bgcolor: "white" }}></Box>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Box sx={{ height: 250, bgcolor: "white" }}></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
