// import React, { useEffect, useState } from "react";
// import styles from "./Dynamic.module.css"
// import {useForm} from "react-hook-form"

// function DynamicForm(){

//     const{register, 
//         handleSubmit, 
//         watch,
//         formState: { errors }
//     } = useForm()

//     function onSubmit(data) {
//         console.log(data)
//     }
//     const firstFieldValue =  watch ("username", "")
//     const [isTrue, setIsTrue ] = useState(false)

// useEffect (() => {
// console.log(firstFieldValue)

//     if (firstFieldValue.length >= 5) {
//         setIsTrue(true)
//         console.log(isTrue)
       
//     }else {
//         setIsTrue(false)
//         console.log(isTrue)
//     }


// }, [firstFieldValue])

// return (
//     <form className={styles.form_box} onSubmit={handleSubmit(onSubmit)}>
  
//       <label>
//         First Field
//         </label>
//         <input
//           className={styles.form_input}
//           {...register("username", { required: "Поле обязательно для заполнения" })}
//           type="text"
//         />
   
//       {errors.username && <p>{errors.username.message}</p>}
  
    
//       {isTrue && (
//   <div>
//     <label>Second Field</label>
//     <input
//       className={styles.form_input}
//       {...register("userNachName", { required: "Поле обязательно для заполнения" })}
//       type="text"
//     />
//   </div>
// )}
//       {errors.userNachName && <p>{errors.userNachName.message}</p>}
  
     
//       <button className={styles.btn} type="submit">
//         Submit
//       </button>
//     </form>
//   );
//    }
//    export default DynamicForm


import React, { useEffect, useState } from "react";
import styles from "./Dynamic.module.css";
import { useForm } from "react-hook-form";

function DynamicForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const firstFieldValue = watch("username", "");
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (firstFieldValue.length >= 5) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [firstFieldValue]);

  return (
    <form className={styles.form_box} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_group}>
        <label className={styles.form_label}>First Field</label>
        <input
          className={styles.form_input}
          {...register("username", { required: "Поле обязательно для заполнения" })}
          type="text"
        />
        {errors.username && <p className={styles.error_message}>{errors.username.message}</p>}
      </div>

      {isTrue && (
        <div className={styles.form_group}>
          <label className={styles.form_label}>Second Field</label>
          <input
            className={styles.form_input}
            {...register("userNachName", { required: "Поле обязательно для заполнения" })}
            type="text"
          />
          {errors.userNachName && <p className={styles.error_message}>{errors.userNachName.message}</p>}
        </div>
      )}

      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;

