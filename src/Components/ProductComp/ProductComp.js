
import * as React from 'react';
import Box from '@mui/material/Box';
import Styles from './ProductComp.module.css';


function ProductComp({ link, image }) {
  return (
    <div style={{ width: '100%' }}>
        <Box
        sx={{
          display: 'flex',
          p: "2px",
          m: "2px",
          flexWrap: 'wrap',
          borderRadius: "3px",
        }}
      className={Styles.parentContainer}
      >
      <Box
        sx={{
          display: 'flex',
          p: "14px",
          m: "2px",
          flexWrap: 'wrap',
          borderRadius: "3px",
        }}
      className={Styles.parentInnerContainer}
      >
        <img src={image} className={Styles.imageTag} alt="Product images" />
        <img src={image} className={Styles.imageTag} alt="Product images" />
        <img src={image} className={Styles.imageTag} alt="Product images" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          p: "14px",
          m: "2px",
          flexWrap: 'wrap',
          borderRadius: "3px",
        }}
      >
        <img src={image} className={Styles.bigImageTag} alt="Product images" />
      </Box>
      </Box>
      
    </div>
  );
}

export default ProductComp;