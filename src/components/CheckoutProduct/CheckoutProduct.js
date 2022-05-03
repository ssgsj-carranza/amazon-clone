import {StarIcon} from '@heroicons/react/solid';
import { fromParams } from 'google-gax/build/src/routingHeader';
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter';
import {useDispatch} from 'react-redux';
import {addToBasket, removeFromBasket} from '../../slices/basketSlice';

function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime,}) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {id, title, price, rating, description, category, image, hasPrime}
        //PUSH ITEM INTO REDUX
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        //REMOVES ITEM FROM REDUX
        dispatch(removeFromBasket({id}))
    }
    
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit='contain'/>
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500'/>
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='USD' />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' 
                             className='w-12' 
                             src="https://links.papareact.com/fdw" 
                             alt="" 
                        />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button font-semibold'onClick={addItemToBasket}>Add to Basket</button>
                <button className='button font-semibold' onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
