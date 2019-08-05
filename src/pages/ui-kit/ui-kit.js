import React, { useContext } from 'react';
import { Container } from '../../components/layout/layout';
import { Header, Text } from '../../components/typography/typorgraphy';
import { Input, InputField } from '../../components/form/';
import Store from './../../logic/store';
import { observer } from 'mobx-react-lite';

export const UiKit = observer(() => {
  const store = useContext(Store);
  function handleInput(event) {
    store.setBody(event.target.value);
  }
  return (
    <Container>
      <Header>{store.page.header}</Header>
      <Text type="lead">{store.page.body}</Text>
      <Header size="4">Inputs</Header>
      <InputField title="Url input">
        <Input
          placeholder="example"
          type="url"
          prefix="http://"
          sufix=".conpage.me"
          size="l"
          onChange={handleInput}
        />
      </InputField>
    </Container>
  );
});
