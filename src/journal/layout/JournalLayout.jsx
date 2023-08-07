/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWith = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWith={drawerWith} />
      <SideBar drawerWidth={drawerWith} />
      <Box component="main" sx={{ flexGrow: 1, pl: 3, pr: 3, pb: 3, pt: 11 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
