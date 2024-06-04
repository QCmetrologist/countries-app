import { useState, useEffect } from "react";
import Article from "./Article";


export default function Countries(){
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");
    const regions = [
        {name: "Europe"},
        {name: "Asia"},
        {name: "Africa"},
        {name: "Oceania"},
        {name: "Americas"},
        {name: "Antarctic"},                                        
    ]

    useEffect(() => {
        const getCountries = async() => {
            try{
                const res = await fetch("https://restcountries.com/v3.1/all")
                const data = await res.json()
                setCountries(data)
            } catch (error){
                console.error(error)
            }
        }
        getCountries()
    }, [])

    async function searchCountry() {
        try {
          const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
          const data = await res.json();
          if (Array.isArray(data)) {
            setCountries(data);
          } 
        } catch (error) {
          console.error(error);
        }
      }

    async function filterByRegion(region) {
        try{
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const data = await res.json()
            setCountries(data)
        } catch (error) {
            console.error(error)
        }
    }

    function handleSearchCountry(e) {
        e.preventDefault()
        searchCountry()
    }

    function handleFilterByRegion(e) {
        e.preventDefault()
        filterByRegion()
    }

    return <>
        {!countries? (<h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1>
        ) : (
        <section>
            {/* form */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <form onSubmit={handleSearchCountry} autoComplete="off" className="max-w-4xl md:flex-1">
                    <input 
                    className="dark:focus:bg-gray-700 transition-all duration-200 dark:text-gray-400 dark:bg-gray-800 dark:placeholder-gray-400 py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search for a country by name and press ENTER" 
                    required 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                </form>
                <form className="md:flex-2 p-8" onSubmit = {handleFilterByRegion}>
                    <select 
                    name="filter-by-region" 
                    id="filter-by-region"
                    value={regions.name}
                    onChange={(e) => filterByRegion(e.target.value)}                    
                    className="dark:focus:bg-gray-700 dark:bg-gray-800 dark:text-gray-400 w-52 py-3 shadow rounded px-4 outline-none text-gray-600"> 
                    {regions.map((region, index) => (
                        <option key={index} value={region.name}>{region.name}</option>
                    ))}</select>  
                </form>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {countries.map((country) => (
                <Article key={country.name.common} {...country}/>  
                ))}
            </div>
        </section>)}
    </>;
}