import styled from "styled-components";

const StyledArea = styled.textarea`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
`;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = (props) => {
  return <StyledArea {...props} />;
};

export default Textarea;