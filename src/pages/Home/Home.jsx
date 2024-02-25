import React from 'react';
import './Home.css';
import { CiCircleCheck } from 'react-icons/ci';
import { SlExclamation } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";
import Card from '../../components/Card/Card';
import CardSection from '../../components/CardSection/CardSection';
import Letter from  '../../components/File/Letter';


const Home = () => {
  return (
    <div className='Home-container'>
        <h1>Best Website builders in the US</h1>
        <hr />
        <div className="firtline">
        <div className='firtline1'><CiCircleCheck className='icons' size={20}  /> <p> Last Update - February 22, 2020 </p>  <SlExclamation /> <p>Advertising Disclosure</p>  </div> 
        <div className='firtline2'>
            Top Relevent <FaAngleDown size={24}/>
        </div>
        </div>
        <div className='secondline'>
            <p>Tools</p>
            <p>AWS Builder</p>
            <p>Start Build</p>
            <p>Build Supplies</p>
            <p>Tooling</p>
            <p>BlueHosting</p>
        </div>
        {/* hardcoded nav line */}
        <div class="horizontal-navigation">
  <ul class="horizontal-navigation-list">
    <li class="horizontal-navigation-item"><a href="/" class="horizontal-navigation-link">Home</a></li>
    <li class="horizontal-navigation-item"><a href="/" class="horizontal-navigation-link">Hosting for all</a></li>
    <li class="horizontal-navigation-item"><a href="/" class="horizontal-navigation-link">Hosting</a></li>
    <li class="horizontal-navigation-item"><a href="/" class="horizontal-navigation-link">Hosting6</a></li>
    <li class="horizontal-navigation-item"><a href="/" class="horizontal-navigation-link">Hosting5</a></li>
  </ul>
</div>
{/* cards section  */}

<Card />

<CardSection/>
<Letter />


    </div>
  )
}

export default Home;