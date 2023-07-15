import styled from 'styled-components';

export const DemodayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  height: 500px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 15px;
  overflow-x: auto;
  transition: all 0.3s;
  border: 1px solid yellow;
  @media all and (max-width: 705px) {
    width: 500px;
    height: 400px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
    height: 300px;
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
  object-fit: cover;
  object-position: center;
  filter: ${(props) => (props.isFull ? 'brightness(50%)' : 'none')};
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

// Demo detail page----------------------------------------
export const DemoDetailBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DemoDetailHeaderSection = styled.div`
  width: 700px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
    height: 50%;
  }
  border-bottom: ${(props) => `1px solid ${props.theme.secondaryColor}`};
`;

export const DemoDetailHeadText = styled.h1`
  font-family: 'DMSansBold';
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => props.theme.primaryColor};
  border-bottom: ${(props) => `2px solid ${props.theme.secondaryColor}`};
`;

export const DemoDetailThumbnail = styled.img`
  width: 700px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16 / 9;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
  }
`;

export const DemoDetailSubText = styled.h2`
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
`;

export const DemoDetailFooterSection = styled.div`
  width: 700px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 500px;
  }
  @media all and (max-width: 505px) {
    width: 350px;
    height: 50%;
  }
`;

export const DemoDetailKeyBox = styled.section`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  @media all and (max-width: 505px) {
    width: 40%;
  }
`;

export const DemoDetailKey = styled.h3`
  font-family: 'DMSansBold';
  font-size: 14px;
  font-weight: 900;
  line-height: 3;
  color: ${(props) => props.theme.textColor};
`;

export const DemoDetailValueBox = styled.section`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  @media all and (max-width: 505px) {
    width: 60%;
  }
`;

export const DemoDetailValue = styled.h3`
  font-size: 14px;
  line-height: 3;
  color: ${(props) => props.theme.textColor};
`;

export const DemoSignUpButton = styled.button`
  width: 280px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, 0);
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  padding: 10px;
  cursor: pointer;
`;
