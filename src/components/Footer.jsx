import React from 'react'

const Footer = () => {
  return <footer id='footer' >
        <div>
            <h1>SGES</h1>
            <h3>@all rights reserved</h3>
        </div>

        <div className='contact' >
           <h3>Contact details:-</h3>
           <h4> Email :- </h4> <p> shreeeganeshaenergyservices@gmail.com </p>
           <h4> Mob :- </h4> <p> 8240816668 </p>
           <h4> Address :-  </h4> <p> SGES, near Gaurav Dairy, Indrapuri 
            C-Sector, Bhopal, 462022 </p>
        </div>

        <div className='follow' >
            <h3>Follow Us</h3>
                <a href="https://www.instagram.com/shreeganeshaenergysystem/" target={"blank"} >Instagram</a>
                <a href="facebook.com/profile.php?id=100094398410806" target={"blank"} >Facebook</a>
        </div>
  </footer>
}

export default Footer
