const formData = {
  email: '',
  message: '',
};

const form = document.querySelector(`.feedback-form`);
const input = form.querySelector(`input[name='email']`);
const textarea = form.querySelector(`textarea[name='message']`);

function onFormInput(event) {
  formData.email = input.value;
  formData.message = textarea.value;
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert(`Please fill all fields`);
    return;
  }
  event.currentTarget.reset();
  localStorage.removeItem(`feedback-form-state`);
}

form.addEventListener(`submit`, onFormSubmit);
input.addEventListener(`input`, onFormInput);
textarea.addEventListener(`input`, onFormInput);
