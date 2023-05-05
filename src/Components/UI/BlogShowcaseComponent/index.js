import React from 'react'

const BlogShowcaseComponent = ({ imgSrc, title, content }) => {
    return (
        <div className='flex flex-col w-1/5 pl-4 pr-4 pt-4 pb-4 border-2 border-gray-200 skillcoup-light-bg rounded-xl drop-shadow-lg'>
            <img src={imgSrc || "https://miro.medium.com/v2/resize:fit:2468/format:webp/1*nYonUA11exVdth-4CBU8HA.jpeg"} alt={title} />
            <h3 className='text-lg font-semibold md:text-xl truncate'>{title || "5 Reasons Why You should hire Freelancers"}</h3>
            <p className='text-sm font-light '>{content || "We are very well aware of the reasons that professionals have to go for Freelancing, but today we will discuss why hiring freelancers is an attractive option for clients and business owners."}</p>
        </div>
    )
}

export default BlogShowcaseComponent