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
    console.log(infosDoEvento.target)
    console.log("checked",infosDoEvento.target.checked)
    console.log("value",infosDoEvento.target.value);
    console.log("name",infosDoEvento.target.name);
    if(infosDoEvento.target.value){
      setValue(
        infosDoEvento.target.name,
        infosDoEvento.target.value
        )
    }else{
      console.log("checkbox");
      setValue(
        infosDoEvento.target.name,
        infosDoEvento.target.checked
      )
    }
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
            if(!val.value || val.value == ''){
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