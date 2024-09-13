import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <div className="w-full pt-10 flex flex-col justify-center items-center font-bold text-[40px] text-[#9b9b9b]">
                <img src="/Error.png" alt="" width={1000} height={1000} className="w-[200px] md:w-[400px] object-contain" />
                <h1 className='text-[16px] md:text-[22px]'>Oops! API limit exced try after 24hrs</h1>
                <h1 className='text-[16px] md:text-[16px]'>Refresh the Page</h1>
            </div>
        </>
    )
}

export default ErrorPage
