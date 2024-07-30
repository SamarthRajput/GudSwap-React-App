import React from 'react';

export function ProgressBar({ totalCount, maxUnit }) {
  const labels = [
    { name: 'L0', condition: totalCount > 0 },
    { name: 'L1', condition: totalCount >= 5 },
    { name: 'L2', condition: totalCount >= 10 },
    { name: 'L3', condition: totalCount >= 15 },
  ];

  // Calculate the width percentage of the line based on totalCount and maxUnit
  const progressWidth = Math.min((totalCount / maxUnit) * 100, 100) + '%';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '10px' }}>
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              color: label.condition ? 'green' : 'grey',
              fontWeight: 'bold',
              fontSize: '20px'
            }}
          >
            {label.name}
          </div>
        ))}
      </div>
      <div style={{ width: '100%', backgroundColor: 'lightgrey', height: '20px', position: 'relative' }}>
        <div style={{ width: progressWidth, backgroundColor: 'green', height: '100%' }}></div>
      </div>
    </div>
  );
}
