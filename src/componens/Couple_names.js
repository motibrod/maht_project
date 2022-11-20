import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import names from "../names";

const Couple_names = () => {
// names.na;
  return (
    <table sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10px",
      }}>
      <tbody>
        <tr>
          <td>
            <Typography sx={{margin: 10 , fontSize: 100,fontFamily: "Dancing Script"}} variant="h4" gutterBottom>
              Jony & Lily
            </Typography>
          </td>
          <td>
            <Avatar
              sx={{ height: 200, width: 200 }}
              src="images/logo.png"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Couple_names;
