import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import './About.css';
import profile from '../../assets/profile.jpg';

import JS from "../../assets/img/js.svg";
import HTML from "../../assets/img/html.svg";
import CSS from "../../assets/img/css.svg";
import DOCKER from "../../assets/img/docker.svg";
import PHP from "../../assets/img/php.svg";
import Python from "../../assets/img/python.svg"
import GIT from "../../assets/img/git.svg"
import ReactImage from "../../assets/img/React.svg";
import Java from "../../assets/img/java-logo.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  skillFrame: {
    border: '2px solid #333',
    padding: '20px',
    margin: '20px 0',
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, I'm graduating with a bachelor's degree in Electronic Computer Technology at King Mongkut's University of Technology North Bangkok. 
                  I'm interested in DevOps and Developer Backend. and I want to develop myself better by studying what I don't know and studying new technologies that are emerging to improve myself
                  ,to have more knowledge and so on. `;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.skillFrame}>
          <div className="row">
            <div className="col">
              
                <h1>My Skills</h1>
                <p>This is my skill i Learning in University for web Development , Frontend & Backend </p>
                <div className="skill d-flex flex-column justify-content-center align-items-center">
                  <div className="item">
                    <img src={GIT} alt="Image" />
                    <h5>Git Hub</h5>
                  </div>
                  <div className="item">
                    <img src={PHP} alt="Image" />
                    <h5>PHP</h5>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="item">
                    <img src={Python} alt="Image" />
                    <h5>Python</h5>
                  </div>
                </div>
             
            </div>
            <div className="col">
              
                <div className="skill d-flex flex-column justify-content-center align-items-center">
                  <div className="item">
                    <img src={ReactImage} alt="Image" />
                    <h5>React</h5>
                  </div>&nbsp;&nbsp;
                  <div className="item">
                    <img src={JS} alt="Image" />
                    <h5>Java Script</h5>
                  </div>
                  <div className="item">
                    <img src={HTML} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                </div>
            
            </div>
          
            <div className="col">
              
                <div className="skill d-flex flex-column justify-content-center align-items-center">
                  <div className="item">
                    <img src={Java} alt="Image" />
                    <h5>Java</h5>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="item">
                    <img src={CSS} alt="Image" />
                    <h5>CSS</h5>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="item">
                    <img src={DOCKER} alt="Image" />
                    <h5>DOCKER</h5>
                  </div>
                </div>
          
            </div>
          </div>
          </div>
        </div>


      </Container>

    </section>
  );
};

export default About;
