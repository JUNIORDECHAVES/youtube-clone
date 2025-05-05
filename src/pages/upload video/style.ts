import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const ContentInteracao = styled.div`
  max-width: 80%;
  margin: 3rem auto;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
`;

export const ContainerVideo = styled.div`
  max-width: 80%;
  margin: 3rem auto;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
`;

export const ContentVideo = styled.div`
cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`

export const Button = styled.button<{width?: string, height?: string, backgroundColor?: string}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  border: none;
  background-color: #6AD8F2;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({backgroundColor}) => `${backgroundColor}7d`};
  }
`;


export const VideoImg = styled.div<{ thumbnail: string }>`
  background-image: url(${({thumbnail}) => thumbnail});
  background-size: cover;
  width: 300px;
  height: 180px;
  border-radius: 4px;
  box-shadow: inset 0px 0px 20px 10px  rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;

  &:hover {
    box-shadow: inset 0px 0px 20px 20px  rgba(0, 0, 0, 0.5);
  }
`;

//------------------------------------------------------------------------

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: red;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    display: flex;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    margin-right: 10px; 
  
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const TitleVideo = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;


//------------------------------------------------------------------------


export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px);          
  -webkit-backdrop-filter: blur(10px);  
  display: flex;
  justify-content: center;
  align-items: center;


`

export const Formulario = styled.form`
  background-color: #F9F9F9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 620px;
  gap: 1.2rem;
  border-radius: 10px;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #333;
  margin: 0 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 0 10px;

`;

export const TextArea = styled.textarea`
  padding: 0.6rem;
  font-size: 1rem;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 0 10px;
  resize: none;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
`;

export const ButtonActionContainer = styled.div<{justifyContent: string}>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent};
  margin: 0 10px;
`;

export const ButtonAction = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  background-color: #d92d20;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #b42318;
  }
`;
