// import { useState } from 'react'

// const useValidate = () => {

//     const [violation, setViolation] = useState({
//         isValid: true,
//         error: []
//     })


//     function validate(rules, formData) {
//         rules.forEach(validationRunner);
//     }



//     function validationRunner(fieldNode) {
//         const validateStatus = {
//             isValid: true,
//             error: []
//         }
//         Object.keys(fieldNode?.validation).forEach((rule) => {
//             if (ruleCheck(rule, formData[fieldNode?.field])) {
//                 validateStatus.isValid = validateStatus.isValid ? false : validateStatus.isValid;
//                 validateStatus.isValid.push(fieldNode?.validation?.rule)
//             }
//         })
//         setViolation(state => {
//             return {
//                 ...state,
//                 isValid: state.isValid ? validateStatus.isValid : state.isValid,
//                 error: [
//                     ...state.error,
//                     validateStatus.error
//                 ]
//             }
//         })
//     }


//     function ruleCheck(rule, input) {
//         if (rule.toUpperCase() === 'required'.toUpperCase()) {
//             return input.trim()
//         }
//         return
//     }

//     // console.log(violation)


//     // {
//     //     field: 'status',
//     //     validation: {
//     //         required: "Field is required"
//     //     }
//     // }


//     return {
//         violation: violation,
//         isValid: function () {

//         },
//         getError: function () {

//         },
//         validate: function (rules, formData) {

//         }
//     }
// }

// export default useValidate