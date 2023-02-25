import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);

let formData ={}

getDataLocalStorage()

form.addEventListener(`input`, throttle(onDataForm ,500));
form.addEventListener(`submit`, onSubmitForm);

function onDataForm (event) {
   
    formData[event.target.name] = event.target.value;
    
localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function onSubmitForm(event){

    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Вкажіть Ваш email та додайте будь ласка відгук")
        return
      }

    event.currentTarget.reset();

    localStorage.removeItem("feedback-form-state");

       };

function getDataLocalStorage(){
    const savedStringFormData = localStorage.getItem("feedback-form-state");
    if (savedStringFormData) {
        const formData = JSON.parse(savedStringFormData)
    
     const arrFormData = Object.entries(formData);

     arrFormData.forEach(([name, value]) =>{
    form.elements[name].value = value;
      }
      );
    };
};


