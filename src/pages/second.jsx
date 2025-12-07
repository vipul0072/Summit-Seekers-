import '../styles/Second.css';

function Second() {
    const harkidun = [
        {trekname : 'Harkidun', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus corporis dolore beatae delectus magni error voluptas perspiciatis eos ad? Modi reprehenderit deleniti nobis tempore numquam iusto neque maiores distinctio praesentium'}
    ]
    return(
        <div className="Harkidun-container">
            <div className="Harkidun-content">
                <div className="Harkidun-hero">
                    {harkidun.map((trek, index) => (
                        <div className="details">
                        <h1 className='detail-h1'>Welcome to {trek.trekname} trek</h1>
                        <p className='detail-p'>{trek.text}</p>
                        <button className='detail-button'>Book Now</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Second;