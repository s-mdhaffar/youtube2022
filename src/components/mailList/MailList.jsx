import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="maildesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInput">
            <input placeholder='Your Email' />
            <button >Subscribe</button>
        </div>
    </div>
  )
}

export default MailList