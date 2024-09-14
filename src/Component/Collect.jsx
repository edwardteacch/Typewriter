// Import necessary React hooks
import React, { useState, useRef } from 'react'

export const Collect = () => {
  // State to store uploaded images
  const [images, setImages] = useState([]);
  // State to keep track of the current month
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  // Array of month names
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // Ref for the file input element
  const fileInputRef = useRef(null);

  // Handle drag and drop of files
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  // Prevent default behavior for dragover event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle file input change
  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  // Process the uploaded files
  const handleFiles = (files) => {
    // Check if the total number of images exceeds 15
    if (images.length + files.length > 15) {
      alert('You can only upload a maximum of 15 images.');
      return;
    }
    // Create URLs for the new images
    const newImages = files.map(file => URL.createObjectURL(file));
    // Add new images to the existing ones
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  return (
    <div className="p-4 bg-amber-50 font-mono h-[700px]">
      <h2 className="text-2xl font-bold mb-4 text-center">Image Gallery</h2>
      {/* Month navigation */}
      <div className="flex justify-between mb-4">
        <button 
          onClick={() => setCurrentMonth(prev => (prev - 1 + 12) % 12)}
          className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-200"
        >
          Previous Month
        </button>
        <span className="text-xl font-semibold">{months[currentMonth]}</span>
        <button 
          onClick={() => setCurrentMonth(prev => (prev + 1) % 12)}
          className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-200"
        >
          Next Month
        </button>
      </div>
      {/* Drag and drop area */}
      <div 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 p-4 mb-4 text-center"
      >
        Drag and drop images here (max 15)
      </div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        multiple
        accept="image/*"
        className="hidden"
      />
      {/* Upload button */}
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-black text-white px-4 py-2 rounded mb-4 hover:scale-105 transition-transform duration-200"
      >
        Upload Images
      </button>
      {/* Image gallery grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img 
              src={image} 
              alt={`Uploaded ${index + 1}`} 
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
