import React from 'react';
import brandimg from '../assets/brandimgall.png';
const Brands = () => {
    return(
        <>
       <div className="section-headline">
        <h3>Trusted By</h3>
       </div>
        <div className="container">
            <img src={brandimg} alt="" />
        </div>
        </>
    );
}
export default Brands;