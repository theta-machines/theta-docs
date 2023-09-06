import React from "react";
import Layout from "@theme/Layout";

import styles from "../css/index.css";

export default function Home() {
  return (
    <Layout>
      <div className="hero-banner">
        <h1>Theta Machines Documentation</h1>
        <p>Documenting our hardware, software, and everything in between.</p>
      </div>
      <div className="page-body">
        <h1>Quick Links</h1>
        <div className="family-wrapper">
          <div className="family-header">
            <div className="family-header-textbox">
              <h1>ETH4K</h1>
              <p>An FPGA development board based on the iCE40HX4K</p>
            </div>
            <div className="family-header-imagebox">
              <img src={require("@site/static/img/eth4k.png").default} />
            </div>
          </div>
          <div className="family-body">
            <div className="family-body-section">
              <h2>Key Documents</h2>
              <ul>
                <li><a href="https://www.thetamachines.com/downloads/hardware/eth4k-pinout.png">Pinout Diagram</a></li>
                <li><a href="https://www.thetamachines.com/downloads/hardware/eth4k-data-sheet.pdf">Data Sheet</a></li>
                <li><a href="https://www.thetamachines.com/downloads/hardware/eth4k-schematic.pdf">Schematic</a></li>
                <li><a href="https://www.thetamachines.com/downloads/hardware/eth4k-bom.pdf">Bill of Materials</a></li>
              </ul>
            </div>
            <div className="family-body-section">
              <h2>Guides</h2>
              <ul>
                <li><a href="/hardware/disco-boards/eth4k/icecube2-guide">iCEcube2 Guide</a></li>
                <li><a href="/hardware/disco-boards/eth4k/diamond-programmer-guide">Diamond Programmer Guide</a></li>
              </ul>
            </div>
            <div className="family-body-section"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
