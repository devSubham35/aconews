import React from "react";
import Select from "react-select";
import { LuSearch } from "react-icons/lu";
import { supportedCountryData, supportedLanguageData } from "../../data";
import { CustomStyle } from "../ReactSelectStyle";

const Navbar = ({ searchQuery, setSearchQuery, selectedCountry, setSelectedCountry, selectedLanguage, setSelectedLanguage }) => {

  /// Set the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className='mb-3 lg:mb-8'>
        <div className='flex justify-between items-center lg:grid grid-cols-8 py-3 lg:py-5'>
          <h1 className='col-span-2 text-[25px] md:text-[30px] lg:text-[40px] font-extrabold flex items-center 
          bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent cursor-pointer'>
            Aco<span className='text-slate-600'>News</span>
          </h1>

          <div className='col-span-4 w-full hidden lg:flex justify-center items-center'>
            <div className='relative w-[80%] xl:w-[500px] 2xl:w-[600px]'>
              <input
                type="text"
                placeholder='Search something...'
                className='w-full py-[14px] rounded-xl border-[2px]
                focus:outline-none px-3 font-medium text-gray-500'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <LuSearch className='absolute top-1/2 right-4 -translate-y-1/2 text-[22px] text-gray-500' />
            </div>
          </div>

          <div className='col-span-2 flex justify-end items-center gap-1.5 md:gap-4'>
            <Select
              options={supportedCountryData}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e)}
              placeholder="Country"
              className='w-full xl:w-[150px] font-bold cursor-pointer !text-[14px] !md:text-[16px]'
              styles={CustomStyle()}
            />
            <Select
              options={supportedLanguageData}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e)}
              placeholder="Language"
              className='w-full xl:w-[150px] font-bold cursor-pointer !text-[14px] !md:text-[16px]'
              styles={CustomStyle()}
            />
          </div>
        </div>

        {/* For Mobile Search */}
        <div className='relative lg:hidden w-full'>
          <input
            type="text"
            placeholder='Search something...'
            className='w-full py-[10px] rounded-xl border-[2px]
                focus:outline-none px-3 font-medium text-gray-500 text-[14px]'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <LuSearch className='absolute top-1/2 right-4 -translate-y-1/2 text-[16px] text-gray-500' />
        </div>

      </nav>
    </>
  );
};

export default Navbar;