import React, { useState } from 'react';
import { categoryData } from '../../data';

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <div className='flex items-center overflow-x-scroll md:flex-wrap gap-2 lg:gap-4 gap-y-3 lg:gap-y-4 hide-scroll'>
            {categoryData?.map(category => (
                <h1
                    key={category?.label}
                    className={`font-bold text-[12px] px-5 py-2 flex items-center gap-2 rounded-full cursor-pointer active:scale-[0.9] duration-500
                        ${selectedCategory === category?.value ? 'bg-slate-200 w-fit text-blue-600' : 'bg-slate-200/70 hover:bg-slate-200 text-gray-600'}`}
                    onClick={() => setSelectedCategory(category?.value)}
                >
                    <div className='text-[16px]'>{category?.icon}</div>
                    {category?.label}
                </h1>
            ))}
        </div>
    );
};

export default CategoryBar;
