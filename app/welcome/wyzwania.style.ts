// All left properties increased by 245px

import { styled } from "styled-components";
import { keyframes } from "styled-components";

const showElement = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const dinoDance = keyframes`
  0% { transform: translateY(0) rotate(0deg);}
  10% { transform: translateY(-10px) rotate(-10deg);}
  20% { transform: translateY(0) rotate(10deg);}
  30% { transform: translateY(-10px) rotate(-10deg);}
  40% { transform: translateY(0) rotate(10deg);}
  50% { transform: translateY(-10px) rotate(-10deg);}
  60% { transform: translateY(0) rotate(10deg);}
  70% { transform: translateY(-10px) rotate(-10deg);}
  80% { transform: translateY(0) rotate(10deg);}
  90% { transform: translateY(-10px) rotate(-10deg);}
  100% { transform: translateY(0) rotate(0deg);}
`;

export const XButton = styled.div`
  position: absolute;
  cursor: pointer;
  display: block;
  height: 160px;
  width: 160px;
  background-repeat: no-repeat;
  z-index: 100;
`;

interface XButtonProps {
  color: "gray" | "red";
}

export const XButton1 = styled(XButton)<XButtonProps>`
  top: 2405px;
  left: 1545px;
  height: 285px;
  width: 300px;
  background-image: url(/assets/Krok1/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok1/x2.png);
  }
`;

export const XButton2 = styled(XButton)`
  top: 2130px;
  left: 675px;

  background-image: url(/assets/Krok2/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok2/x2.png);
  }
`;

export const XButton3 = styled(XButton)`
  top: 1675px;
  left: 320px;
  background-image: url(/assets/Krok3/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok3/x2.png);
  }
`;

export const XButton4 = styled(XButton)`
  top: 1510px;
  left: 1170px;
  background-image: url(/assets/Krok4/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);
  &:hover {
    background-image: url(/assets/Krok4/x2.png);
  }
`;

export const XButton5 = styled(XButton)`
  top: 930px;
  left: 350px;
  background-image: url(/assets/Krok5/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);
  &:hover {
    background-image: url(/assets/Krok5/x2.png);
  }
`;

export const XButton6 = styled(XButton)`
  top: 515px;
  left: 1385px;
  background-image: url(/assets/Krok6/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok6/x2.png);
  }
`;

export const XButton7 = styled(XButton)`
  top: 145px;
  left: 1005px;
  background-image: url(/assets/Krok7/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok7/x2.png);
  }
`;

interface PathProps {
  color: "gray" | "red" | "green";
}

export const Path1 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok1/path_${(props) => props.color}.png);
  top: 2185px;
  left: 775px;
  width: 895px;
  height: 489px;
  z-index: 10;
`;

export const Path2 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok2/path_${(props) => props.color}.png);
  top: 1745px;
  left: 120px;
  width: 452px;
  height: 405px;
  z-index: 10;
`;

export const Path3 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok3/path_${(props) => props.color}.png);
  top: 1630px;
  left: 425px;
  width: 824px;
  height: 194px;
  z-index: 10;
`;

export const Path4 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok4/path_${(props) => props.color}.png);
  top: 1050px;
  left: 400px;
  width: 904px;
  height: 499px;
  z-index: 10;
`;

export const Path5 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok5/path_${(props) => props.color}.png);
  top: 635px;
  left: 405px;
  width: 1117px;
  height: 310px;
  z-index: 10;
`;

export const Path6 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok6/path_${(props) => props.color}.png);
  top: 280px;
  left: 700px;
  width: 741px;
  height: 341px;
  z-index: 10;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 2615px;
  left: 545px;
  color: white;
  display: flex;
  gap: 10px;
  z-index: 10;

  & > button {
    cursor: pointer;
  }
`;

