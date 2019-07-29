import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

const p5Events = [
  'draw',
  'windowResized',
  'preload',
  'mouseClicked',
  'doubleClicked',
  'mouseMoved',
  'mousePressed',
  'mouseWheel',
  'mouseDragged',
  'mouseReleased',
  'keyPressed',
  'keyReleased',
  'keyTyped',
  'touchStarted',
  'touchMoved',
  'touchEnded',
  'deviceMoved',
  'deviceTurned',
  'deviceShaken'
];

export default function P5Sketch(props) {
  const canvasRef = useRef();
  const sketchRef = useRef();

  useEffect(() => {
    sketchRef.current = new p5(p => {
      p.setup = () => {
        props.setup(p, canvasRef.current);
      };
      p5Events.forEach(e => {
        if (props[e]) {
          p[e] = () => props[e](p);
        }
      });
    });

    return () => sketchRef.current.remove();
  }, [props]);

  return <div ref={canvasRef} className={props.className || ''} />;
}

P5Sketch.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  setup: PropTypes.func.isRequired,
  draw: PropTypes.func,
  windowResized: PropTypes.func,
  preload: PropTypes.func,
  mouseClicked: PropTypes.func,
  doubleClicked: PropTypes.func,
  mouseMoved: PropTypes.func,
  mousePressed: PropTypes.func,
  mouseWheel: PropTypes.func,
  mouseDragged: PropTypes.func,
  mouseReleased: PropTypes.func,
  keyPressed: PropTypes.func,
  keyReleased: PropTypes.func,
  keyTyped: PropTypes.func,
  touchStarted: PropTypes.func,
  touchMoved: PropTypes.func,
  touchEnded: PropTypes.func,
  deviceMoved: PropTypes.func,
  deviceTurned: PropTypes.func,
  deviceShaken: PropTypes.func
};
