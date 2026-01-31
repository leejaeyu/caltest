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
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '100%', padding: '15px', fontSize: '20px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {['7', '8', '9', '/'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={buttonStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {item}
          </button>
        ))}
        {['0', '.', 'C', '+'].map((item) => (
          <button
            key={item}
            onClick={() => item === 'C' ? handleClear() : handleClick(item)}
            style={buttonStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {item}
          </button>
        ))}
        <button
          style={{ ...buttonStyle, gridColumn: 'span 4', backgroundColor: '#2196F3', fontWeight: 'bold' }}
          onClick={handleCalculate}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b7dda'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2196F3'}
        >=</button>
      </div>
    </div>
  );
}
