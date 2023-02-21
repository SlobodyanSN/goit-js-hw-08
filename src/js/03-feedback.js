import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`textarea`)
const email = document.querySelector(`input`)
getDataLocalStorage()

function onDataForm (event) {
        const formElements = event.currentTarget.elements;
      const email = formElements.email.value;
      const message = formElements.message.value;
      const formData = {
        email,
        message,
      }; 

localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};

form.addEventListener(`input`, throttle(onDataForm ,500));
form.addEventListener(`submit`, onSubmitForm);

function onSubmitForm(event){
    event.preventDefault();
    if (textarea.value.trim() === "") {
        alert("Вкажіть Ваш email та додайте будь ласка відгук")
        return
      }

    event.currentTarget.reset();

    localStorage.removeItem("feedback-form-state")
};

function getDataLocalStorage(){
    const savedString = localStorage.getItem("feedback-form-state");
    if (savedString) {
        const savedData = JSON.parse(savedString)

        textarea.value = savedData.message;

        email.value = savedData.email

        console.log(savedData);
    }
};
