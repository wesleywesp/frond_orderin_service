import { Box,Button,Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';

const menu =[1,1,1,1]
export default function IngredientsCategoryTable(){
    return(
        <Box>
            <Card className="mt-1">
                <CardHeader        action={
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>
        } title={"Category"}
                sx={{pt:2, alignItems:"center"}}/>
              
                  <TableContainer component={Paper}>
      <Table xs aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="lefth">ID</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"image"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Card>
        </Box>
    )
}