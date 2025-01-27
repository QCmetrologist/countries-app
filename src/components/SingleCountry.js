import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const {name} = useParams() 
    
    useEffect(() => {
        const getSingleCountry = async() => {
            try{
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json()
                setCountry(data)
            } catch (error){
                console.error(error)
            }
        }
        getSingleCountry()
    }, [name])  

  return <>
    <section className="p-8 md:py-0 max-w-7xl mx-auto">
        {country.map((item) => (
            <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
                <article>
                    <img src={item.flags.svg} alt={item.name.common} />
                </article>
                <article>
                    <h1 className="mb-8 dark:text-white font-bold text-gray-900 text-4xl lg:text-6xl">{item.name.official}</h1>
                    <ul className=" dark:text-gray-400 my-4 flex flex-col items-start justify-start gap-2 text-slate-700">
                        <li>Region: {item.region}</li>
                        <li>Subregion: {item.subregion}</li>
                        <li>Capital: {item.capital[0]}</li>
                        <li>Population: {item.population.toLocaleString()}</li>
                        <li>Area: {item.area}</li>                       
                    </ul>  

                    {item.borders && <>
                        <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">Borders:</h3>
                        <ul className="flex flex-wrap items-start justify-start gap-2">
                            {item.borders.map((border, index) => (
                                <li key={index} className="text-gray-700 dark:text-gray-400 shadow dark:bg-gray-800 bg-white p-2 rounded text-xs tracking-wide">{border}</li>
                            ))}                       
                        </ul></>}                        

                    {item.languages && <>
                        <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">Languages:</h3>
                        <ul className="flex flex-wrap items-start justify-start gap-2">
                            {Object.values(item.languages).map((language, index) => (
                                <li key={index} className="text-gray-700 dark:text-gray-400 shadow dark:bg-gray-800 bg-white p-2 rounded text-xs tracking-wide">{language}</li>
                            ))}                      
                        </ul></>}  

                    {item.currencies && (<>
                        <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">Currencies:</h3>
                        <ul className="flex flex-wrap items-start justify-start gap-2">
                            {Object.entries(item.currencies).map(([code, currency]) => (
                                <li key={code} className="text-gray-700 dark:text-gray-400 shadow dark:bg-gray-800 bg-white p-2 rounded text-xs tracking-wide">{currency.name} ({currency.symbol})</li>
                            ))}
                        </ul></>)}

                    <Link to="/" className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400">&larr; Back</Link>
                </article>

            </div>
        ))}   
    </section>
  </>;
}
