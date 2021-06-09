import React from "react";
//IMPORT STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  dieRotateAnimationFace1,
  dieRotateAnimationFace2,
  dieRotateAnimationFace3,
  dieRotateAnimationFace4,
  dieRotateAnimationFace5,
  dieRotateAnimationFace6,
  dieRotateAnimationFace1Alternate,
  dieRotateAnimationFace2Alternate,
  dieRotateAnimationFace3Alternate,
  dieRotateAnimationFace4Alternate,
  dieRotateAnimationFace5Alternate,
  dieRotateAnimationFace6Alternate,
} from "../animation";
//IMPORT USESELECTOR FOR IMPORTING STATES
import { useSelector } from "react-redux";
import playerRoll from "../actions/playerRoll";

const RedDie = () => {
  const playerRoll = useSelector((state) => state.playerRoll);
  const dieRotateAnimationFace = () => {
    if (playerRoll.redDieScoreRepeatCount % 2 === 1) {
      switch (playerRoll.redDieScore) {
        case 1:
          return dieRotateAnimationFace1Alternate;
        case 2:
          return dieRotateAnimationFace2Alternate;
        case 3:
          return dieRotateAnimationFace3Alternate;
        case 4:
          return dieRotateAnimationFace4Alternate;
        case 5:
          return dieRotateAnimationFace5Alternate;
        case 6:
          return dieRotateAnimationFace6Alternate;
      }
    } else {
      switch (playerRoll.redDieScore) {
        case 1:
          return dieRotateAnimationFace1;
        case 2:
          return dieRotateAnimationFace2;
        case 3:
          return dieRotateAnimationFace3;
        case 4:
          return dieRotateAnimationFace4;
        case 5:
          return dieRotateAnimationFace5;
        case 6:
          return dieRotateAnimationFace6;
      }
    }
  };
  return (
    <RedDieContainer>
      <motion.div
        variants={dieRotateAnimationFace()}
        initial="initial"
        animate="animate"
        className="red-die"
      >
        <div className="die-side die-side-1">
          <div className="circle">
            <div className="c1"></div>
          </div>
        </div>
        <div className="die-side die-side-2">
          <div className="circle">
            <div className="c1"></div>
            <div className="c2"></div>
          </div>
        </div>
        <div className="die-side die-side-3">
          <div className="circle">
            <div className="c1"></div>
            <div className="c2"></div>
            <div className="c3"></div>
          </div>
        </div>
        <div className="die-side die-side-4">
          <div className="circle">
            <div className="circle-left">
              <div className="c1"></div>
              <div className="c2"></div>
            </div>
            <div className="circle-right">
              <div className="c3"></div>
              <div className="c4"></div>
            </div>
          </div>
        </div>
        <div className="die-side die-side-5">
          <div className="circle">
            <div className="circle-left">
              <div className="c1"></div>
              <div className="c2"></div>
            </div>
            <div className="circle-middle">
              <div className="c3"></div>
            </div>
            <div className="circle-right">
              <div className="c4"></div>
              <div className="c5"></div>
            </div>
          </div>
        </div>
        <div className="die-side die-side-6">
          <div className="circle">
            <div className="circle-left">
              <div className="c1"></div>
              <div className="c2"></div>
              <div className="c3"></div>
            </div>
            <div className="circle-right">
              <div className="c4"></div>
              <div className="c5"></div>
              <div className="c6"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </RedDieContainer>
  );
};

const RedDieContainer = styled(motion.div)`
  height: 10rem;
  width: 10rem;
  position: relative;

  .red-die {
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;

    .die-side {
      position: absolute;
      background-color: #e26060;
      height: 100%;
      width: 100%;
      border: 0.25rem solid #7e7e7e;
      text-align: center;
      font-size: 2rem;
    }

    .die-side-1 {
      transform: translateZ(5rem);
      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        .c1 {
          height: 30%;
          width: 30%;
          background-color: black;
          border-radius: 50%;
        }
      }
    }

    .die-side-2 {
      transform: translateY(-5rem) rotateX(90deg);
      .circle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        .c1,
        .c2 {
          height: 30%;
          width: 30%;
          background-color: black;
          border-radius: 50%;
        }
        .c1 {
          align-self: flex-start;
        }
        .c2 {
          align-self: flex-end;
        }
      }
    }

    .die-side-3 {
      transform: translateZ(-5rem) rotateY(180deg);
      .circle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        .c1,
        .c2,
        .c3 {
          height: 30%;
          width: 30%;
          background-color: black;
          border-radius: 50%;
        }
        .c1 {
          align-self: flex-start;
        }
        .c3 {
          align-self: flex-end;
        }
      }
    }

    .die-side-4 {
      transform: translateY(5rem) rotateX(-90deg);
      .circle {
        display: flex;
        height: 100%;
        width: 100%;
        .circle-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 50%;
          .c1,
          .c2 {
            height: 30%;
            width: 60%;
            background-color: black;
            border-radius: 50%;
          }
        }
        .circle-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          height: 100%;
          width: 50%;
          .c3,
          .c4 {
            height: 30%;
            width: 60%;
            background-color: black;
            border-radius: 50%;
          }
        }
      }
    }

    .die-side-5 {
      transform: translateX(-5rem) rotateY(90deg);
      .circle {
        display: flex;
        height: 100%;
        width: 100%;
        .circle-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 33.33%;
          .c1,
          .c2 {
            height: 30%;
            width: 90%;
            background-color: black;
            border-radius: 50%;
          }
        }
        .circle-middle {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 33.33%;
          .c3 {
            height: 30%;
            width: 90%;
            background-color: black;
            border-radius: 50%;
          }
        }
        .circle-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          height: 100%;
          width: 33.33%;
          .c4,
          .c5 {
            height: 30%;
            width: 90%;
            background-color: black;
            border-radius: 50%;
          }
        }
      }
    }

    .die-side-6 {
      transform: translateX(5rem) rotateY(-90deg);
      .circle {
        display: flex;
        height: 100%;
        width: 100%;
        .circle-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 50%;
          .c1,
          .c2,
          .c3 {
            height: 30%;
            width: 60%;
            background-color: black;
            border-radius: 50%;
          }
        }
        .circle-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          height: 100%;
          width: 50%;
          .c4,
          .c5,
          .c6 {
            height: 30%;
            width: 60%;
            background-color: black;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export default RedDie;
