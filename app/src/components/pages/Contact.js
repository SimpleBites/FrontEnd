import { useState } from 'react';

export default function Contact() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl text-black">Contact</h1>
      <div className="relative">
        <input
          type="text"
          name='steps[]'
          className={`input-image input-field-test text-left ${inputValue ? 'hide-image' : ''}`}
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add step"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
