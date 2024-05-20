import React from 'react';
import { GLView } from 'expo-gl';

export default function App() {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        gl.viewport(0, 0, width, height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.endFrameEXP();
      }}
    />
  );
}
