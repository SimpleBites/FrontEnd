import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock as fasClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import './footer.css';

export default function Submit() {
  const [inputValues, setInputValues] = useState(['']);
  const [extraValue, setHasValue] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;

    if (index === newInputValues.length - 1) {
      newInputValues.push('');
    } else if (index === newInputValues.length - 2 && newInputValues[index] === '') {
      newInputValues.pop();
    }

    setInputValues(newInputValues);

    const hasValueNow = newInputValues.some(val => val.trim() !== '');
    setHasValue(hasValueNow);
  };

  const [IngreValues, setIngreValues] = useState(['']);

  const handleIngreChange = (index, value) => {
    const newIngreValues = [...IngreValues];
    newIngreValues[index] = value;

    if (index === newIngreValues.length - 1) {
      newIngreValues.push('');
    } else if (index === newIngreValues.length - 2 && newIngreValues[index] === '') {
      newIngreValues.pop();
    }

    setIngreValues(newIngreValues);
  };

  const [toolValues, setToolValues] = useState(['']);

  const handleToolChange = (index, value) => {
    const newToolValues = [...toolValues];
    newToolValues[index] = value;

    if (index === newToolValues.length - 1) {
      newToolValues.push('');
    } else if (index === newToolValues.length - 2 && newToolValues[index] === '') {
      newToolValues.pop();
    }

    setToolValues(newToolValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const requiredFieldsFilled =
      title.trim() !== '' &&
      description.trim() !== '' &&
      prepTime.trim() !== '' &&
      cookTime.trim() !== '' &&
      servings.trim() !== '';
  
    if (requiredFieldsFilled) {
      const formData = {
        title,
        description,
        prepTime,
        cookTime,
        servings,
        inputValues,
        IngreValues,
        toolValues,
        selectedImage
      };
      console.log(formData);
    } else {
      alert('Please fill in all required fields and provide at least one instruction, ingredient, and tool before submitting.');
    }

    setHasValue(!extraValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex-grow max-w-screen-lg">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-10 mb-4">
            <h1 className="text-3xl mb-4 upload-rec">U P L O A D &nbsp; R E C I P E</h1>
            <button type="submit" className="SUB-BUTTON">S U B M I T</button>
          </div>
          <div className='container mb-10'>
            <h1 className="thumbnail">thumbnail</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mb-4">
                <input
                  id="file-upload"
                  type="file"
                  className="file-test"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
              </div>
              {selectedImage ? (
                <>
                  <div className="image-container">
                    <img src={selectedImage} alt="Selected" className="selected-image" />
                    <button className="hello2" onClick={handleButtonClick}>Insert your image here</button>
                  </div>
                </>
              ) : (
                <div className="file-upload-placeholder">
                  <button className="hello" onClick={handleButtonClick}>Insert your image here</button>
                </div>
              )}
            </div>
            <div className="w-1/2 pl-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                className="title-input"
                placeholder="Your recipe title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="block mt-4 mb-2">Description</label>
              <textarea
                type="text"
                className="description-input"
                placeholder="Your recipe description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: 'none', overflow: 'hidden' }}
              />
              <div className="flex mt-4">
                <div className="w-1/3 pr-2">
                  <FontAwesomeIcon icon={fasClock} className="sizing" />
                  <label className="block mb-2">Prep Time</label>
                  <input
                    type="text"
                    className="extra-inputs"
                    placeholder="+ add time"
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                  />
                </div>
                <div className="w-1/3 px-2">
                  <FontAwesomeIcon icon={faClock} className="sizing" />
                  <label className="block mb-2">Cook Time</label>
                  <input
                    type="text"
                    className="extra-inputs"
                    placeholder="+ add time"
                    value={cookTime}
                    onChange={(e) => setCookTime(e.target.value)}
                  />
                </div>
                <div className="w-1/3 pl-2">
                  <FontAwesomeIcon icon={faUsers} className="sizing" />
                  <label className="block mb-2">Servings</label>
                  <input
                    type="text"
                    className="add-serving-input"
                    placeholder="+ add serving"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex"> 
            <div className="lg:w-1/2 lg:col-span-1 order-2 lg:order-1">
              <div className="mb-4">
                <p className="Instr">Instructions</p>
                <div className="flex flex-col">
                  {inputValues.map((value, index) => (
                    <div key={index} className="">
                      <p className="steps font-bold uppercase">Step {index + 1}</p>
                      <textarea
                        type="text"
                        className={`input-image input-field-test text-left ${value ? 'hide-image' : ''}`}
                        placeholder=" &nbsp; &nbsp; &nbsp;add step"
                        value={value}
                        onChange={(e) => {
                          const newValue = e.target.value.slice(0, 60);
                          handleChange(index, newValue);
                          e.target.style.height = newValue ? `${e.target.scrollHeight}px` : '33px'; 
                          e.target.style.width = `${Math.max(280, e.target.scrollWidth)}px`; 
                        }}
                        style={{ minHeight: '33px', resize: 'none', overflow: 'hidden', width: '280px' }}
                        maxLength={250}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:col-span-1 lg:order-3">
              <div className="mb-4">
                <label className="block mb-2 text-positioning">Ingredients</label>
                {IngreValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full px-3 py-2 border rounded mb-2 input-field2 block"
                    placeholder="+ Add ingredient"
                    value={value}
                    onChange={(e) => handleIngreChange(index, e.target.value)}
                  />
                ))}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-positioning2">Tools</label>
                {toolValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full px-3 py-2 border rounded mb-2 input-field2 block"
                    placeholder="+ Add tool"
                    value={value}
                    onChange={(e) => handleToolChange(index, e.target.value)}
                  />
                ))}
              </div>
              <div className="vertical-spans">
                <span className="block mb-2">EXTRA TEXT FOR SPACE</span>
              </div>
            </div>
          </div> 
        </form>
      </div>
    </div>
  );
}
