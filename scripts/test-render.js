import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';

try {
  const html = renderToString(<App />);
  console.log('SUCCESS: Rendered App component to HTML string.');
  console.log('HTML length:', html.length);
  
  // Verify key content markers from Stitch
  const checks = [
    'Hyderabad Chair &amp; Recliner Repair',
    'Professional Office Chair &amp; Luxury Recliner Repair',
    'At Your Doorstep',
    'Hydraulic Cylinder Replacement',
    'Wheel Castors &amp; Star Base Repair',
    'Mechanism &amp; Tilt Control Repair',
    'Recliner Sofa Mechanical &amp; Motor Repair',
    'Cushioning, Mesh &amp; Reupholstery',
    'Comprehensive Chair Tune-Up &amp; Lubrication',
    'Executive Chairs',
    'Ergonomic Mesh',
    'Boardroom Chairs',
    'Workstation Chairs',
    'Gaming Chairs',
    'Mid-Back &amp; Visitor',
    'Faheem Chair Repair Central Workshop',
    '15-9-419, Mahiboob Ganj, Afzal Gunj',
    '7088193928',
    '7731069328',
    'How fast can a technician reach my home or office in Hyderabad?'
  ];

  let missing = [];
  for (const check of checks) {
    if (!html.includes(check)) {
      missing.push(check);
    }
  }

  if (missing.length > 0) {
    console.error('Missing expected content:', missing);
    process.exit(1);
  } else {
    console.log('ALL 20 critical content checkpoints verified successfully in rendered HTML!');
  }
} catch (err) {
  console.error('Render error:', err);
  process.exit(1);
}
