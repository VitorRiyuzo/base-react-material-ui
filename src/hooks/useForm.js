import {useState} from 'react';
function useForm(initValue){
  const [fields, setFields] = useState(initValue);
  function setValue(key, value) {
    let data = initValue[key];
    data.value = value;
    setFields({
      ...fields,
      [key]:data, 
    });
    console.log(fields)
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  function clearForm() {
    setFields(initValue);
  }
  function validateForm() {
    let valid = true;
    Object.entries(fields).map(([key,val])=>{
      let rules = val.validation;
      if(rules){
        switch(true){
          case rules.indexOf('required') > -1:
            if(val.value == ''){
              console.log("key", key, "val", val);
              val.error = true;
              valid = false;
              setFields({
                ...fields,
                [key]:val, 
              });
            }
            break;
          default:
        }
      }
    })
    return valid;
  }
  return {
    fields,
    handleChange,
    clearForm,
    validateForm
  }
}
export default useForm;