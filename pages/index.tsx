import { useDeno } from "aleph";
import React, { useState } from "react";
import { Button, Avatar, Typography, Space, Row, Col } from "antd";
import Particles from "https://esm.sh/react-tsparticles";
import { CaretDownOutlined } from "https://esm.sh/@ant-design/icons";
import { ISourceOptions } from "https://esm.sh/tsparticles";
import PointSystem from "../components/PointSystem.tsx";
import ScrollIntoView from "https://esm.sh/react-scroll-into-view";
const { Title } = Typography;

export default function Home() {
  const version = useDeno(async () => {
    return await Deno.version.deno;
  });

  return (
    <>
      <div className="page">
        <Particles
          id="tsparticles"
          options={
            {
              background: {
                color: {
                  value: "#181818",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ba3144",
                },
                links: {
                  color: "#ba3144",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            } as ISourceOptions
          }
        />
        <link rel="stylesheet" href="../style/index.css" />
        <div className="pageCard">
          <p className="logo">
            <Avatar
              size={256}
              src="http://rankingseason.website2.me/upload/927721/images/optimize/F833C6A5379B4E45.webp"
            />
          </p>
          <br />
          <br />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <div className="gutter-col" style={{ display: "inline-block" }}>
                Regions
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="gutter-col" style={{ display: "inline-block" }}>
                Team Rankings
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="gutter-col" style={{ display: "inline-block" }}>
                Hall of Fame
              </div>
            </Col>
          </Row>
          <br />
          <footer>
            <div className="arrow bounce">
              <ScrollIntoView selector="#tableid">
                <a
                  className="fa fa-arrow-down fa-2x"
                  target="_blank"
                  style={{ display: "inline-block" }}
                >
                  Point System
                  <br />
                  <CaretDownOutlined />
                </a>
              </ScrollIntoView>
            </div>
          </footer>
        </div>
        <div
          className="pageCard"
          style={{ margin: "20px", pageBreakBefore: "always" }}
        >
          <PointSystem />
        </div>
        <br />
      </div>
    </>
  );
}
