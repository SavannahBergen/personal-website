import { Divider, Typography } from "@mui/material";
import EducationCard from "./EducationCard";

export default function WorkLife(){
return(
<div
style={{marginTop:'2vh'}}
>
   <Typography 
   variant="h4" 
   align="left"
   sx={{padding: '0.5em'}}
   >
     Education
    </Typography> 
    <Divider/>
  <EducationCard/>
    </div>)
}