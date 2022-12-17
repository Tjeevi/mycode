import React, { useState } from "react"
import kit1 from "./Assets/kitchan1.jpg"
import kit2 from "./Assets/kitchan2.jpg"
import kit3 from "./Assets/kitchan3.jpg"
import kit4 from "./Assets/kitchan4.jfif"
import kit5 from "./Assets/furni1.jpg"
import kit6 from "./Assets/kitchan5.jpg"
import kit7 from "./Assets/kitchan6.jpg"
import kit8 from "./Assets/kitchan7.jpg"
import kit9 from "./Assets/kitchan8.jpg"
import kit10 from "./Assets/kitchan9.jpg"
import kit11 from "./Assets/kitchan10.jpg"
import kit12 from "./Assets/kitchan11.jpg"
import kit13 from "./Assets/kitchan12.jpg"
import kit14 from "./Assets/kitchan13.jpg"
import kit15 from "./Assets/kitchan14.jpg"
import kit16 from "./Assets/kitchan15.jpg"
import hal1 from "./Assets/hall1.jpg"
import hal2 from "./Assets/hall2.jpg"
import hal3 from "./Assets/hall3.jpg"
import hal4 from "./Assets/hall4.jpg"
import hal5 from "./Assets/furni3.jpg"
import hal6 from "./Assets/hall5.jpg"
import hal7 from "./Assets/hall6.jpg"
import hal8 from "./Assets/hall7.jpg"
import hal9 from "./Assets/hall8.jpg"
import hal10 from "./Assets/hall9.jpg"
import hal11 from "./Assets/hall10.jpg"
import hal12 from "./Assets/hall11.jpg"
import hal13 from "./Assets/hall12.jpg"
import hal14 from "./Assets/hall13.jpg"
import hal15 from "./Assets/hall14.jpg"
import hal16 from "./Assets/hall15.jpg"
import hal17 from "./Assets/hall16.jpg"
import hal18 from "./Assets/hall17.jpg"
import hal19 from "./Assets/hall18.jpg"
import hal20 from "./Assets/hall19.jpg"
import hal21 from "./Assets/hall20.jpg"
import hal22 from "./Assets/hall21.jpg"
import hal23 from "./Assets/hall22.jpg"
import hal24 from "./Assets/hall23.jpg"
import hal25 from "./Assets/hall24.jpg"
import hal26 from "./Assets/hall25.jpg"
import hal27 from "./Assets/hall26.jpg"
import hal28 from "./Assets/hall27.jpg"
import hal29 from "./Assets/hall28.jpg"
import bedd1 from "./Assets/bed1.jpg"
import bedd2 from "./Assets/bed2.jpg"
import bedd3 from "./Assets/bed3.jpg"
import bedd4 from "./Assets/bed4.jfif"
import bedd5 from "./Assets/bed5.jpg"
import bedd6 from "./Assets/bed6.jpg"
import bedd7 from "./Assets/bed7.jpg"
import bedd8 from "./Assets/bed8.jpg"
import bedd9 from "./Assets/bed9.jpg"
import bedd10 from "./Assets/bed10.jpg"
import bedd11 from "./Assets/bed11.jpeg"
import bedd12 from "./Assets/bed12.jpg"
import bedd13 from "./Assets/bed13.jpg"
import bedd14 from "./Assets/bed14.jpg"
import bedd15 from "./Assets/bed15.jpg"
import bedd16 from "./Assets/bed16.jpg"
import bedd17 from "./Assets/bed17.jpg"
import bedd18 from "./Assets/bed18.jpg"
import bedd19 from "./Assets/bed19.jpg"
import bedd20 from "./Assets/bed20.jpg"
import bedd21 from "./Assets/bed21.jpg"
import bedd22 from "./Assets/bed22.jpg"
import bedd23 from "./Assets/bed23.jpg"
import bedd24 from "./Assets/bed24.jpg"
import bedd25 from "./Assets/bed25.jpg"
import bedd26 from "./Assets/bed26.jpg"
import bedd27 from "./Assets/bed27.jpg"
import bedd28 from "./Assets/bed28.jpeg"
import bedd29 from "./Assets/bed29.jpg"
import bedd30 from "./Assets/bed30.jpeg"
import bedd31 from "./Assets/bed31.jpg"
import bedd32 from "./Assets/bed32.jpg"
import bedd34 from "./Assets/bed34.jpg"


