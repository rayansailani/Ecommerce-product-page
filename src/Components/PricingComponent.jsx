import React from 'react';
import { Box, Typography} from "@mui/material";
const PricingComponent = () => {
    return <Box  width="30%">
        <Box marginBottom="0.4rem" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 600}}>$125.00</Typography>
            <Typography sx={{ color: "hsl(26, 100%, 55%)", fontWeight: 600}}>50%</Typography>
        </Box>
        <Typography variant="body2" sx={{color: "hsl(219, 9%, 45%)", fontWeight: 600}}>$250.00</Typography>
    </Box>
}

export default PricingComponent;