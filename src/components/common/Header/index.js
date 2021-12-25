import * as React from "react";
import Logo from "../Logo";
import { FlexContainer, FlexItem } from "../styles/Layouts";
import { HeaderWrapper } from "./header.style";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderWrapper>
        <FlexContainer>
          <FlexItem>
            <Logo />
          </FlexItem>
        </FlexContainer>
      </HeaderWrapper>
    </React.Fragment>
  );
};

export default Header;
