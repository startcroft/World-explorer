import { useEffect, useState } from 'react'
import './Main.css'

export function Main () {
  const [countries, setCountries] = useState([])
  const [countryImage, setCountryImage] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const newArray = data.slice(0, 15)
        setCountries(newArray)
        getRandomImage(newArray)
      })
      .catch(error => console.error('Error fetching countries:', error))
  }, [])

  const getRandomImage = async (countries) => {
    const images = {}
    for (const country of countries) {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${country.name.common}&client_id=L28WACXHeVwqGJ14ivxBfjANP1xdyOterY-j1dDbHHQ`)
        const data = await response.json()
        images[country.name.common] = data.results[0].urls.regular
      } catch (error) {
        console.error('Error fetching image:', error)
      }
    }
    setCountryImage(images)
  }

  return (
    <main className="main__worldExplorer">
      {countries.map((item, index) => (
        <div key={index} className='card__main'>
          <section className='imgContainer__card'>
            <img className='image__imgContainer' src={countryImage[item.name.common]} alt="Bolivia" />
          </section>
          <section className='info__card'>
            <h3 className='h3__info--card'>{item.name.common}</h3>
            <p className='capital__info--card'> Capital: {item.capital}</p>
            <p className='language__info--card'>Language: {item.languages && Object.values(item.languages).join(', ')}</p>
            <p className='currency__info--card'>Currency: {item.currencies && Object.values(item.currencies)[0].name}</p>
            <div className='flagContainer__info--card'>
              <p className='flag__info--card'>Flag:</p>
              <img className="img__flagContainer" src={item.flags.png} alt="flag" />
            </div>
          </section>
        </div>
      ))}
    </main>
  )
}
