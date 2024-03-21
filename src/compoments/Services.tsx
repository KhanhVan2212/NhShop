import React from 'react'
import Cup from '@/assets/icons/10.svg'
import Tich from '@/assets/icons/11.svg'
import Ship from '@/assets/icons/12.svg'
import Sup from '@/assets/icons/13.svg'
const Services = () => {
  return (
    <div>
      <section className="services">
    <div className="container-fluid">
      <div className="service-list">
        <div className="service-item">
          <img src={Cup} className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src={Tich} className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src={Ship} className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src={Sup} className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Services
