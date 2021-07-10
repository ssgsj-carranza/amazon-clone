import Image from 'next/image'
import React from 'react'
import Header from '../components/Header/Header'

function Checkout() {
    return (
        <div className='bg-gray-100'>
            <Header/>

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left section */}
                <div>
                    <Image src='https://links.papareact.com/ikj' 
                            width={1020} 
                            height={250}
                            objectFit='contain'/>
                </div>

                {/* right section */}
                <div></div>

            </main>      
        </div>
    )
}

export default Checkout
