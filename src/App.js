import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import P5Sketch from 'components/P5Sketch';

const Styles = styled.div`
  margin: 0 2rem;
`;

function sketch(p5) {
  let y = 0;
  let direction = '^';

  p5.setup = parent => {
    p5.createCanvas(200, 200).parent(parent);
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill(255, y * 1.3, 0);
    p5.ellipse(p5.width / 2, y, 50);
    if (y > p5.height) direction = '';
    if (y < 0) {
      direction = '^';
    }
    if (direction === '^') y += 8;
    else y -= 4;
  };
}

function App() {
  return (
    <Styles>
      <Header />
      <P5Sketch sketch={sketch} />
    </Styles>
  );
}

export default App;
