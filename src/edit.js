import { useState } from 'react';
import Input from './DemoInput';
import Select from './DemoSelect';

const Edit = ({ attributes, setAttributes }) => {

    return (
        <div>
            <Input 
                placeholder={"What da pet say?"}
                label={"Message"}
                value={attributes.message}
                onChange={(value) => {
                    setAttributes({ message: value })
                }}
            />
            <Select 
                label={"Pet"}
                value={attributes.pet}
                options={[
                    { value: "Dog", label: "Dog" },
                    { value: "Cat", label: "Cat" },
                    { value: "Rabbit", label: "Rabbit" },
                ]}
                onChange={(value) => {
                    setAttributes({ pet: value })
                }}
            />
        </div>
    )
}

export default Edit;









// import Input from './DemoInput';
// import Select from './DemoSelect';


// const Edit = ({ attributes, setAttributes }) => {
//     return (
//         <div>
//             <Input 
//                 placeholder={"What da pet say?"}
//                 label={"Message"}
//                 value={attributes.message}
//                 onChange={(value) => {
//                     setAttributes({ message: value })
//                 }}
//             />
//             <Select 
//                 label={"Pet"}
//                 value={attributes.pet}
//                 options={[
//                     { value: "Dog", label: "Dog" },
//                     { value: "Cat", label: "Cat" },
//                     { value: "Rabbit", label: "Rabbit" },
//                 ]}
//                 onChange={(value) => {
//                     setAttributes({ pet: value })
//                 }}
//             />
//         </div>
//     )
// }

// export default Edit;