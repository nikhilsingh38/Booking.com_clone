import './navbar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <>
            <div className="vai_mainDiv">
                <div id='vai_bookDiv' className="flex">
                    <h2>Booking.com</h2>
                    <div id='vai_logSign'>
                        <button>Register</button>
                        <button>Sign in</button>

                    </div>

                </div>
                <div className='flex1'>
                    {/* <Link to={'/'}>Stays</Link> */}
                    {/* <Link to={'/'} className="st">Stays</Link> */}
                    <Link to={'/flight'} className="st">Flight</Link>
                    <Link to={'/flighthotel'} className="st">Flight+Hotel</Link>
                    <Link to={'/car'} className="st">Car Rentals</Link>
                    <Link to={'/attraction'} className="st">Attraction</Link>
                    <Link to={'/airport'} className="st">Airport Taxis</Link>


                </div>
            </div>



            <div></div>
        </>
    )
}