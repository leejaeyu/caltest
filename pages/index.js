import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const inputStyle = {
    width: '100%',
    padding: '18px',
    fontSize: '28px',
    marginBottom: '20px',
    borderRadius: '10px',
    border: '1px solid #1976d2',
    textAlign: 'right',
    fontWeight: 'bold',
    boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1565c0',
    transform: 'scale(1.06)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(60px, 1fr))',
    gap: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '30px', color: '#0d47a1' }}>Responsive Calculator</h1>
      <input type="text" value={input} readOnly style={inputStyle} />
      <div style={gridStyle}>
        {['7', '8', '9', '/'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            {item}
          </button>
        ))}
        {['0', '.', 'C', '+'].map((item) => (
          <button
            key={item}
            onClick={() => (item === 'C' ? handleClear() : handleClick(item))}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            {item}
          </button>
        ))}
        <button
          style={{ ...buttonStyle, gridColumn: 'span 4', backgroundColor: '#00838f', fontWeight: 'bold' }}
          onClick={handleCalculate}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#006064';
            e.currentTarget.style.transform = buttonHoverStyle.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00838f';
            e.currentTarget.style.transform = 'none';
          }}
        >=</button>
      </div>
    </div>
  );
}
