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

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1>Simple Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '100%', padding: '10px', fontSize: '18px', marginBottom: '10px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['0', '.', 'C', '+'].map((item) => (
          <button key={item} onClick={() => item === 'C' ? handleClear() : handleClick(item)}>{item}</button>
        ))}
        <button style={{ gridColumn: 'span 4' }} onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}
