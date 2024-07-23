/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, Box, Rating, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ProductReviewCard from './ProductReviewCard';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { mens_kurta } from '../../../data/Men/men_kurta';
import ItemCard from '../../HomeCategoriesCarousel/ItemCard';
import mensHoodie from '../../../data/Mens/mensHoodie';
import { lengha_page1 } from '../../../data/Women/LenghaCholi';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        red: {
            main: '#ff0000',
        },
        yellow: {
            main: '#ffff00',
        },
        orange: {
            main: '#ffa500',
        },
        green: {
            main: '#008000',
        },
        lime: {
            main: '#00ff00',
        },
    },
});

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$1990',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        // { name: 'XXS', inStock: false },
        // { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        // { name: '2XL', inStock: true },
        // { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const [mainImg, setMainImg] = useState(product.images[0].src)

    const navigate = useNavigate();
    //  const mainImage = product.images.map((item)=>{item.src!==mainImg &&
    //     <div className="h-[15rem] w-[15rem] object-cover overflow-hidden">
    //         <img
    //         src={item.src}
    //         alt={item.alt}
    //         className=" z-8 object-cover object-center"
    //         />
    //     </div>
    // })
    return (
        <div className="bg-white">
            <div className="pt-6 ">
                {/* <div className='grid'> */}
                <nav aria-label="Breadcrumb" >

                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <section className='grid grid-cols-1   lg:grid-cols-10 gap-x-8 gap-y-5 px-4 pt-10'>
                    <div className='flex flex-col col-span-4 items-center'>
                        <div className='overflow-hidden rounded-lg max-w-[25rem] max-h-[35rem'>
                            <img src={product.images[0].src}
                                alt={product.images[0].alt}
                                classname="h-full w-full object-cover object-center" />
                        </div>

                        <div className='flex flex-wrap mt-5 space-x-5 justify-between '>
                            {
                                product.images.map((unit) => <div className=' hover:border-red-600 border-2 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]'>
                                    <img src={unit.src} alt={unit.alt} className='h-full w-full object-cover object-center' />
                                </div>
                                )
                            }
                        </div>
                    </div>
                    {/* Product info */}
                    <div className=" w-full col-span-6 max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:grid   lg:px-8 lg:pb-24 lg:pt-2">
                        <div className="w-full lg:border-r lg:border-gray-200 lg:pr-8">
                            <p className="text-3xl text-start w-full font-bold tracking-tight text-red-600 ">{product.name}</p>
                            <p className="text-lg text-start w-full font-bold tracking-tight text-green-600 ">{product.name}</p>
                            <hr className='my-4 py-0 bg-red-600 text-red-500'></hr>
                        </div>

                        {/* Options */}
                        <div className="mt-4 text-start lg:row-span-1 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex justify-start'>
                                <p className="p-2 merriWeather text-3xl tracking-tight text-red-600">- 49%</p>
                                <p className="p-2 text-3xl tracking-tight font-bold text-green-800">{product.price}</p>
                                <p className="p-2 text-sm tracking-tight line-through opacity-50 text-black">M.R.P.:{product.price}</p>


                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <p className="text-sm p-2">4.5</p>
                                    <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                    {/* <p className="p-3">{reviews.average} out of 5 stars</p> */}
                                    <p className="text-sm p-3 text-red-600">14,234 ratings</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-red-600 hover:text-indigo-400">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <form className="flex flex-row  mt-10">
                                {/* Colors */}
                                <div className='border-gray-300 border-r-2 px-10 mx-5'>
                                    <h3 className="text-sm  font-medium text-red-600">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <Radio
                                                    key={color.name}
                                                    value={color}
                                                    aria-label={color.name}
                                                    className={({ focus, checked }) =>
                                                        classNames(
                                                            color.selectedClass,
                                                            focus && checked ? 'ring ring-offset-1' : '',
                                                            !focus && checked ? 'ring-2' : '',
                                                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                                                        )
                                                    }
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>
                                {/* <vr className='p-2 bg-red-500'></vr> */}
                                {/* Sizes */}
                                <div className=" border-gray-300  border-r-2 pr-6 mx-5">
                                    <div className="flex items-center justify-around ">
                                        <h3 className="text-sm font-extrabold text-red-600">Size</h3>
                                        <a href="#" className="text-sm font-extrabold text-green-600 hover:text-indigo-400">
                                            Size guide
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="ml-3 mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-3 gap-3 sm:grid-cols-8 lg:grid-cols-3"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ focus }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-red-600 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            focus ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                                                        )
                                                    }
                                                >
                                                    {({ checked, focus }) => (
                                                        <>
                                                            <span>{size.name}</span>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        focus ? 'border' : 'border-2',
                                                                        'pointer-events-none absolute -inset-px rounded-md',
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* <button
                                        type="submit"
                                        className=" py-0 px-2 m-4 flex w-[10rem] items-center justify-center rounded-md border border-transparent bg-green-600  text-base font-extrabold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        + Add to bag
                                    </button> */}
                                {/* <AddShoppingCartIcon /> */}
                                <Box onClick={()=>navigate('/cart')}
                                    sx={{
                                        py: 0,
                                        px: 2,
                                        m: 4,
                                        display: 'flex',
                                        width: '10rem',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '0.375rem',
                                        border: '1px solid transparent',
                                        backgroundColor: 'green',
                                        color: 'white', // to ensure the text is visible on green background
                                    }}
                                >
                                    <AddShoppingCartIcon />
                                    <Typography sx={{ ml: 2 }}>Add to Cart</Typography>
                                </Box>
                            </form>
                        </div>

                        <div className="py-10 lg:row-span-1 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Recent Ratings Section */}
                <p className='text-red-600 text-start text-2xl font-extrabold border-gray-400 border-b-1 mx-10 p-3'>Recent Ratings and Reviews..</p>
                <div className='grid grid-cols-7 p-3 mr-7 my-2 ml-3 border-gray-300 border-t-2 w-full '>
                    <div className="flex flex-col py-3 col-span-3 ">
                        <div className='flex flex-col space-y-3'>
                            {[1, 1, 1, 1].map((item) => (<ProductReviewCard />))}
                        </div>
                    </div>
                    <div className=' ml-10 mr-10 col-span-4'>
                        <h2 className='text-2xl font-semibold text-red-600'>Product Reviews</h2>
                        <div className='flex flex-row justify-center items-center space-x-3 py-2'>
                            <Rating
                                sx={{ p: 1 }}
                                name="read-only"
                                value={4.6}
                                precision={0.1}
                                readOnly
                            />
                            <p className='opacity-50 text-black text-sm font-medium'>54272 Ratings</p>
                        </div>
                        <div className='flex flex-col  py-10 space-y-3'>
                            <div className='flex flex-row '>
                                <span className='w-[10rem]  font-semibold text-lg text-green-800'>Excellent</span>
                                <div className='w-[30rem]'>
                                    <LinearProgress sx={{
                                        mt:1,
                                        height: '10px',
                                        borderRadius: '5px',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: 'green',
                                        },
                                        backgroundColor: 'lightgrey',
                                    }} variant="determinate" value={32} />
                                </div>
                                <span className='pl-5 pr-5 mb-3 font-semibold text-lg text-green-800'>32%</span>
                            </div>
                            <div className='flex flex-row '>
                                <span className='w-[10rem]  font-semibold text-lg text-green-300'>Good</span>
                                <div className='w-[30rem]'>
                                    <LinearProgress sx={{
                                        mt:1,
                                        height: '10px',
                                        borderRadius: '5px',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: 'lime',
                                        },
                                        backgroundColor: 'lightgrey',
                                    }} variant="determinate" value={37} />
                                </div>
                                <span className='pl-5 pr-5 mb-3 font-semibold text-lg text-green-300'>37%</span>
                            </div>
                            <div className='flex flex-row '>
                                <span className='w-[10rem]  font-semibold text-lg text-yellow-400'>Average</span>
                                <div className='w-[30rem]'>
                                    <LinearProgress sx={{
                                        mt:1,
                                        height: '10px',
                                        borderRadius: '5px',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: 'yellow',
                                        },
                                        backgroundColor: 'lightgrey',
                                    }} variant="determinate" value={11} />
                                </div>
                                <span className='pl-5 pr-5 mb-3 font-semibold text-lg text-yellow-400'>11%</span>
                            </div>
                            <div className='flex flex-row '>
                                <span className='w-[10rem]  font-semibold text-lg text-red-400'>Bad</span>
                                <div className='w-[30rem]'>
                                    <LinearProgress sx={{
                                        mt:1,
                                        height: '10px',
                                        borderRadius: '5px',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: 'orange',
                                        },
                                        backgroundColor: 'lightgrey',
                                    }} variant="determinate" value={8} />
                                </div>
                                <span className='pl-5 pr-5 mb-3 font-semibold text-lg text-red-400'>8%</span>
                            </div>
                            <div className='flex flex-row '>
                                <span className='w-[10rem] font-semibold text-lg text-red-600'>Poor</span>
                                <div className='w-[30rem]'>
                                    <LinearProgress sx={{
                                        mt:1,
                                        height: '10px',
                                        borderRadius: '5px',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: 'red',
                                        },
                                        backgroundColor: 'lightgrey',
                                    }} variant="determinate" value={12} />
                                </div>
                                <span className='pl-5 pr-5 mb-3 font-semibold text-lg text-red-600'>12%</span>
                            </div>
                            

                            {/* <LinearProgress color="success" variant="determinate" value={30} />
                            <LinearProgress color="inherit" variant="determinate" value={40} />
                            <LinearProgress color="inherit" variant="determinate" value={50} /> */}
                        </div>
                    </div>
                </div>
                {/* Similar Products */}
                <div className='w-full p-10'>
                    <div className='flex flex-wrap justify-center space-x-10 space-y-6'>
                        {
                            mens_kurta.map((unit)=><ItemCard product={unit}/>)
                        }
                    </div>
                </div>
                {/* </div> */}
            </div>

        </div>
    )
}
