const playerRollInfo = {
  playerRolled: false,
  playerTurnFinish: true,
  redDieScore: 0,
  blueDieScore: 0,
  whiteDieScore: 0,
  isDouble: false,
  isTripple: false,
  isMagicalAttack: false,
  isMagicalDefend: false,
  isPhysicalAttack: false,
  isPhysicalDefend: false,
  magicalAttack: 0,
  magicalDefend: 0,
  physicalAttack: 0,
  physicalDefend: 0,
  carryPoints: 0,
  //FOR REPEATING ANIMATION
  redDieScoreRepeatCount: 0,
  blueDieScoreRepeatCount: 0,
  whiteDieScoreRepeatCount: 0,
};

const playerRollReducer = (state = playerRollInfo, action) => {
  switch (action.type) {
    case "PLAYER_ROLL":
      const redDieScore = Math.floor(Math.random() * 6) + 1;
      const blueDieScore = Math.floor(Math.random() * 6) + 1;
      const whiteDieScore = Math.floor(Math.random() * 6) + 1;
      const doubleScore = redDieScore * 2;
      const trippleScore = whiteDieScore * 3;

      //IF CURRENT STATE HAS SAME VAQLUE AS PREVIOUS STATE
      if (state.redDieScore === redDieScore) {
        state.redDieScoreRepeatCount += 1;
      }
      if (state.blueDieScore === blueDieScore) {
        state.blueDieScoreRepeatCount += 1;
      }
      if (state.whiteDieScore === whiteDieScore) {
        state.whiteDieScoreRepeatCount += 1;
      }

      if (whiteDieScore % 2 === 0) {
        //EVEN NUMBER MEANS PLAYER DEFENDS
        if (redDieScore === blueDieScore && blueDieScore === whiteDieScore) {
          //CHECKING IF ITS A TRIPPLE
          return {
            ...state,
            playerRolled: true,
            playerTurnFinish: false,
            redDieScore: redDieScore,
            blueDieScore: blueDieScore,
            whiteDieScore: whiteDieScore,
            isTripple: true,
            isDouble: false,
            carryPoints: state.carryPoints + trippleScore,
          };
        } else if (redDieScore === blueDieScore) {
          //CHECKING IF ITS A DOUBLE
          return {
            ...state,
            playerRolled: true,
            playerTurnFinish: false,
            redDieScore: redDieScore,
            blueDieScore: blueDieScore,
            whiteDieScore: whiteDieScore,
            isTripple: false,
            isDouble: true,
            carryPoints: state.carryPoints + doubleScore,
          };
        } else {
          //IF ITS JUST A REGULAR ROLL
          if (redDieScore > blueDieScore) {
            //PLAYER DOES PHYSICAL DEFEND
            return {
              ...state,
              playerRolled: true,
              playerTurnFinish: true,
              redDieScore: redDieScore,
              blueDieScore: blueDieScore,
              whiteDieScore: whiteDieScore,
              isTripple: false,
              isDouble: false,
              isMagicalAttack: false,
              isMagicalDefend: false,
              isPhysicalAttack: false,
              isPhysicalDefend: true,
              magicalAttack: 0,
              magicalDefend: 0,
              physicalAttack: 0,
              physicalDefend: state.carryPoints + redDieScore,
              carryPoints: 0,
            };
          } else {
            //PLAYER DOES MAGICAL DEFEND
            return {
              ...state,
              playerRolled: true,
              playerTurnFinish: true,
              redDieScore: redDieScore,
              blueDieScore: blueDieScore,
              whiteDieScore: whiteDieScore,
              isTripple: false,
              isDouble: false,
              isMagicalAttack: false,
              isMagicalDefend: true,
              isPhysicalAttack: false,
              isPhysicalDefend: false,
              magicalAttack: 0,
              magicalDefend: state.carryPoints + blueDieScore,
              physicalAttack: 0,
              physicalDefend: 0,
              carryPoints: 0,
            };
          }
        }
      } else {
        //EVEN NUMBER MEANS PLAYER DEFENDS
        if (redDieScore === blueDieScore && blueDieScore === whiteDieScore) {
          //CHECKING IF ITS A TRIPPLE
          return {
            ...state,
            playerRolled: true,
            playerTurnFinish: false,
            redDieScore: redDieScore,
            blueDieScore: blueDieScore,
            whiteDieScore: whiteDieScore,
            isTripple: true,
            isDouble: false,
            carryPoints: state.carryPoints + trippleScore,
          };
        } else if (redDieScore === blueDieScore) {
          //CHECKING IF ITS A DOUBLE
          return {
            ...state,
            playerRolled: true,
            playerTurnFinish: false,
            redDieScore: redDieScore,
            blueDieScore: blueDieScore,
            whiteDieScore: whiteDieScore,
            isTripple: false,
            isDouble: true,
            carryPoints: state.carryPoints + doubleScore,
          };
        } else {
          //IF ITS JUST A REGULAR ROLL
          if (redDieScore > blueDieScore) {
            //PLAYER DOES PHYSICAL ATTACK
            return {
              ...state,
              playerRolled: true,
              playerTurnFinish: true,
              redDieScore: redDieScore,
              blueDieScore: blueDieScore,
              whiteDieScore: whiteDieScore,
              isTripple: false,
              isDouble: false,
              isMagicalAttack: false,
              isMagicalDefend: false,
              isPhysicalAttack: true,
              isPhysicalDefend: false,
              magicalAttack: 0,
              magicalDefend: 0,
              physicalAttack: state.carryPoints + redDieScore,
              physicalDefend: 0,
              carryPoints: 0,
            };
          } else {
            //PLAYER DOES MAGICAL ATTACK
            return {
              ...state,
              playerRolled: true,
              playerTurnFinish: true,
              redDieScore: redDieScore,
              blueDieScore: blueDieScore,
              whiteDieScore: whiteDieScore,
              isTripple: false,
              isDouble: false,
              isMagicalAttack: true,
              isMagicalDefend: false,
              isPhysicalAttack: false,
              isPhysicalDefend: false,
              magicalAttack: state.carryPoints + blueDieScore,
              magicalDefend: 0,
              physicalAttack: 0,
              physicalDefend: 0,
              carryPoints: 0,
            };
          }
        }
      }
    default:
      return state;
  }
};

export default playerRollReducer;
