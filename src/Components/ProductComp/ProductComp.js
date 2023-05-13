
import * as React from 'react';
import Box from '@mui/material/Box';
import Styles from './ProductComp.module.css';
import Button from '@mui/material/Button';


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

      <div className={Styles.btnContainer}>
      <Button variant="contained" color="success" className={Styles.btnComp}>
        Buy Now
      </Button>
      <Button variant="contained" className={Styles.btnComp}>
        Add To Cart
      </Button>
      <Button className={Styles.heartBtnComp}>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
      </Button>
      <Button className={Styles.vrBtnComp}>
      <a href={link}>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 20" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"/></svg>
      </a>
      </Button>
      </div>
      
    </div>
  );
}

export default ProductComp;