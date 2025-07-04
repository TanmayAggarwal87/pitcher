import { Search } from 'lucide-react'
import React from 'react'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}:{query?:string}) => {


    
  return (
    <div>
        <form action="\">
            <div className="relative">
                <input 
                    name='query' 
                    defaultValue={query}
                    className="search-bar bg-white text-lg px-5 py-3 w-full h-[50px] rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12" // Changed pl-6 to pr-12
                    placeholder="Search Startups"
                />
                <div  className="absolute right-4 top-1/2 transform -translate-y-1/2 -translate-x-9 flex items-center gap-3">
                {query && <SearchFormReset/>}
                </div>
                <button type="submit">
                    <Search className='absolute right-4 top-1/2 transform -translate-y-1/2 size-6 text-gray-500' />
                </button>
                

                
            </div>

            
            

        </form>
    </div>
  )
}

export default SearchForm