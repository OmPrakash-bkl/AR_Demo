
import * as React from 'react';
import Box from '@mui/material/Box';


function ProductComp({ link, image }) {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          p: "14px",
          m: "4px",
          bgcolor: 'background.paper',
          height: "500px",
          flexWrap: 'wrap',
          borderRadius: "3px",
        }}
      >
        <img src={image} height="250px" alt="Product images" />
        <img src={image} height="250px" alt="Product images" />
        <img src={image} height="250px" alt="Product images" />
        <img src={image} height="250px" alt="Product images" />
      </Box>
    </div>
  );
}

export default ProductComp;