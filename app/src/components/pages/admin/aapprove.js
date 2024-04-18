import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock as fasClock, faTrashCan, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import '../footer.css';
import AdminNav from '../../adminNav';
import CustomLink from '../../CustomLink';

export default function Aapprove() {
  const [inputValues, setInputValues] = useState(['']);
  const [extraValue, setHasValue] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [IngreValues, setIngreValues] = useState(['']);
  const [toolValues, setToolValues] = useState(['']);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [type, setType] = useState('');

  const id = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipes/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseData = await response.json();
        console.log('Fetched data:', responseData);

        if (responseData && responseData.data) {
          const recipe = responseData.data.find(recipe => recipe.id === id);
          if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description || '');
            setPrepTime(recipe.preparation_time || '');
            setCookTime(recipe.cooking_time || '');
            setServings(recipe.servings || '');
            setInputValues(Array.isArray(recipe.instructions) ? recipe.instructions : (recipe.instructions ? recipe.instructions.split(' ') : ['']));
            setIngreValues(recipe.ingredients || ['']);
            setToolValues(recipe.tools || ['']);
            setRecipeImg(recipe.image || '');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (index, value) => {
    let newInputValues = Array.isArray(inputValues) ? [...inputValues] : inputValues.split(' ');
    newInputValues[index] = value;
  
    if (index === newInputValues.length - 1) {
      newInputValues.push('');
    } else if (index === newInputValues.length - 2 && newInputValues[index] === '') {
      newInputValues.pop();
    }
  
    setInputValues(newInputValues);
  
    const hasValueNow = newInputValues.some(val => typeof val === 'string' && val.trim() !== '');
    setHasValue(hasValueNow);
  };

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

  const handleIngreDelete = (index) => {
    const newIngreValues = [...IngreValues];
    newIngreValues.splice(index, 1);
    setIngreValues(newIngreValues);
    setShowDeletePopup(false); 
  };

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

  const handleToolDelete = (index) => {
    const newToolValues = [...toolValues];
    newToolValues.splice(index, 1);
    setToolValues(newToolValues);
    setShowDeletePopup(false); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFieldsFilled =
      title !== '' &&
      description !== '' &&
      prepTime !== '' &&
      cookTime !== '' &&
      servings !== '';

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
      };
      console.log(formData);
    } else {
      alert('Please fill in all required fields and provide at least one instruction, ingredient, and tool before submitting.');
    }

    setHasValue(!extraValue);
  };

  const handleDelete = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
    console.log(`Delete recipe instruction ${index}`);
    setShowDeletePopup(false);
  };

  const showDeleteConfirmation = (index, type) => {
    setShowDeletePopup(true);
    setDeleteIndex(index);
    setType(type); 
  };

  const handlePopupDelete = () => {
    if (type === 'ingredient') {
      handleIngreDelete(deleteIndex);
    } else if (type === 'tool') {
      handleToolDelete(deleteIndex);
    } else {
      handleDelete(deleteIndex);
    }
  };

  console.log('inputValues:', inputValues, 'Type of inputValues:', typeof inputValues);

  return (
    <div className="flex">
      <AdminNav />
      <div className="max-w-screen-lg container-Aupload ml-20">
        <form onSubmit={handleSubmit}>
          <h1 className='title-approve'>Recipes - <span>{title}</span></h1>
          <div className="blue-bar-approve flex flex-col md:flex-row justify-end">
            <div className="approve-btn-styling mb-2 md:mr-2">
              <button>Approve</button>
            </div>
            <div className="decline-btn-styling mr-10">
              <CustomLink to="/admin/rejected">
              <button type="button">reject</button>
              </CustomLink>
            </div>
          </div>

          <div className="container mb-10">
            <h1 className="thumbnail">Thumbnail</h1>
            <div className="flex items-center mb-4">
              <div className="image-container">
                <img src={recipeImg} alt="Selected" className="selected-image" />
              </div>
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
                      <div className="input-container">
                        <textarea
                          type="text"
                          className={`input-image input-field-test2 text-left ${value ? 'hide-image' : ''
                            }`}
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
                        <div className='btn-delete-color'>
                          <button type="button" onClick={() => showDeleteConfirmation(index, 'instruction')}><FontAwesomeIcon icon={faTrashCan} className='Trashcan2' /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 lg:col-span-1 lg:order-3">
              <div className="mb-4">
                <label className="block mb-2 text-positioning">Ingredients</label>
                {IngreValues.map((value, index) => (
                  <div key={index} className="flex">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded mb-2 input-field2 block"
                      placeholder="+ Add ingredient"
                      value={value}
                      onChange={(e) => handleIngreChange(index, e.target.value)}
                    />
                    <div className="btn-delete-color2">
                      <button type="button" onClick={() => showDeleteConfirmation(index, 'ingredient')}><FontAwesomeIcon icon={faTrashCan} className='Trashcan' /></button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-positioning2">Tools</label>
                {toolValues.map((value, index) => (
                  <div key={index} className="flex">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded mb-2 input-field2 block"
                      placeholder="+ Add tool"
                      value={value}
                      onChange={(e) => handleToolChange(index, e.target.value)}
                    />
                    <div className="btn-delete-color2">
                      <button type="button" onClick={() => showDeleteConfirmation(index, 'tool')}><FontAwesomeIcon icon={faTrashCan} className='Trashcan' /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
            {showDeletePopup && (
              <div className="delete-popup shadow-lg p-6">
                <div className="flex justify-between">
                  <h2 className="delete-popup-text">delete</h2>
                  <span className="delete-popup-close" onClick={() => setShowDeletePopup(false)}>
                    <FontAwesomeIcon icon={faXmark} className='Xmark' />
                  </span>
                </div>
                <div className="delete-popup-content mt-4">
                  <p className='popup-text'>Are you sure you want to delete this item?</p>
                  <div className="delete-popup-buttons">
                    <button className="cancel-button mr-4" onClick={() => setShowDeletePopup(false)}>Cancel</button>
                    <button className="delete-button" onClick={handlePopupDelete}>Delete</button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </form>
      </div>
      <div className="vertical-spans"></div>
    </div>
  );

}
