import React from "react";
import Box from "@mui/material/Box";
import Styles from './ProductsComp.module.css';
import dresses from '../../Assets/Demo_Pics/dressdemo.jpg';
import toys from '../../Assets/Demo_Pics/toydemo.jpg';
import tiles from '../../Assets/Demo_Pics/tilesdemo.jpg';
import furniture from '../../Assets/Demo_Pics/furnituredemo.jpg';
import clocks from '../../Assets/Demo_Pics/clockdemo.jpg';
import monitors from '../../Assets/Demo_Pics/monitordemo.jpg';
import plants from '../../Assets/Demo_Pics/plantdemo.jpg';
import toilets from '../../Assets/Demo_Pics/toiletdemo.jpg';
import { Link } from 'react-router-dom';


const dressImages = [
    { arModels: { url: dresses, name:'Dresses'}},
    { arModels: { url: dresses, name:'Dresses'}},
    { arModels: { url: dresses, name:'Dresses'}},
    { arModels: { url: dresses, name:'Dresses'}},
    { arModels: { url: dresses, name:'Dresses'} },
    { arModels: { url: dresses, name:'Dresses'} },
    { arModels: { url: dresses, name:'Dresses'} },
    { arModels: { url: dresses, name:'Dresses'} },
  ];

const toysImages = [
    { arModels: { url: toys, name:'Toys'}},
    { arModels: { url: toys, name:'Toys'}},
    { arModels: { url: toys, name:'Toys'}},
    { arModels: { url: toys, name:'Toys'}},
    { arModels: { url: toys, name:'Toys'} },
    { arModels: { url: toys, name:'Toys'} },
    { arModels: { url: toys, name:'Toys'} },
    { arModels: { url: toys, name:'Toys'} },
  ];

const tilesImages = [
    { arModels: { url: tiles, name:'Tiles'}},
    { arModels: { url: tiles, name:'Tiles'}},
    { arModels: { url: tiles, name:'Tiles'}},
    { arModels: { url: tiles, name:'Tiles'}},
    { arModels: { url: tiles, name:'Tiles'} },
    { arModels: { url: tiles, name:'Tiles'} },
    { arModels: { url: tiles, name:'Tiles'} },
    { arModels: { url: tiles, name:'Tiles'} },
  ];
 
  const furnitureImages = [
    { arModels: { url: furniture, name:'Furniture'}},
    { arModels: { url: furniture, name:'Furniture'}},
    { arModels: { url: furniture, name:'Furniture'}},
    { arModels: { url: furniture, name:'Furniture'}},
    { arModels: { url: furniture, name:'Furniture'} },
    { arModels: { url: furniture, name:'Furniture'} },
    { arModels: { url: furniture, name:'Furniture'} },
    { arModels: { url: furniture, name:'Furniture'} },
  ];  

const clocksImages = [
    { arModels: { url: clocks, name:'Clocks'}},
    { arModels: { url: clocks, name:'Clocks'}},
    { arModels: { url: clocks, name:'Clocks'}},
    { arModels: { url: clocks, name:'Clocks'}},
    { arModels: { url: clocks, name:'Clocks'} },
    { arModels: { url: clocks, name:'Clocks'} },
    { arModels: { url: clocks, name:'Clocks'} },
    { arModels: { url: clocks, name:'Clocks'} },
  ];

const monitorsImages = [
    { arModels: { url: monitors, name:'Monitors'}},
    { arModels: { url: monitors, name:'Monitors'}},
    { arModels: { url: monitors, name:'Monitors'}},
    { arModels: { url: monitors, name:'Monitors'}},
    { arModels: { url: monitors, name:'Monitors'} },
    { arModels: { url: monitors, name:'Monitors'} },
    { arModels: { url: monitors, name:'Monitors'} },
    { arModels: { url: monitors, name:'Monitors'} },
  ];  

const plantsImages = [
    { arModels: { url: plants, name:'Plants'}},
    { arModels: { url: plants, name:'Plants'}},
    { arModels: { url: plants, name:'Plants'}},
    { arModels: { url: plants, name:'Plants'}},
    { arModels: { url: plants, name:'Plants'} },
    { arModels: { url: plants, name:'Plants'} },
    { arModels: { url: plants, name:'Plants'} },
    { arModels: { url: plants, name:'Plants'} },
  ];

const toiletsImages = [
    { arModels: { url: toilets, name:'Toilets'}},
    { arModels: { url: toilets, name:'Toilets'}},
    { arModels: { url: toilets, name:'Toilets'}},
    { arModels: { url: toilets, name:'Toilets'}},
    { arModels: { url: toilets, name:'Toilets'} },
    { arModels: { url: toilets, name:'Toilets'} },
    { arModels: { url: toilets, name:'Toilets'} },
    { arModels: { url: toilets, name:'Toilets'} },
  ];  

function ProductsComp() {
  return (
    <>
    <Box textAlign='center'>
        <h2><u>All Products</u></h2> 
    </Box>
       <h3>Dresses</h3>
        <Link to="/Product/dress">
        <div className={Styles.imageWrapper}>
            {dressImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Tiles</h3>
        <Link to="/Product/tile">
        <div className={Styles.imageWrapper}>
            {tilesImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Furniture</h3>
        <Link to="/Product/furniture">
        <div className={Styles.imageWrapper}>
            {furnitureImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Clocks</h3>
        <Link to="/Product/clock">
        <div className={Styles.imageWrapper}>
            {clocksImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Plants</h3>
        <Link to="/Product/plant">
        <div className={Styles.imageWrapper}>
            {plantsImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Monitors</h3>
        <Link to="/Product/monitor">
        <div className={Styles.imageWrapper}>
            {monitorsImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Toilets</h3>
        <Link to="/Product/toilet">
        <div className={Styles.imageWrapper}>
            {toiletsImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>

        <h3>Toys</h3>
        <Link to="/Product/toy">
        <div className={Styles.imageWrapper}>
            {toysImages.map((image, index) => (
            <div className={Styles.imageContainer} key={index}>
                <img src={image.arModels.url} alt={image.arModels.name} className={Styles.arImage} />
            </div>
            ))}
        </div>
        </Link>
    </>
  );
}

export default ProductsComp;