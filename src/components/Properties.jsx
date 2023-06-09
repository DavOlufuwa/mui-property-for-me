import { East, FmdGoodOutlined, HorizontalRuleSharp } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CardMedia , Button } from '@mui/material'
import React from 'react'
import { Property } from '../data/Property'
import Bedroom from '/assets/icons-small/bedroom.svg'
import Toilet from '/assets/icons-small/bathroom.svg'
import Balcony from '/assets/icons-small/balcony.svg'
import locationdark from '/assets/icons-small/location.png'

const Properties = () => {
  return (
    <div className='px-8 tablet:px-16 laptop:px-32 bg-custom-buttonbg py-32' id='properties'>
      <section className='uppercase text-xl flex items-center'><HorizontalRuleSharp fontSize='large'/> Popular</section>
      <section className='flex justify-between my-5'>
        <div className='text-lg tablet:text-2xl'>Our Popular Properties</div>
        <div className='flex items-center'>Explore All<East/></div>
      </section>
      <section className='flex flex-col gap-10 laptop:grid laptop:grid-cols-3'>
        {
          Property.map((house=>(
            <Card key={house.id} className='shadow-none bg-white'>
               <CardMedia 
                component="img"
                image={house.imgSpot}
               /> 
              <CardContent className='text-xl'>
                <div className='flex items-center justify-between pb-3 border-b-2 border-custom-light'>
                  <img src={locationdark}/> {house.address}
                </div>
                <div className='text-[12px] flex justify-between mt-3 text-custom-grey'>
                  <div  className='flex items-center'><span className='mr-0.5'><img src={Bedroom}/></span>{house.options[0]}</div>
                  <div className='flex items-center'><span className='mr-0.5'><img src={Toilet}/></span>{house.options[1]}</div>
                  <div className='flex items-center'><span className='mr-0.5'><img src={Balcony}/></span>{house.options[2]}</div>
                </div>
              </CardContent>
              <CardActions className='flex justify-between items-center mb-2 mx-2'>
                <div className='text-2xl'>
                  {house.price}
                </div>
                <Button variant="outlined" className='bg-custom-buttonbg shadow-none text-base capitalize text-custom-mid font-bold border-2 border-custom-light px-6 rounded-md py-2 transition duration-300 hover:text-custom-buttonbg hover:bg-custom-mid hover:border-custom-background'>Book now</Button>
              </CardActions>
            </Card>
          )))
        }
      </section>
    </div>
  )
}

export default Properties