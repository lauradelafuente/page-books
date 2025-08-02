import logo from '../../images/logo.svg'
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='logo da marca'
                className='logo-img'>
            </img>
            <p><strong>Page</strong>Books</p>
        </div>
    )
}

export default Logo;