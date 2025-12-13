import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: #222;
  text-align: center;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
`;

export const Botao = styled.button`
  padding: 0.85rem;
  background-color: #ff4747;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #cc3a3a;
  }
`;

export const ImagemPreview = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 12px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #333;
  }
`;

export const TextoPreview = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 12px;
  color: #444;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`;
