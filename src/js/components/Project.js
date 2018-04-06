'use strict';

import React, { Component, PropTypes } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   project: this.props.project
    // }
  }

  render() {
    return (
      <div className={"project" + " " + this.props.project.type}>
        { this.props.project.type === 'video'
          ?
            <div>
              <div className="video-line">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="videoWrapper">
                <div dangerouslySetInnerHTML={{__html: this.props.project.assets[0]}}></div>
                <div className="video-logo">
                  <div className="images-container">
                    <img className="outer" src="./public/icons/video-logo-outer.svg" alt="" />
                    <img className="inner" src="./public/icons/video-logo-inner.svg" alt="" />
                    <img className="center" src="./public/icons/video-logo-center.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="scroll-text">
                <p>SCROLL FOR MORE</p>
                <img src="./public/icons/arrow-long.svg" alt="" />
              </div>
              <div className="video-logo-mobile">
                <div className="images-container">
                  <img className="outer" src="./public/icons/video-logo-outer.svg" alt="" />
                  <img className="inner" src="./public/icons/video-logo-inner.svg" alt="" />
                  <img className="center" src="./public/icons/video-logo-center.svg" alt="" />
                </div>
              </div>
            </div>
          :
          <div>
            <div className="text-wrapper">
              <div className="description" dangerouslySetInnerHTML={{__html: this.props.project.description}}>
              </div>
              <div className="tags">{this.props.project.tags}</div>
              { this.props.project.project_link !== ''
                ?
                  <div className="project-link">
                    <a href={this.props.project.project_link}>{this.props.project.link_name}</a>
                  </div>
                :
                  <div></div>
              }
            </div>
            <div className="poster-wrapper">
              <div className="poster">
                { this.props.project.assets.map((asset, key) =>
                  <img src={asset} key={key} alt="" />
                )}
              </div>
              <div className="poster-scroll">
                <div className="poster-scroll-top"><img src="./public/icons/arrow-top.svg" alt="" /></div>
                <div className="poster-scroll-bottom"><img src="./public/icons/arrow-bottom.svg" alt="" /></div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Project;
