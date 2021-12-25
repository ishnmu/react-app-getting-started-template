import * as React from "react";
import Header from "../common/Header";
import { FlexContainer, FlexItem } from "../common/styles/Layouts";
import WelcomeNote from "../common/WelcomeNote";
import WelcomeSubNote from "../common/WelcomeSubNote ";
import { HomeWrapper } from "./home.style";

const Home = () => {
  return (
    <React.Fragment>
      <HomeWrapper>
        <FlexContainer flexDirection="column">
          <FlexItem>
            <Header />
          </FlexItem>
          <FlexItem alignSelf="center">
            <FlexContainer>
              <FlexItem>
                <WelcomeNote note="Welcome to Karkathar Thirumanam" />
              </FlexItem>
            </FlexContainer>
          </FlexItem>
          <FlexItem />
        </FlexContainer>
      </HomeWrapper>
    </React.Fragment>
  );
};

export default Home;
