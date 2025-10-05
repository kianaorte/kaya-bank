import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PetIcon from "@mui/icons-material/Pets";
// import { Avatar } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Kaya Bank
          </Typography>
        </Toolbar>
        {/* <Avatar alt="Kaya Bank Logo" src="/static/images/avatar/1.jpg" /> */}
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
