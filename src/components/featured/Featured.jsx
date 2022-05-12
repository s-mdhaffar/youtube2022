import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=) no-repeat center center" alt="" />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/city/540x270/681827.webp?k=f15706b60f4821bc1a569e81966a33bb05d0ccec7bcc8482a00d79f8ba3af517&o=) no-repeat center center" alt="" />
            <div className="featuredTitles">
                <h1>Nice</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/city/540x270/681776.webp?k=454cf1b0603ebcbe643ac658c32eb4cf28e21c663a1c04f30eebc68436b47357&o=) no-repeat center center" alt="" />
            <div className="featuredTitles">
                <h1>Marseille</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured