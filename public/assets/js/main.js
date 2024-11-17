document.addEventListener('DOMContentLoaded', function () {
  // Get references to modal, form, and buttons
  const form = document.getElementById('taskForm');
  const submitButton = document.getElementById('submitForm');
  const modalElement = document.getElementById('taskModal');
  const modal = new bootstrap.Modal(modalElement); // Create an instance of the modal

  // Handle form submission and modal closing
  submitButton.addEventListener('click', function () {
    // Check if the form is valid
    if (form.checkValidity()) {
      // If valid, close the modal
      modal.hide(); // This will close the modal
    } else {
      // If invalid, add validation feedback (show the "was-validated" class)
      form.classList.add('was-validated');
    }
  });

  // Prevent form submission to avoid refreshing page
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    event.stopPropagation(); // Stop event propagation
  });
});
