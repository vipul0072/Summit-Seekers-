import '../styles/first.css'

function First() {
    const kedharkantha = [
        {trekname: 'kedarkantha'}
    ]
    return (
        <div className="kedharkantha-container">
            <div className="kedharkantha-content">
                <div className="kedarkantha-hero">
                    {kedharkantha.map((trek) => (
                        <div className="details">
                        <h1 className='detail-h1'>Welcome to {trek.trekname} trek</h1>
                        <p className='detail-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus corporis dolore beatae delectus magni error voluptas perspiciatis eos ad? Modi reprehenderit deleniti nobis tempore numquam iusto neque maiores distinctio praesentium.</p>
                        <button className='detail-button'>Book Now</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default First;