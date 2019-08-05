import React from "react";
import { ReactComponent as Icon } from "./pre.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { Container } from "../../components/layout/layout";
import { Header, Text } from "../../components/typography/typorgraphy";

export function Loader() {
  return (
    <Container>
      <Header>Loaders example </Header>
      <Text type="lead">
        You might have previously known these as “stateless components”. We’re
        now introducing the ability to use React state from these, so we prefer
        the name “function components”. Hooks don’t work inside classes. But you
        can use them instead of writing classes.
      </Text>
      <Icon />
      {/* <Logo /> */}
    </Container>
  );
}
