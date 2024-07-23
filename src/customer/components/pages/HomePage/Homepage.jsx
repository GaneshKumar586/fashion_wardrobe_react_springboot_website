import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeCategoriesCarousel from '../../HomeCategoriesCarousel/HomeCategoriesCarousel'
import mensHoodie from '../../../data/Mens/mensHoodie'
import Footer from '../../Footer/Footer'
import { mens_kurta } from '../../../data/Men/men_kurta'
import mens_jeans from '../../../data/Men/men_jeans'
import mens_shirt from '../../../data/Men/men_shirt'

const Homepage = () => {
  return (
    <div className='overflow-auto hide-scrollbar'>
        <MainCarousel/>
        <div className='flex flex-col overflow-auto hide-scrollbar space-y-3 py-10 mt-5'>
          <HomeCategoriesCarousel arrayData={mens_kurta} categoryName={"Men's Kurta"}/>
          <HomeCategoriesCarousel arrayData={mensHoodie} categoryName={"Men's Hoodie"}/>
          <HomeCategoriesCarousel arrayData={mens_jeans} categoryName={"Men's Jeans"}/>
          <HomeCategoriesCarousel arrayData={mens_shirt} categoryName={"Men's shirt"}/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Homepage