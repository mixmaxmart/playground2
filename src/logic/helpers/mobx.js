import React from 'react';
import { observer } from 'mobx-react-lite';
export const Mobx = observer(props => {
  return <div>{props.children}</div>;
});
