import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex } from "@pancakeswap/uikit";

import { ethers } from "ethers";
import img1 from "./assets/image/dear.jpeg";
import ring from "./assets/icons/ring.png";
import copy from "./assets/icons/copy.png";

import TextField from "@mui/material/TextField";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-20px, -20px);
  }
  to {
    transform: translate(0, 0px);
  }
`;

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`;

function App() {
  const [value, setValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const data = ethers.utils.id(value);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flow-root" }}>
          <BunnyWrapper>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "80px 0px -20px"
              }}
            >
              <span
                style={{
                  fontFamily: "cursive",
                  fontSize: "60px",
                  marginRight: "20px"
                }}
              >
                Congratulations
              </span>
              <img src={ring} alt="ring" width={100} height={100} />
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "60px",
                  marginRight: "20px"
                }}
              >
                Ball & Dear
              </p>
            </div>
            <picture>
              <source type="image/png" srcSet={img1} />
              <img src={`${img1}.jpeg`} alt="" className="App-logo" />
            </picture>
          </BunnyWrapper>
          <div style={{ margin: "30px 300px 30px" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="WISH"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
            />
          </div>
          <div style={{ alignItem: "center" }}>
            <span style={{ fontSize: "20px", color: "#86434D" }}>
              Private Key:{" "}
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#86434D",
                marginRight: "10px"
              }}
            >
              {data}
            </span>
            <CopyToClipboard
              text={data}
              onCopy={() => setCopied(true)}
              style={{ cursor: "pointer" }}
            >
              <img src={copy} alt="copy" width="24px" />
            </CopyToClipboard>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
