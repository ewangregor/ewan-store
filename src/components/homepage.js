import './homepage.css'
import logo from '../images/backfroundEwan.jpg'
import Login from './login';
const Homepage=()=>{
    return(
        <div>
            <div className="container">
        <img src={logo} />
        <nav>
            <a href="https://www.facebook.com"><i id="flogo" className="fa-brands fa-facebook"></i></a>
            <a href="https://www.etsy.com"><i id="elogo" className="fa-brands fa-etsy"></i></a>
            <a href="https://www.instagram.com"><i id="ilogo" className="fa-brands fa-instagram"></i></a>
            <h1>Ewan</h1>
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>

        </nav>
        <Login/>

    </div>
        </div>
    )
}
export default Homepage;