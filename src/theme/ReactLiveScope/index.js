import React from 'react';
import { default as TranslateComponent } from '@docusaurus/Translate';

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      color: 'black',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

const Translate = (props) => (
  <TranslateComponent
    {...props}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Translate,
  ButtonExample
};

export default ReactLiveScope;