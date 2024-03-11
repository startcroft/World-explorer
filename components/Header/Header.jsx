import './Header.css'
import logo from '../../assets/logo.svg'

export function Header () {
  return (

        <div className='header__worldContainer'>
            <nav className='nav__header'>
                <img className='logo__nav' src={logo} alt="logo" />
                <h2 className='h2__nav'>World Explorer</h2>

                <ul className='menu__nav'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </nav>

            <section className='section__header'>
              <h3 className='h3__section--header'>The world is a book, and those who do not travel read only one page. <br/><br/> - San Agustín</h3>
              <div className='card__section--header'>
               <p className='p__card--header'>"Here you can travel around the world from your computer screen, explore all countries, cultures, and traditions. Ready to start the adventure?</p>
              </div>
            </section>

        </div>

  )
}
