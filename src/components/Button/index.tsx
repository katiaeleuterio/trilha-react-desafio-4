import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, valid }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} valid={valid}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