export const TripModalButton = styled.button`
  background-color: #ffaa10;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Volcano = styled.div`
  width: 452px;
  height: 480px;
  background-image: url(/assets/Krok1/volcano.png);
  position: absolute;
  top: 1875px;
  left: 1430px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;
`;

export const Hi = styled.div`
  width: 205px;
  height: 193px;
  background-image: url(/assets/Krok1/hi.png);
  position: absolute;
  top: 1855px;
  left: 1045px;
  // display: none;
`;

export const Dino = styled.div`
  width: 593px;
  height: 396px;
  background-image: url(/assets/Krok1/dino.png);
  position: absolute;
  top: 2055px;
  left: 1065px;
  z-index: 11;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;

  // &:hover + ${Hi} {
  //   display: block;
  // }

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const Flowers = styled.div`
  width: 1015px;
  height: 486px;
  background-image: url(/assets/Krok1/flowers.png);
  position: absolute;
  top: 2205px;
  left: 810px;
  z-index: 1;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;
`;

///// STEP 2
export const Ptero = styled.div`
  width: 415px;
  height: 575px;
  background-image: url(/assets/Krok2/ptero.png);
  position: absolute;
  top: 1305px;
  left: 635px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const Flowers2 = styled.div`
  width: 814px;
  height: 673px;
  background-image: url(/assets/Krok2/flowers2.png);
  position: absolute;
  top: 2030px;
  left: 305px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const Mountain = styled.div`
  width: 634px;
  height: 354px;
  background-image: url(/assets/Krok2/mountain.png);
  position: absolute;
  top: 1830px;
  left: 435px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;
`;

export const Cloud = styled.div`
  width: 198px;
  height: 410px;
  background-image: url(/assets/Krok2/cloud.png);
  position: absolute;
  top: 1790px;
  left: 555px;
  z-index: 13;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;

  & > span {
    position: absolute;
    top: 40px;
    left: 35px;
    font-size: 30px;
    color: #ffaa10;
    font-weight: bold;
  }
`;

/// STEP 3
export const DinoStep3 = styled.div`
  width: 310px;
  height: 235px;
  background-image: url(/assets/Krok3/dino.png);
  position: absolute;
  top: 1790px;
  left: 245px;
  z-index: 11;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const DinoMiniStep3 = styled.div`
  width: 283px;
  height: 218px;
  background-image: url(/assets/Krok3/dinomini_1.png);
  position: absolute;
  top: 1115px;
  left: 30px;
  z-index: 11;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1.5s;
`;

export const FlowersStep3 = styled.div`
  width: 500px;
  height: 667px;
  background-image: url(/assets/Krok3/flowers.png);
  position: absolute;
  top: 1330px;
  left: 50px;
  z-index: 1;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const BalloonStep3 = styled.div`
  width: 238px;
  height: 341px;
  background-image: url(/assets/Krok3/balloon.png);
  position: absolute;
  top: 1410px;
  left: 260px;
  z-index: 12;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;

  & > span {
    position: absolute;
    font-size: 30px;
    color: #ffaa10;
    font-weight: bold;
    transform: translate(-50%, -50%);
    top: 25%;
    left: 50%;
    text-align: center;
  }
`;

// STEP 4
export const DinoStep4 = styled.div`
  width: 679px;
  height: 216px;
  background-image: url(/assets/Krok4/dino4.png);
  position: absolute;
  top: 1550px;
  left: 1215px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const FlowersStep4 = styled.div`
  width: 921px;
  height: 742px;
  background-image: url(/assets/Krok4/flowers4.png);
  position: absolute;
  top: 1205px;
  left: 965px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const CloudStep4 = styled.div`
  width: 237px;
  height: 184px;
  background-image: url(/assets/Krok4/cloud4.png);
  position: absolute;
  top: 1380px;
  left: 970px;
  z-index: 13;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;

  & > span {
    position: absolute;
    font-size: 30px;
    color: #ffaa10;
    font-weight: bold;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
  }
`;

