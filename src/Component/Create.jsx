// Import necessary dependencies and components
import React, { useState, useRef } from 'react';
import Header from './Header';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const Create = () => {
  // State to store letter details
  const [letter, setLetter] = useState({
    senderName: '',
    receiverName: '',
    date: '',
    message: '',
    closing: '',
    images: []
  });

  // Refs for file input and form
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLetter(prevLetter => ({
      ...prevLetter,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert('You can only upload up to 2 images.');
      return;
    }
    
    const imagePromises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then(images => {
        setLetter(prevLetter => ({
          ...prevLetter,
          images: images
        }));
      })
      .catch(error => console.error('Error reading images:', error));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('letter', JSON.stringify(letter));
    alert('Letter saved successfully!');
  };

  // Generate PDF from form content
  const generatePDF = () => {
    if (Object.values(letter).some(value => value === '' || (Array.isArray(value) && value.length === 0))) {
      alert('Please fill all entries before generating PDF.');
      return;
    }

    html2canvas(formRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

      // Add additional pages for uploaded images
      letter.images.forEach((image, index) => {
        pdf.addPage();
        pdf.addImage(image, 'JPEG', 15, 40, 180, 180);
      });

      pdf.save('your_letter.pdf');
    });
  };

  return (
    <div className="min-h-screen m-auto w-[900px] bg-amber-50 relative font-mono">
      <div className="container mx-auto px-32 py-8">
        <h1 className="text-3xl font-bold mb-6">Create Your Letter</h1>
        {/* Letter preview */}
        <div ref={formRef} className="bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <p className="text-right">{letter.date}</p>
          </div>
          <div className="mb-4">
            <p>Dear {letter.receiverName},</p>
          </div>
          <div className="mb-4">
            <p className="whitespace-pre-wrap">{letter.message}</p>
          </div>
          <div className="mb-4">
            <p>{letter.closing},</p>
            <p>{letter.senderName}</p>
          </div>
          {letter.images.length > 0 && (
            <div className="flex space-x-2 mt-4">
              {letter.images.map((image, index) => (
                <img key={index} src={image} alt={`Uploaded image ${index + 1}`} className="w-40 h-40 object-cover rounded" />
              ))}
            </div>
          )}
        </div>
        {/* Letter form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label htmlFor="senderName" className="block mb-1">Sender's Name:</label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              value={letter.senderName}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-200 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="receiverName" className="block mb-1">Receiver's Name:</label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={letter.receiverName}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={letter.date}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              value={letter.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded h-40"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="closing" className="block mb-1">Closing:</label>
            <input
              type="text"
              id="closing"
              name="closing"
              value={letter.closing}
              onChange={handleInputChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="images" className="block mb-1">Upload Images (Max 2):</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="bg-black text-amber-50 font-mono px-6 py-3 rounded-md hover:scale-105 hover:shadow-md transition-all duration-200">
              Save Letter
            </button>
            <button type="button" onClick={generatePDF} className="bg-black text-amber-50 font-mono px-6 py-3 rounded-md hover:scale-105 hover:shadow-md transition-all duration-200">
              Generate PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
