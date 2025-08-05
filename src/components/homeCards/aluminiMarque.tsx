
import React from 'react'

const logos = [
  '/images/accenture.png',
  '/images/dxc.png',
  '/images/exl.png',
  '/images/genpact.png',
  '/images/google.png',
  '/images/ibm.png',
  '/images/kotak.png',
  '/images/optum.png',
  '/images/paytm.png',
  '/images/tcs.png',
  '/images/wipro.png',
  '/images/zepto.png',


]

const aluminiMarque = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-muted/40 dark:bg-muted/70">
      <div className="animate-marquee inline-block">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="inline-block h-15 mx-6"
          />
        ))}
      </div>



    </div>
  )
}

export default aluminiMarque

    