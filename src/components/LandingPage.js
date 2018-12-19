import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import '../react-modal-video/scss/modal-video.scss'
import { Link } from "react-router-dom";
import {Icon, Button, Row, Col, Card } from "antd";
import NavigationBar from './NavigationBar.js';
import {Animated} from "react-animated-css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylesheets/landingPage.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import LeftArrow from '../images/left-arrow.svg'
import RightArrow from '../images/right-arrow.svg'

class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render() {

    function LeftNavButton(props) {
        const {className, style, onClick} = props
        return (<div
            className="slick-arrow"
            style={{...style, display: 'block', position: 'absolute',left:'1%', top: '50%', height: '20px', width: '20px', transform: 'translateY(-50%)'}}
            onClick={onClick}
        >

                <img onClick={onClick} src={LeftArrow}  style={{height:"20px", width:"20px"}} alt="arrow_left"/>
            </div>
        );
    }

    function RightNavButton(props) {
        const {className, style, onClick} = props
        return (
          <div
              className="slick-arrow"
              style={{...style, display: 'block', position: 'absolute', top: '50%', right:'1%', height: '20px', width: '20px', transform: 'translateY(-50%)'}}
              onClick={onClick}
          >
                <img onClick={onClick} src={RightArrow} style={{height:"20px", width:"20px"}} alt="arrow_right"/>
            </div>
        );
    }


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className:'slides',
      nextArrow: <RightNavButton/>,
      prevArrow: <LeftNavButton />,
      // autoplay: true,
      // autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const { Meta } = Card;


    return (
    <div>
      <div>
        <NavigationBar/>
      </div>

      <div className="firstFrame">
        <img id="logoStyle" src={require('../images/logo_blanc_Be_Proud_of_You.png')}/>
        <h1 className="titleBeProudOfYou">Be proud of You</h1>
        <h3 className="sloganBeProudOfYou">Soyez fiers d'accompagner nos micro-entrepreneurs</h3>
        <Link to="/About"><Button className="btn-Home-Desc" >Plateforme de dons afin de soutenir la création de valeur au Togo </Button></Link>
      </div>

      <div className="secondFrame">
        <Row>
          <Col span={12} offset={3}>
            <h5 className="descText1">Contribuez au développement d'entrepreneurs locaux</h5>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={3}>
            <h5 className="descText">Suivez quotidiennement l'avancée de leur projet</h5>
          </Col>
          <Col span={1} offset={3}>
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='gTEXJsw62iU' onClose={() => this.setState({isOpen: false})} />
            <Icon className="iconPlay" type="play-circle" onClick={this.openModal}/>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={3}>
            <h5 className="descText">Recevez votre cadre photo personnalisé comme lien indélébile</h5>
          </Col>
        </Row>
      </div>

      <div className="thirdFrame" style={{backgroundColor:"#FFFFFF"}}>

        <Slider {...settings}>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Georges"
                description="Energies renouvelables"
                />
            </Card>
          </div>
          <div className="cardsDiplay">
            <Card
              hoverable
              style={{ width: 240, boxShadow: "1px 3px 20px #000000" }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta
                title="Eugénie"
                description="Agriculture"
                />
            </Card>
          </div>
        </Slider>
      </div>
    </div>
    )
  }
}

export default LandingPage;
