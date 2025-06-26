// All left properties increased by 245px

import { styled } from "styled-components";
import { keyframes } from "styled-components";

const showElement = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const XButton = styled.div`
  position: absolute;
  cursor: pointer;
  display: block;
  height: 160px;
  width: 160px;
  background-repeat: no-repeat;
  z-index: 12;
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
    font-size: 25px;
    color: white;
    font-weight: bold;
  }
`;

export const Step1 = styled.div``;
export const Step2 = styled.div``;
export const Step3 = styled.div``;
export const Step4 = styled.div``;
export const Step5 = styled.div``;
export const Step6 = styled.div``;
