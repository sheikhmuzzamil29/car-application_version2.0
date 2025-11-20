import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';
import homestyle from '../css/carstyle.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import homeimg from '../images/homeicon3.png'
function Home(){

  const [profiledata,setprofiledata]=useState()
  useEffect(()=>{
    
  },[])
  const [alldata,setalldata]=useState([]);
  useEffect(()=>{
    console.log('overview data')
    
    axios.get('/api/admin/profile').then((result)=>{
      if(result)
      {
        console.log(result)
        setprofiledata(result.data.message)
      }
    })
  },[])
    const size = {
        width: 800,
        height: 400,
      };
      
      const data = {
        data: desktopOS,
        valueFormatter,
      };
    return(
        <>
        
        <h1 className={homestyle.headername}><img  src={homeimg} alt='img' width={100} />Overview</h1>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [alldata,2,4,5,6],
        },
      ]}
      width={1000}
      height={300}
    />
    <div className={homestyle.piaplace}>
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
    </div>
    <div><h1>{profiledata}</h1></div>
    <p>
    
    
Affordable and Reliable Cars for Sale - Great Deals Await You!

<h3><b>Description</b></h3>

Are you in the market for a new ride? Look no further! We offer a wide selection of high-quality, affordable vehicles to suit every taste and budget. Whether you’re looking for a sleek sedan, a spacious SUV, a powerful truck, or a fuel-efficient hybrid, we have something for everyone. <br/>

<b>Why Buy from Us</b>
<br/><b>Wide Selection:</b><br></br> We have an extensive inventory of both new and pre-owned vehicles from top brands.
<br/><b>Quality Assurance:</b><br/>Each car undergoes a rigorous inspection and comes with a detailed report to ensure reliability and performance.
<br/><b>Competitive Prices:</b><br/>Enjoy great deals and financing options tailored to your budget.
<br/><b>Customer Satisfaction:</b><br/>Our top priority is your satisfaction. We offer a hassle-free buying experience with no hidden fees.
<br/><b>Expert Support:</b><br/> Our knowledgeable staff is here to assist you with any questions and help you find the perfect vehicle.

<br/><b>Highlights:</b><br/>

- Variety of models and makes to choose from
- Comprehensive warranty options available
- Easy and transparent financing process
- Test drives available by appointment
- Trade-in and exchange offers for your old vehicle

Don’t miss out on our limited-time offers and special discounts! Visit our website or contact us today to find your dream car. Drive home in your new car with confidence and style.




Feel free to customize this description with your specific details and any additional information you'd like to include! If there’s anything else you need help with, just let me know.
    </p>
        </>
    )
}
export default Home