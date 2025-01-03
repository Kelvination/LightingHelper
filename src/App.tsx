// App.tsx
import React from 'react';
import AsaroScene from './components/AsaroScene';
import ControlPanel from './components/ControlPanel';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Left side: the 3D scene */}
      <div style={{ flex: 1, position: 'relative' }}>
        <AsaroScene />
      </div>

      {/* Right side: the control panel */}
      <ControlPanel />
    </div>
  );
};

export default App;
