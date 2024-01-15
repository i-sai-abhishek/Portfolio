import React from 'react';
import "./services.css";
import Img1 from '../../assets/service-1.svg';
import Img2 from '../../assets/service-2.svg';
import Img3 from '../../assets/service-3.svg';


const data = [
  
  {
    id:1,
    image: Img1,
    title: "UI/UX",
    description:"this ui ux desc",
  },

  {
    id:2,
    image: Img2,
    title: "Web Dev",
    description:"this Web Dev desc",
  },

  {
    id:3,
    image: Img3,
    title: "Software",
    description:"this Software desc",
  },

];


const Services = () => {
  return (
  <section  className="services container section" id="services">
    <h2 className="section__title">Services</h2>
    <div className="services__container grid">
      {data.map(({id,image,title,description}) => {
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      } )}
    </div>

  </section>
  )
}

export default Services