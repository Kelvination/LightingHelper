// ControlPanel.tsx
import React from 'react';
import useLightingStore from '../store/useLightingStore'; // adjust path as needed

const labelStyle: React.CSSProperties = {
  minWidth: '120px',
  marginRight: '8px',
  textAlign: 'right',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '4px 0',
};

const sectionStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '6px',
  padding: '8px',
  marginBottom: '12px',
};

const ControlPanel: React.FC = () => {
  // Head
  const rotation = useLightingStore((s) => s.rotation);
  const setRotation = useLightingStore((s) => s.setRotation);

  // Primary Light
  const primaryLightColor = useLightingStore((s) => s.primaryLightColor);
  const setPrimaryLightColor = useLightingStore((s) => s.setPrimaryLightColor);
  const primaryLightOrbit = useLightingStore((s) => s.primaryLightOrbit);
  const setPrimaryLightOrbit = useLightingStore((s) => s.setPrimaryLightOrbit);
  const primaryLightHeight = useLightingStore((s) => s.primaryLightHeight);
  const setPrimaryLightHeight = useLightingStore((s) => s.setPrimaryLightHeight);
  const primaryLightIntensity = useLightingStore((s) => s.primaryLightIntensity);
  const setPrimaryLightIntensity = useLightingStore((s) => s.setPrimaryLightIntensity);
  const primaryHelperEnabled = useLightingStore((s) => s.primaryHelperEnabled);
  const setPrimaryHelperEnabled = useLightingStore((s) => s.setPrimaryHelperEnabled);

  // Secondary Light
  const secondaryLightEnabled = useLightingStore((s) => s.secondaryLightEnabled);
  const setSecondaryLightEnabled = useLightingStore((s) => s.setSecondaryLightEnabled);
  const secondaryLightColor = useLightingStore((s) => s.secondaryLightColor);
  const setSecondaryLightColor = useLightingStore((s) => s.setSecondaryLightColor);
  const secondaryLightOrbit = useLightingStore((s) => s.secondaryLightOrbit);
  const setSecondaryLightOrbit = useLightingStore((s) => s.setSecondaryLightOrbit);
  const secondaryLightHeight = useLightingStore((s) => s.secondaryLightHeight);
  const setSecondaryLightHeight = useLightingStore((s) => s.setSecondaryLightHeight);
  const secondaryLightIntensity = useLightingStore((s) => s.secondaryLightIntensity);
  const setSecondaryLightIntensity = useLightingStore((s) => s.setSecondaryLightIntensity);
  const secondaryHelperEnabled = useLightingStore((s) => s.secondaryHelperEnabled);
  const setSecondaryHelperEnabled = useLightingStore((s) => s.setSecondaryHelperEnabled);

  // Material
  const materialBaseColor = useLightingStore((s) => s.materialBaseColor);
  const setMaterialBaseColor = useLightingStore((s) => s.setMaterialBaseColor);

  // Background
  const backgroundColor = useLightingStore((s) => s.backgroundColor);
  const setBackgroundColor = useLightingStore((s) => s.setBackgroundColor);

  return (
    <div style={{ padding: '1rem', width: 300, maxWidth: '300px', fontFamily: 'sans-serif' }}>
      <h2>Controls</h2>

      {/* Head Section */}
      <section style={sectionStyle}>
        <h3 style={{ marginTop: 0 }}>Head</h3>
        <div style={rowStyle}>
          <label style={labelStyle}>Rotate (rad): {rotation.toFixed(2)}</label>
          <input
            type="range"
            min={-Math.PI * 2}
            max={Math.PI * 2}
            step={0.1}
            value={rotation}
            onChange={(e) => setRotation(parseFloat(e.target.value))}
          />
        </div>
      </section>

      {/* Primary Light Section */}
      <section style={sectionStyle}>
        <h3 style={{ marginTop: 0 }}>Primary Light</h3>
        <div style={rowStyle}>
          <label style={labelStyle}>Color</label>
          <input
            type="color"
            value={primaryLightColor}
            onChange={(e) => setPrimaryLightColor(e.target.value)}
          />
        </div>
        <div style={rowStyle}>
          <label style={labelStyle}>Orbit: {primaryLightOrbit}°</label>
          <input
            type="range"
            min={-360}
            max={360}
            step={1}
            value={primaryLightOrbit}
            onChange={(e) => setPrimaryLightOrbit(parseInt(e.target.value))}
          />
        </div>
        <div style={rowStyle}>
          <label style={labelStyle}>Height: {primaryLightHeight.toFixed(2)}</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={primaryLightHeight}
            onChange={(e) => setPrimaryLightHeight(parseFloat(e.target.value))}
          />
        </div>
        <div style={rowStyle}>
          <label style={labelStyle}>Intensity: {primaryLightIntensity.toFixed(2)}</label>
          <input
            type="range"
            min={0}
            max={10}
            step={0.05}
            value={primaryLightIntensity}
            onChange={(e) => setPrimaryLightIntensity(parseFloat(e.target.value))}
          />
        </div>
        <div style={rowStyle}>
          <label style={labelStyle}>Show Outline</label>
          <input
            type="checkbox"
            checked={primaryHelperEnabled}
            onChange={(e) => setPrimaryHelperEnabled(e.target.checked)}
          />
        </div>
      </section>

      {/* Secondary Light Section */}
      <section style={sectionStyle}>
        <h3 style={{ marginTop: 0 }}>Secondary Light</h3>
        <div style={rowStyle}>
          <label style={labelStyle}>Enable</label>
          <input
            type="checkbox"
            checked={secondaryLightEnabled}
            onChange={(e) => setSecondaryLightEnabled(e.target.checked)}
          />
        </div>

        {secondaryLightEnabled && (
          <>
            <div style={rowStyle}>
              <label style={labelStyle}>Color</label>
              <input
                type="color"
                value={secondaryLightColor}
                onChange={(e) => setSecondaryLightColor(e.target.value)}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>Orbit: {secondaryLightOrbit}°</label>
              <input
                type="range"
                min={-360}
                max={360}
                step={1}
                value={secondaryLightOrbit}
                onChange={(e) => setSecondaryLightOrbit(parseInt(e.target.value))}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>Height: {secondaryLightHeight.toFixed(2)}</label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={secondaryLightHeight}
                onChange={(e) => setSecondaryLightHeight(parseFloat(e.target.value))}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>Intensity: {secondaryLightIntensity.toFixed(2)}</label>
              <input
                type="range"
                min={0}
                max={10}
                step={0.05}
                value={secondaryLightIntensity}
                onChange={(e) => setSecondaryLightIntensity(parseFloat(e.target.value))}
              />
            </div>
            <div style={rowStyle}>
              <label style={labelStyle}>Show Outline</label>
              <input
                type="checkbox"
                checked={secondaryHelperEnabled}
                onChange={(e) => setSecondaryHelperEnabled(e.target.checked)}
              />
            </div>
          </>
        )}
      </section>

      {/* Material Section */}
      <section style={sectionStyle}>
        <h3 style={{ marginTop: 0 }}>Material</h3>
        <div style={rowStyle}>
          <label style={labelStyle}>Base Color</label>
          <input
            type="color"
            value={materialBaseColor}
            onChange={(e) => setMaterialBaseColor(e.target.value)}
          />
        </div>
      </section>

      {/* Background Section */}
      <section style={sectionStyle}>
        <h3 style={{ marginTop: 0 }}>Background</h3>
        <div style={rowStyle}>
          <label style={labelStyle}>Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      </section>
    </div>
  );
};

export default ControlPanel;
