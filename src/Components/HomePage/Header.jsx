import React from 'react';
import CommonButton from '../../CustomComponents/CommonButton/CommonButton';
import headerImage from '../../Assets/headerNft.png';

const Header = () => {
    return (
        <section className='md:flex mt-6 lg:mt-14'>
            {/* left part of large device */}
            <div className='md:w-7/12 pt-4'>
                <h1 className='text-2xl lg:text-3xl font-extrabold text-black md:w-5/6 uppercase'>Discover,and collect digital art Nfts</h1>
                <p className='text-accent font-semibold md:w-5/6 lg:w-4/6 mt-4 mb-6'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs).Buy,sell and discover exclusive digital assets.</p>
                <CommonButton>Explore Now</CommonButton>

                <div className='flex gap-6 mt-6'>
                    <div>
                        <h1 className='text-3xl font-extrabold text-black mb-0'>98K+</h1>
                        <small className='text-accent font-semibold'>Artwork</small>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold text-black mb-0'>12K+</h1>
                        <small className='text-accent font-semibold'>Auction</small>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold text-black mb-0'>15K+</h1>
                        <small className='text-accent font-semibold'>Artist</small>
                    </div>
                </div>
            </div>


            {/* right part of large device */}
            <div className='mt-10 lg:mt-0 md:w-5/12 '>
                <img src={headerImage} alt='' className='w-5/6 md:w-full lg:w-5/6 mx-auto md:mx-0'/>
            </div>
        </section>
    );
};

export default Header;