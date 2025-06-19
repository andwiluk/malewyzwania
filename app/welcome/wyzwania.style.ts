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
  top: 1990px;
  left: 1300px;
  height: 285px;
  width: 300px;
  background-image: url(/assets/Krok1/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok1/x2.png);
  }
`;

export const XButton2 = styled(XButton)`
  top: 1715px;
  left: 430px;

  background-image: url(/assets/Krok2/x${(props) =>
    props.color === "gray" ? "1" : "2"}.png);

  &:hover {
    background-image: url(/assets/Krok2/x2.png);
  }
`;

export const XButton3 = styled(XButton)`
  top: 1340px;
  left: 170px;
  background-image: url(/assets/Krok3/x1.png);
  &:hover {
    background-image: url(/assets/Krok3/x2.png);
  }
`;

export const XButton4 = styled(XButton)`
  top: 900px;
  left: 1030px;
  background-image: url(/assets/Krok4/x1.png);
  &:hover {
    background-image: url(/assets/Krok4/x2.png);
  }
`;

export const XButton5 = styled(XButton)`
  top: 800px;
  left: 1030px;
  background-image: url(/assets/Krok5/x1.png);
  &:hover {
    background-image: url(/assets/Krok5/x2.png);
  }
`;

export const XButton6 = styled(XButton)`
  top: 700px;
  left: 1030px;
  background-image: url(/assets/Krok6/x1.png);
`;

interface PathProps {
  color: "gray" | "red" | "green";
}

export const Path1 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok1/path_${(props) => props.color}.png);
  top: 1770px;
  left: 530px;
  width: 895px;
  height: 489px;
  z-index: 10;
`;

export const Path2 = styled.div<PathProps>`
  position: absolute;
  background-image: url(/assets/Krok2/path_${(props) => props.color}.png);
  top: 1400px;
  left: 0px;
  width: 452px;
  height: 405px;
  z-index: 10;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 2200px;
  left: 300px;
  color: white;
  display: flex;
  gap: 10px;
  z-index: 10;
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
  top: 1460px;
  left: 1185px;
  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;
`;

export const Hi = styled.div`
  width: 205px;
  height: 193px;
  background-image: url(/assets/Krok1/hi.png);
  position: absolute;
  top: 1440px;
  left: 800px;
  display: none;
`;

export const Dino = styled.div`
  width: 593px;
  height: 396px;
  background-image: url(/assets/Krok1/dino.png);
  position: absolute;
  top: 1640px;
  left: 820px;
  z-index: 11;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;

  &:hover + ${Hi} {
    display: block;
  }
`;

export const Flowers = styled.div`
  width: 1015px;
  height: 486px;
  background-image: url(/assets/Krok1/flowers.png);
  position: absolute;
  top: 1790px;
  left: 565px;
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
  top: 890px;
  left: 390px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 2s;
`;

export const Flowers2 = styled.div`
  width: 814px;
  height: 673px;
  background-image: url(/assets/Krok2/flowers2.png);
  position: absolute;
  top: 1615px;
  left: 60px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 0.5s;
`;

export const Mountain = styled.div`
  width: 634px;
  height: 354px;
  background-image: url(/assets/Krok2/mountain.png);
  position: absolute;
  top: 1415px;
  left: 190px;

  opacity: 0;
  animation: ${showElement} 0.5s ease forwards;
  animation-delay: 3s;
`;

export const Cloud = styled.div`
  width: 198px;
  height: 410px;
  background-image: url(/assets/Krok2/cloud.png);
  position: absolute;
  top: 1375px;
  left: 310px;
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
