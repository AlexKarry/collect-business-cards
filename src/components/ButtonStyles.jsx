import styled from "styled-components";

export const submitButtonStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "12px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  width: "200px",
};

export const SubmitButton = styled.button`
  ${submitButtonStyle}

  &:hover {
    background-color: darkgreen;
  }
`;

export const resetButtonStyle = {
  backgroundColor: "rgb(255, 255, 255)",
  color: "rgb(192, 192, 192)",
  padding: "12px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  width: "200px",
};

export const ResetButton = styled.button`
  ${resetButtonStyle}

  &:hover {
    background-color: #e5e4e4;
    color: #8a8a8a;
  }
`;

export const databaseButtonStyle = {
  backgroundColor: "orange",
  color: "white",
  padding: "12px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  width: "200px",
};

export const DatabaseButton = styled.button`
  ${databaseButtonStyle}

  &:hover {
    background-color: #ff8c00;
  }
`;