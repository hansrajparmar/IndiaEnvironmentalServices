import React from 'react'

const Contact = () => {
  return (
    <div className='contactpage'>
      <main>
        <h1>Contact Us</h1>

          <form action="https://formsubmit.co/shreeganeshaenergyservices@gmail.com" method='POST'>
            <div>
              <label>Name</label>
              <input type="text" name="name"  placeholder='Your Name' />
            </div>

            <div>
              <label>Email</label>
              <input type="text" name="email"  placeholder='Your Email' />
            </div>

            <div>
              <label>Mobile</label>
              <input type="number" name="mobile"  placeholder='Your Mobile Number' />
            </div>

            <div>
              <label>Message</label>
              <input type="text" name="message"  placeholder='Your Query ' />
            </div>

            <button type='submit'>Submit</button>


          </form>


      </main>


        
    </div>
  )
}

export default Contact