import React from 'react';
import ProductComp from '../../Components/ProductComp/ProductComp';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dresses from '../../Assets/Demo_Pics/dressdemo.jpg';
import toys from '../../Assets/Demo_Pics/toydemo.jpg';
import tiles from '../../Assets/Demo_Pics/tilesdemo.jpg';
import furniture from '../../Assets/Demo_Pics/furnituredemo.jpg';
import clocks from '../../Assets/Demo_Pics/clockdemo.jpg';
import monitors from '../../Assets/Demo_Pics/monitordemo.jpg';
import plants from '../../Assets/Demo_Pics/plantdemo.jpg';
import toilets from '../../Assets/Demo_Pics/toiletdemo.jpg';

function Product() {

    const { ProId } = useParams();
    const [ Link, setLink ] = useState("");
    const [ Image, setImage ] = useState("");
    console.log(ProId);

    useEffect(()=> {

        switch(ProId) {

            case "dress":
                setLink("https://mywebar.com/p/Project_3_3uolocplfd?_ga=2.181790959.998937253.1683873061-1215011679.1683694055");
                setImage(dresses);
                break;
            case "clock":
                setLink("https://mywebar.com/p/Project_3_2mxv87zaej?_ga=2.245687372.998937253.1683873061-1215011679.1683694055");
                setImage(clocks);
                break;
            case "monitor":
                setLink("https://mywebar.com/p/Project_0_zds9m91ce2?_ga=2.193768677.998937253.1683873061-1215011679.1683694055");
                setImage(monitors);
                break;
            case "toilet":
                setLink("https://mywebar.com/p/Project_0_fal2y9n0zv?_ga=2.149269374.998937253.1683873061-1215011679.1683694055");
                setImage(toilets);
                break;
            case "toy":
                setLink("https://mywebar.com/p/Project_0_pqqxga6f7c?_ga=2.186343649.998937253.1683873061-1215011679.1683694055");
                setImage(toys);
                break;
            case "plant":
                setLink("https://mywebar.com/p/Project_0_iovdvaxgwg?_ga=2.185248609.998937253.1683873061-1215011679.1683694055");
                setImage(plants);
                break;
            case "furniture":
                setLink("https://mywebar.com/p/Project_0_m20q3d5g81?_ga=2.145009532.998937253.1683873061-1215011679.1683694055");
                setImage(furniture);
                break;
            case "tile":
                setLink("https://mywebar.com/p/Project_0_8dyqze4tgq?_ga=2.160285813.998937253.1683873061-1215011679.1683694055");
                setImage(tiles);
                break;

            default:
                setLink("");
                setImage("");
                break;

        }

    }, [ProId]);



  return (
    <ProductComp link={Link} image={Image} />
  )
}

export default Product;