import React from 'react'
import Image from 'next/image'

export default function ListingsHeader() {
  return (
    <div className='header_image' 
    // style={{ backgroundImage: 'url("/static/img/city-4.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <Image
        src="/static/img/city-4.jpg"
        alt="William Seklo"
        fill
        style={{objectFit: "cover", objectPosition: "center"}}
        // className='image'
      />
      <div className="opaque_container">
        <h1>Dakar</h1>
        <p>Sénégal - zone urbaine</p>
      </div>
    </div>
  )
}
