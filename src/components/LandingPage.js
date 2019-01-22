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
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker} from "react-simple-maps";
import { Motion, spring } from "react-motion"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const cities = [
  { name: "Zurich", coordinates: [8.5417,47.3769] },
  { name: "Singapore", coordinates: [103.8198,1.3521] },
  { name: "San Francisco", coordinates: [-122.4194,37.7749] },
  { name: "Sydney", coordinates: [151.2093,-33.8688] },
  { name: "Lagos", coordinates: [3.3792,6.5244] },
  { name: "Buenos Aires", coordinates: [-58.3816,-34.6037] },
  { name: "Shanghai", coordinates: [121.4737,31.2304] },
]


class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      center: [0,20],
      zoom: 1,
    }
    this.openModal = this.openModal.bind(this)
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
    this.handleCityClick = this.handleCityClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2,
    })
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2,
    })
  }
  handleCityClick(city) {
    this.setState({
      zoom: 2,
      center: city.coordinates,
    })
  }
  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
    })
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

  
      <div className="fourthFrame">
        <div style={wrapperStyles}>
          <Button onClick={this.handleZoomIn}>
            { "Zoom in" }
          </Button>
          <Button onClick={this.handleZoomOut}>
            { "Zoom out" }
          </Button>
          <Button onClick={this.handleReset}>
            { "Reset" }
          </Button>
          <Motion
            defaultStyle={{
              zoom: 1,
              x: 0,
              y: 20,
            }}
            style={{
              zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
              x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
              y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
            }}
            >
            {({zoom,x,y}) => (
              <ComposableMap
                projectionConfig={{ scale: 205 }}
                width={980}
                height={551}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                >
                <ZoomableGroup center={[x,y]} zoom={zoom}>
                  <Geographies geography="/static/world-110m.json">
                    {(geographies, projection) =>
                      geographies.map((geography, i) => geography.id !== "010" && (
                        <Geography
                          key={i}
                          geography={geography}
                          projection={projection}
                          style={{
                            default: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            hover: {
                              fill: "#CFD8DC",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            pressed: {
                              fill: "#FF5722",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                          }}
                        />
                    ))}
                  </Geographies>
                  <Markers>
                    {cities.map((city, i) => (
                      <Marker
                        key={i}
                        marker={city}
                        onClick={this.handleCityClick}
                        >
                        <circle
                          cx={0}
                          cy={0}
                          r={6}
                          fill="#FF5722"
                          stroke="#DF3702"
                        />
                      </Marker>
                    ))}
                  </Markers>
                </ZoomableGroup>
              </ComposableMap>
            )}
          </Motion>
        </div>
      </div>
    </div>
    )
  }
}

export default LandingPage;
