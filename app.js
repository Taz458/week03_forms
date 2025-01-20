// Select the first <form> element in the document
const form = document.getElementById("form1"); 

// Add an event listener to the form that listens for the "submit" event
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior (e.g., refreshing the page or sending data to a server)
    event.preventDefault();

    // Create a FormData object, which collects all the data from the form
    // FormData automatically gathers data from form fields like <input>, <textarea>, etc.
    const formData = new FormData(form);

    // Convert the FormData object into a plain JavaScript object
    // Object.fromEntries() transforms the key-value pairs from the FormData object into an object
    const jsObjectPlease = Object.fromEntries(formData);

    // Log the resulting JavaScript object to the console for inspection
    console.log(jsObjectPlease); 
});

const form2 = document.getElementById("form2")

form2.addEventListener("submit", (event) => {

    event.preventDefault();

    const form2Data = new FormData(form2);


    const jsObjectPlease = Object.fromEntries(form2Data);

    console.log(jsObjectPlease); 
});

