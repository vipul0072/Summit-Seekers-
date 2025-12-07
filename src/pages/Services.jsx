import '../styles/Service.css';

function Services() {
    return(
        <div className="Service-container">
            <div className="service-content">
                <div className='service-head'>
                    <h1>Why Choose Us?</h1>
                <p>At Summit Seekers, we’re not just about trekking and hiking, we’re about crafting unforgettable stories that you’ll be eager to share, even without a campfire in sight. Here’s why adventurers like you choose us:</p>
                </div>
                <div className="serive-provide">
                    <div className="boxes service-first1">
                        <h3>Expert Quides</h3>
                        <p>
                            Our seasoned guides aren’t just experts in navigating trails; they’re storytellers, adding depth and intrigue to every step of your journey.
                        </p>
                    </div>
                    <div className="boxes service-first2">
                        <h3>Safety First, Always</h3>
                        <p>
                            Your safety is our top priority. With our stringent safety protocols and experienced team, you can trek with confidence, leaving worries behind.
                        </p>
                    </div>
                    <div className="boxes service-first3">
                        <h3>Friendly Price</h3>
                        <p>
                            Adventure shouldn’t break the bank. Enjoy quality treks at affordable prices, making unforgettable experiences accessible t
                        </p>
                    </div>
                    <div className="boxes service-first3">
                        <h3>Instant Booking</h3>
                        <p>
                            Seize the moment! With instant booking options, lock in your adventure in just a few clicks and get ready to hit the trails.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;