import styled from 'styled-components';

export const DemodayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const DemodayBox = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
  border: 1px solid yellow;
`;

export const DemodayHeadText = styled.h1`
  font-family: 'DMSansBold';
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const DemodaySubText = styled.h2`
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const DemoTrailerBox = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  gap: 15px;
  overflow-x: auto;
  transition: all 0.3s;
  border: 1px solid yellow;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const DemoTrailerItem = styled.section`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media all and (max-width: 705px) {
    width: 200px;
    height: 250px;
  }
  @media all and (max-width: 505px) {
    width: 160px;
    height: 200px;
  }
`;

export const ShadowScreen = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.textColor};
  font-family: 'DMSansBold';
  font-weight: 900;
  font-size: 18px;
`;

export const DemoTrailerThumbnail = styled.img`
  width: 100%;
  height: 55%;
  border: none;
  border-radius: 15px 15px 0 0;
`;

export const DemoTrailerBody = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 0 0 15px 15px;
  padding: 20px;
  @media all and (max-width: 705px) {
    padding: 10px;
    gap: 0;
  }
`;

export const TrailerPubDate = styled.section`
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => `2px solid ${props.theme.secondaryColor}`};
  background-color: transparent;
  color: ${(props) => props.theme.secondaryColor};
  font-family: 'DMSansBold';
  font-size: 12px;
  @media all and (max-width: 705px) {
    width: 100px;
    height: 20px;
  }
  @media all and (max-width: 505px) {
  }
`;

export const TrailerTitle = styled.h2`
  font-family: 'DMSansBold';
  font-size: 14px;
  font-weight: 900;
  color: ${(props) => props.theme.bgColor};
`;
