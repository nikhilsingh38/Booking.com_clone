
import { Link } from 'react-router-dom';
import './newnav.css'


export const HomeNav = () => {
    return (
        <>
            <div className="vai_newNav">
                <div id='vai_bookDiv' className="flex">
                    <h2>Booking.com</h2>
                    <div id='vai_logSign'>
                        <button>Register</button>
                        <button>Sign in</button>

                    </div>

                </div>
                <div className='flex1'>
                    {/* <Link to={'/'}>Stays</Link> */}
                    <Link to={'/'} className="st">Stays</Link>
                    <Link to={'/flight'} className="st">Flight</Link>
                    <Link to={'/flighthotel'} className="st">Flight+Hotel</Link>
                    <Link to={'/car'} className="st">Car Rentals</Link>
                    <Link to={'/attraction'} className="st">Attraction</Link>
                    <Link to={'/airport'} className="st">Airport Taxis</Link>
                </div>
                <div>
                    <h1>A lifetime of discounts? It's Genius. </h1>
                    <p>Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
                </div>

            </div>




        </>
    )
}