import type { FC } from 'react'
import  Home  from './Home';
import { Projects } from './Projects';
import HowWeWork from './HowWeWork';
import WhyChooseUs from './WhyChooseUs';
import Tools from './Tools';


const Homemain : FC = () => {
  return (
    <>
     <Home />
     <Projects />
      <Tools />
      <HowWeWork />
      <WhyChooseUs />
    </>
  )
}

export default Homemain;