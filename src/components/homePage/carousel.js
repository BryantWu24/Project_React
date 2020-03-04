import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel_1 from './img/CS_01.jpg';
import Carousel_2 from './img/CS_02.jpg';
import Carousel_3 from './img/CS_03.jpg';
import Carousel_4 from './img/CS_04.jpg';
import Carousel_5 from './img/CS_05.jpg';
import Carousel_6 from './img/CS_06.jpg';
import Carousel_7 from './img/CS_07.jpg';
import {connect} from 'react-redux';
import {
} from '../action';


    class MenuHeader extends Component {
    render(){
  return (  
  <Carousel showArrows={true} autoPlay={true} centerSlidePercentage={50} swipeScrollTolerance={3} showStatus={false} emulateTouch={true} width='90VW' infiniteLoop={true} useKeyboardArrows={true} centerMode={true}>
    <div style={{padding:'30px'}}>
        <img src={Carousel_1} alt='01' />
        <p className="legend">Legend 1</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_2} alt='02' />
        <p className="legend">Legend 2</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_3} alt='03' />
        <p className="legend">Legend 3</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_4} alt='04' />
        <p className="legend">Legend 4</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_5} alt='05' />
        <p className="legend">Legend 5</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_6} alt='06' />
        <p className="legend">Legend 6</p>
    </div>
    <div style={{padding:'30px'}}>
        <img src={Carousel_7} alt='07' />
        <p className="legend">Legend 7</p>
    </div>
</Carousel>
  );
}
}

const mapStateToProps = (state)=>{
    return{
        menuItem:state.handleMenuHeaderItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handleMenuItem: (val)=>{
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader)