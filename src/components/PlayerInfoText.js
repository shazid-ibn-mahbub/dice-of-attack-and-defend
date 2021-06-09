import React from "react";
//IMPORT STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
//IMPORT USESELECTOR FOR IMPORTING STATES
import { useSelector } from "react-redux";

const PlayerInfoText = () => {
  const playerRoll = useSelector((state) => state.playerRoll);
  return (
    <PlayerInfoTextContainer>
      <div className="info-text">
        <h2>Red Die Rolled: {playerRoll.redDieScore}</h2>
        <h2>Blue Die Rolled: {playerRoll.blueDieScore}</h2>
        <h2>White Die Rolled: {playerRoll.whiteDieScore}</h2>
      </div>
    </PlayerInfoTextContainer>
  );
};

const PlayerInfoTextContainer = styled(motion.div)`
  height: 20vh;
  width: 90vw;
  margin: auto;
`;

export default PlayerInfoText;
