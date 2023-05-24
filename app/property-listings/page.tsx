import { ListingsHeader, PropertyList } from '@/components/property_listings/PropertyListingsSections'
import React from 'react'

export default function PropertyListings() {
  return (
    <section className='property_listings' id='property_listings'>
      <ListingsHeader/>
      <PropertyList/>
    </section>
  )
}
