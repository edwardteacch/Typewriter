# React + Vite

The app enables you to genrate a letter/pen pal through simple imputs of a form.
it takes sender's and reciever's name, date, message and a small image as a stamp (user can add maximum 2)
and then lets you download the generated letter as a pdf.

Users can also create a month wise collection of letters they might have recieved in the form of a gallery, and upload upto 15 images at a time through drag and drop and buttons.
Next, it enables the user to sent the letter to their loved ones through direct link to emails.

The app uses local storage and use effect and handle methods to fetch input and write it into a seperate display area outside of the formit creates and empty array first and writes all the inputs into it it which is later again parsed and read as strings to write and display the letter formatted right above the form.
Using html2canvas and jspdf the letter is then screenshotted and created into a pdf, which can be downloaded.

Form validation and error handling is enabled for forms and number images to be input. Tailwind css is used for  UI properties.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