// STEP 5
export const DinoStep5 = styled.div`
  width: 593px;
  height: 452px;
  background-image: url(/assets/Krok5/dino5.png);
  position: absolute;
  top: 595px;
  left: 120px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;
  z-index: 11;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const FlowersStep5 = styled.div`
  width: 675px;
  height: 1066px;
  background-image: url(/assets/Krok5/flowers5.png);
  position: absolute;
  top: 250px;
  left: 10px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const Octopus = styled.div`
  width: 545px;
  height: 316px;
  background-image: url(/assets/Krok5/octopus.png);
  position: absolute;
  top: 925px;
  left: 1000px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;
  z-index: 12;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const CloudStep5 = styled.div`
  width: 237px;
  height: 184px;
  background-image: url(/assets/Krok5/cloud5.png);
  position: absolute;
  top: 1040px;
  left: 145px;
  z-index: 13;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;

  & > span {
    position: absolute;
    font-size: 30px;
    color: #ffaa10;
    font-weight: bold;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
  }
`;

export const Palma1 = styled.div`
  width: 336px;
  height: 345px;
  background-image: url(/assets/Krok5/palma1.png);
  position: absolute;
  top: 470px;
  left: 60px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1.5s;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const Palma2 = styled.div`
  width: 262px;
  height: 279px;
  background-image: url(/assets/Krok5/palma2.png);
  position: absolute;
  top: 470px;
  left: 410px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

// STEP 6
export const DinoStep6 = styled.div`
  width: 751px;
  height: 362px;
  background-image: url(/assets/Krok6/dino6.png);
  position: absolute;
  top: 230px;
  left: 1145px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;
  z-index: 11;

  &.dino-dance {
    animation: ${showElement} 0.5s ease forwards 1s,
      ${dinoDance} 4s linear infinite 1.5s;
    /* The dance starts after show animation */
  }
`;

export const FlowersStep6 = styled.div`
  width: 915px;
  height: 605px;
  background-image: url(/assets/Krok6/flowers6.png);
  position: absolute;
  top: 270px;
  left: 905px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const CloudStep6 = styled.div`
  width: 377px;
  height: 326px;
  background-image: url(/assets/Krok6/cloud6.png);
  position: absolute;
  top: 580px;
  left: 1445px;
  z-index: 13;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;

  & > span {
    position: absolute;
    font-size: 30px;
    color: #ffaa10;
    font-weight: bold;
    transform: translate(-50%, -50%);
    top: 70%;
    left: 65%;
    text-align: center;
  }
`;

export const MountainStep6 = styled.div`
  width: 418px;
  height: 224px;
  background-image: url(/assets/Krok6/mountain6.png);
  position: absolute;
  top: 600px;
  left: 435px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;
`;

// Step 7
export const DinoStep7 = styled.div`
  width: 635px;
  height: 350px;
  background-image: url(/assets/Krok7/dino7.png);
  position: absolute;
  top: 145px;
  left: 1005px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 1s;
  z-index: 11;
`;

export const CloudStep7 = styled.div`
  width: 253px;
  height: 184px;
  background-image: url(/assets/Krok7/cloud7.png);
  position: absolute;
  top: 145px;
  left: 735px;
  z-index: 13;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;
  & > span {
    position: absolute;
    font-size: 30px;
    color: rgb(241, 79, 15);
    font-weight: bold;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
  }
`;

export const Meta = styled.div`
  position: absolute;
  top: 30px;
  left: 600px;
  width: 296px;
  height: 105px;
  background-image: url(/assets/Krok7/meta.png);
`;

////

export const Logo = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 231px;
  height: 271px;
  z-index: 0;
`;

export const ShowCongratulations = styled.div`
  z-index: 200;
`;

export const Step1 = styled.div``;
export const Step2 = styled.div``;
export const Step3 = styled.div``;
export const Step4 = styled.div``;
export const Step5 = styled.div``;
export const Step6 = styled.div``;
