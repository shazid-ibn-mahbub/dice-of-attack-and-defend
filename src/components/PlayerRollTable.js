import React from "react";
//IMPORT COMPONENTS
import RedDie from "./RedDie";
import BlueDie from "./BlueDie";
import WhiteDie from "./WhiteDie";
//IMPORT STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
//IMPORT ACTIONS
import playerRoll from "../actions/playerRoll";
//IMPORT DISPATCH TO DISPATCH ACTIONS
import { useDispatch } from "react-redux";

const PlayerRollTable = () => {
  const dispatch = useDispatch();

  return (
    <PlayerRollTableContainer>
      <RedDie />
      <BlueDie />
      <WhiteDie />
      <button
        onClick={() => dispatch({ type: "PLAYER_ROLL" })}
        className="roll-button"
      >
        Roll
      </button>
    </PlayerRollTableContainer>
  );
};

const PlayerRollTableContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 25vh;
  width: 90vw;
  margin: auto;
  .roll-button {
    padding: 1rem 2rem;
  }
`;

export default PlayerRollTable;
