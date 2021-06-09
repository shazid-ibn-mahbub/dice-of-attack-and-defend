import React from "react";
//IMPORT COMPONENTS
import PlayerRollTable from "./PlayerRollTable";
import PlayerInfoText from "./PlayerInfoText";
//IMPORT STYLES AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
const Player = () => {
  return (
    <PlayerContainer>
      <PlayerInfoText />
      <PlayerRollTable />
    </PlayerContainer>
  );
};

const PlayerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 45vh;
  width: 90vw;
  margin: auto;
`;

export default Player;
