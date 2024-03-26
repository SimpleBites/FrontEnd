import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faClock as fasClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './footer.css';

export default function Submit() {
  const [inputValues, setInputValues] = useState(['']);
  const [extraValue, setHasValue] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4 upload-rec">U P L O A D &nbsp; R E C I P E</h1>
        <a href='http://localhost:3000/submitted'>
          <button className=" SUB-BUTTON">S U B M I T</button>
        </a>
        <div className='container'>
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
              <div className="file-upload-placeholder ">
                <button className="hello" onClick={handleButtonClick}>Insert your image here</button>
              </div>
            )}

          </div>
          <div className="w-1/2 pl-4">
            <label className="block mb-2">Title</label>
            <input type="text" className=" title-input" placeholder="Your recipe title..." />
            <label className="block mt-4 mb-2">Description</label>
            <input type="text" className="description-input" placeholder="Your recipe description..." />
            <div className="flex mt-4">
              <div className="w-1/3 pr-2">
                <FontAwesomeIcon icon={fasClock} className="sizing" />
                <label className="block mb-2">Prep Time</label>
                <input type="text" className="extra-inputs" placeholder="+ add time" />
              </div>
              <div className="w-1/3 px-2">
                <FontAwesomeIcon icon={faClock} className="sizing" />
                <label className="block mb-2">Cook Time</label>
                <input type="text" className="extra-inputs" placeholder="+ add time" />
              </div>
              <div className="w-1/3 pl-2">
                <FontAwesomeIcon icon={faUsers} className="sizing" />
                <label className="block mb-2">Servings</label>
                <input type="text" className="add-serving-input" placeholder="+ add serving" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-4">
            <p className="Instr">Instructions</p>
            {inputValues.map((value, index) => (
              <div key={index}>
                <p className="steps font-bold uppercase">Step {index + 1}</p>
                <input
                  type="text"
                  className={`input-image input-field-test text-left ${value ? 'hide-image' : ''}`}
                  placeholder=" &nbsp; &nbsp; &nbsp;add step"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="1/3 block mb-2">Ingredients</label>
            {IngreValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="w-1/3 px-3 py-2 border rounded mb-2 input-field2 block "
                placeholder="+ Add ingredient"
                value={value}
                onChange={(e) => handleIngreChange(index, e.target.value)}
              />
            ))}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tools</label>
            {toolValues.map((value, index) => (
              <input
                key={index}
                type="text"
                className="w-1/3 px-3 py-2 border rounded mb-2 input-field2 block "
                placeholder="+ Add tool"
                value={value}
                onChange={(e) => handleToolChange(index, e.target.value)}
              />
            ))}
            <div class="vertical-spans">
              <span>EXTRA TEXT FOR SPACE</span>
              <span>EXTRA TEXT FOR SPACE</span>
              <span>EXTRA TEXT FOR SPACE</span>
              <span>EXTRA TEXT FOR SPACE</span>
              <span>EXTRA TEXT FOR SPACE</span>
              <span>EXTRA TEXT FOR SPACE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