function Product(){
  const[menu,setMenu]=useState([
    {
      id: 1,
      title: 'Bedsofa',
      category: 'Hall',
      price: 7400,
      img:hal1,
    },
    {
      id: 2,
      title: 'Table',
      category: 'Kitchan',
      price: 6300,
      img:kit1,
    },
    {
      id: 3,
      title: 'Laptop Table',
      category: 'BedRoom',
      price: 2500,
      img:bedd1,
    },
    {
      id: 4,
      title: 'Sofa',
      category: 'Hall',
      price: 4000,
      img:hal2,
    },
    {
      id: 5,
      title: 'Table',
      category: 'Kitchan',
      price: 3400,
      img:kit2,
    },
    {
      id: 6,
      title: 'Dressing Table',
      category: 'BedRoom',
      price: 4150,
      img:bedd2,
    },
    {
      id: 7,
      title: 'Teapoy',
      category: 'Hall',
      price: 6000,
      img:hal3,
    },
    {
      id: 8,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 8490,
      img:kit3,
    },
    {
      id: 9,
      title: 'Cupboard',
      category: 'BedRoom',
      price: 7400,
      img:bedd3,
    },
    {
      id: 10,
      title: 'Teapoy',
      category: 'Hall',
      price: 5000,
      img:hal4 ,
    },
    {
      id: 11,
      title: 'Kitchan Cupboard',
      category: 'Kitchan',
      price: 8100,
      img:kit4,
    },
    {
      id: 12,
      title: 'Door',
      category: 'BedRoom',
      price: 4800,
      img:bedd4,
    },
    {
      id: 13,
      title: 'Poja Room Cupboard',
      category: 'Hall',
      price: 5000,
      img:hal5,
    },
    {
      id: 14,
      title: 'Chair',
      category: 'Kitchan',
      price: 3000,
      img:kit5,
    },
    {
      id: 15,
      title: 'Chair',
      category: 'BedRoom',
      price: 4280,
      img:bedd5,
    },
    {
      id: 16,
      title: 'Dressing Table Chair',
      category: 'Hall',
      price: 2000,
      img:hal6,
    },
    {
      id: 17,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 10000,
      img:kit6,
    },
    {
      id: 18,
      title: 'Bed',
      category: 'BedRoom',
      price: 1500,
      img:bedd6,
    },
    {
      id: 19,
      title: 'Steel Chair',
      category: 'Hall',
      price: 4000,
      img:hal7,
    },
    {
      id: 20,
      title: 'Steel Chair',
      category: 'Kitchan',
      price: 3400,
      img:kit7,
    },
    {
      id: 21,
      title: 'Dressing Table',
      category: 'BedRoom',
      price: 5150,
      img:bedd7,
    },
    {
      id: 22,
      title: 'Teapoy',
      category: 'Hall',
      price: 6500,
      img:hal8,
    },
    {
      id: 23,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 8490,
      img:kit8,
    },
    {
      id: 24,
      title: 'Pillow',
      category: 'BedRoom',
      price: 700,
      img:bedd8,
    },
    {
      id: 25,
      title: 'Teapoy',
      category: 'Hall',
      price: 5700,
      img:hal9 ,
    },
    {
      id: 26,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 5100,
      img:kit9,
    },
    {
      id: 27,
      title: 'Laptop Table',
      category: 'BedRoom',
      price: 6800,
      img:bedd9,
    },
    {
      id: 28,
      title: 'Dressing Table',
      category: 'Hall',
      price: 5400,
      img:hal10,
    },
    {
      id: 29,
      title: 'Dinnig Table',
      category: 'Kitchan',
      price: 3000,
      img:kit10,
    },
    {
      id: 30,
      title: 'Writing Table',
      category: 'BedRoom',
      price: 4280,
      img:bedd10,
    },
    {
      id: 31,
      title: 'Teapoy',
      category: 'Hall',
      price: 5900,
      img:hal11,
    },
    {
      id: 32,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 6300,
      img:kit11,
    },
    {
      id: 33,
      title: ' Table',
      category: 'BedRoom',
      price: 2800,
      img:bedd11,
    },
    {
      id: 34,
      title: 'Teapoy',
      category: 'Hall',
      price: 4700,
      img:hal12,
    },
    {
      id: 35,
      title: 'Steel Chair',
      category:'Kitchan',
      price: 3400,
      img:kit12,
    },
    {
      id: 36,
      title: 'Pillow',
      category: 'BedRoom',
      price: 560,
      img:bedd12,
    },
    {
      id: 37,
      title: 'Chair',
      category: 'Hall',
      price: 2000,
      img:hal13,
    },
    {
      id: 38,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 4490,
      img:kit13,
    },
    {
      id: 39,
      title: 'Cupboard',
      category: 'BedRoom',
      price: 4400,
      img:bedd13,
    },
    {
      id: 40,
      title: 'Chair',
      category: 'Hall',
      price: 3000,
      img:hal14 ,
    },
    {
      id: 41,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 3100,
      img:kit14,
    },
    {
      id: 42,
      title: 'Laptop Table',
      category: 'BedRoom',
      price: 4800,
      img:bedd14,
    },
    {
      id: 43,
      title: 'Chair',
      category: 'Hall',
      price: 2300,
      img:hal15,
    },
    {
      id: 44,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 11300,
      img:kit15,
    },
    {
      id: 45,
      title: 'Cupboard',
      category: 'BedRoom',
      price: 4280,
      img:bedd15,
    },
    {
      id: 46,
      title: 'Steel Chair',
      category: 'Hall',
      price: 7400,
      img:hal16,
    },
    
    {
      id: 47,
      title: 'Cupboard',
      category: 'BedRoom',
      price: 7500,
      img:bedd16,
    },
    {
      id: 48,
      title: 'Chair',
      category: 'Hall',
      price: 4400,
      img:hal17,
    },
    {
      id: 49,
      title: 'Dining Table',
      category: 'Kitchan',
      price: 8400,
      img:kit16,
    },
    {
      id: 50,
      title: 'Table',
      category: 'BedRoom',
      price: 4150,
      img:bedd17,
    },
    {
      id: 51,
      title: 'Sofa',
      category: 'Hall',
      price: 6500,
      img:hal18,
    },
    
    {
      id: 52,
      title: 'Table',
      category: 'BedRoom',
      price: 4400,
      img:bedd18,
    },
    {
      id: 53,
      title: 'Sofa',
      category: 'Hall',
      price: 6600,
      img:hal19 ,
    },
    
    {
      id: 54,
      title: 'Bed',
      category: 'BedRoom',
      price: 2800,
      img:bedd19,
    },
    {
      id: 55,
      title: 'Sofa',
      category: 'Hall',
      price: 7000,
      img:hal20,
    },

    {
      id: 56,
      title: 'Chair',
      category: 'BedRoom',
      price: 4280,
      img:bedd20,
    },
    {
      id: 57,
      title: 'Sofa',
      category: 'Hall',
      price: 5800,
      img:hal21,
    },
    {
      id: 58,
      title: 'Chair',
      category: 'Hall',
      price: 1300,
      img:hal22,
    },
    {
      id: 59,
      title: 'Chair',
      category: 'BedRoom',
      price: 4280,
      img:bedd21,
    },
      {
        id: 60,
        title: 'Table',
        category: 'BedRoom',
        price: 6280,
        img:bedd22,
      },   
       {
        id: 61,
        title: 'Bed',
        category: 'BedRoom',
        price: 4880,
        img:bedd23,
      },
      {
        id: 62,
        title: 'Chair',
        category: 'BedRoom',
        price: 4280,
        img:bedd24,
      },{
        id: 63,
        title: 'Chair',
        category: 'BedRoom',
        price: 4480,
        img:bedd25,
      },
      {
        id: 64,
        title: 'Table',
        category: 'BedRoom',
        price: 4680,
        img:bedd26,
      },{
        id: 65,
        title: 'Chair',
        category: 'BedRoom',
        price: 2300,
        img:bedd27,
      },{
        id: 66,
        title: 'Bed',
        category: 'BedRoom',
        price: 2980,
        img:bedd28,
      },{
        id: 67,
        title: 'Chair',
        category: 'BedRoom',
        price: 3200,
        img:bedd29,
      },{
        id: 68,
        title: 'Cot',
        category: 'BedRoom',
        price: 4000,
        img:bedd30,
      },
      {
        id: 69,
        title: 'Bed Cot',
        category: 'BedRoom',
        price: 7900,
        img:bedd31,
      },{
        id: 70,
        title: 'Sofa',
        category: 'BedRoom',
        price: 6800,
        img:bedd32,
      },{
        id: 71,
        title: 'Dressing Table',
        category: 'BedRoom',
        price: 8200,
        img:bedd34,
      },
      {
        id: 72,
        title: ' Cupboard',
        category: 'Hall',
        price: 7500,
        img:hal23,
      },    {
        id: 73,
        title: 'Sofa',
        category: 'Hall',
        price: 9000,
        img:hal24,
      },    {
        id: 74,
        title: 'Bed Sofa',
        category: 'Hall',
        price: 15000,
        img:hal25,
      },    {
        id: 75,
        title: 'Sofa',
        category: 'Hall',
        price: 9800,
        img:hal26,
      },    {
        id: 76,
        title: 'Sofa',
        category: 'Hall',
        price: 12000,
        img:hal27,
      },    {
        id: 77,
        title: 'Sofa',
        category: 'Hall',
        price: 5700,
        img:hal28,
      },    {
        id: 78,
        title: 'Cupboard',
        category: 'Hall',
        price: 5800,
        img:hal29,
      },
      
  ]
  
)
const[menulist,setMenulist]=useState(menu)

const cate=menu.map(food=>food.category)
console.log(cate);

const uniqcate=[...new Set(cate)]
console.log(uniqcate);

uniqcate.unshift("All")

const table=(dep)=>{
   if(dep==="All"){
     setMenulist(menu)
     return
   }
   

   const filterdata=menu.filter(
     furniture=>furniture.category===dep)
    setMenulist(filterdata)
  
 }
 
return(
     <div className="product">

         <h1 className="head">Product</h1><br></br><div className="align-cont">
         {uniqcate.map(dep=>
             <span onClick={()=>table(dep)} className="hd">{dep}</span>)}</div><br></br><br></br>
      <div className="center"> 
       {menulist.map(furniture=>
         <div className="itms" key={furniture.id}>
             <img src={furniture.img} className="photo"/>
            <div className="info"> 
          <header>
             <h5>{furniture.title}</h5>
             <p className="price">Rs : {furniture.price}</p>
             </header>
      
             </div>
         </div> )}
        
     </div><br></br><br></br>
     </div>
 )
}
export default Product