import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "stretch")};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : "flex-start"};
  column-gap: ${(props) => (props.columnGap ? props.columnGap : "2px")};
  row-gap: ${(props) => (props.rowGap ? props.rowGap : "2px")};
  height: 100%;
  width: 100%;
`;

export const FlexItem = styled.div`
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "auto")};
  flex: 1 8 1;
`;
