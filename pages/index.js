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

  const buttonStyle = {
<<<<<<< HEAD
    padding: '15px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={{ maxWidth: '320px', margin: '50px auto', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Simple Calculator</h1>
=======
    padding: '20px',
    fontSize: '22px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#6200ea',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#3700b3',
    transform: 'scale(1.05)',
  };

  return (
    <div style={{ maxWidth: '360px', margin: '50px auto', padding: '25px', textAlign: 'center', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ marginBottom: '30px', color: '#333', fontFamily: 'Arial, sans-serif' }}>Elegant Calculator</h1>
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
      <input
        type="text"
        value={input}
        readOnly
<<<<<<< HEAD
        style={{ width: '100%', padding: '15px', fontSize: '20px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
=======
        style={{ width: '100%', padding: '20px', fontSize: '28px', marginBottom: '20px', borderRadius: '12px', border: '2px solid #6200ea', textAlign: 'right', fontWeight: 'bold', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
        {['7', '8', '9', '/'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
<<<<<<< HEAD
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
=======
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
<<<<<<< HEAD
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
=======
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
<<<<<<< HEAD
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
=======
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
          >
            {item}
          </button>
        ))}
        {['0', '.', 'C', '+'].map((item) => (
          <button
            key={item}
            onClick={() => item === 'C' ? handleClear() : handleClick(item)}
            style={buttonStyle}
<<<<<<< HEAD
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
=======
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.currentTarget.style.transform = buttonHoverStyle.transform;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
          >
            {item}
          </button>
        ))}
        <button
<<<<<<< HEAD
          style={{ ...buttonStyle, gridColumn: 'span 4', backgroundColor: '#2196F3', fontWeight: 'bold' }}
          onClick={handleCalculate}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b7dda'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2196F3'}
=======
          style={{ ...buttonStyle, gridColumn: 'span 4', backgroundColor: '#03dac6', color: '#000', fontWeight: 'bold' }}
          onClick={handleCalculate}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#018786';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = buttonHoverStyle.transform;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#03dac6';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'none';
          }}
>>>>>>> 6f3c6bd (Revamp UI: modern design & enhanced user interactions)
        >=</button>
      </div>
    </div>
  );
}
