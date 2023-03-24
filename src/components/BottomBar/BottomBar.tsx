import { FC } from 'react';
import {
  BottomBarWrapper, BottomButtonWrapper, StyledButton
} from './style';

const BottomBar: FC = () => {
  return (
    <BottomBarWrapper>
      <BottomButtonWrapper>
        <StyledButton>A</StyledButton>
        <p>See Details</p>
      </BottomButtonWrapper>

      <BottomButtonWrapper>
        <StyledButton>X</StyledButton>
        <p>Habitat</p>
      </BottomButtonWrapper>

      <BottomButtonWrapper>
        <StyledButton>Y</StyledButton>
        <p>Sort</p>
      </BottomButtonWrapper>

      <BottomButtonWrapper>
        <StyledButton>B</StyledButton>
        <p>Back</p>
      </BottomButtonWrapper>
    </BottomBarWrapper>
  );
};

export default BottomBar;
