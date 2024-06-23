// import React, { useRef } from 'react';
// // import { firestore } from '../firebase'; // This should be commented out if using the new service path
// import { firestore } from '../service/firebase';
// import { addDoc, collection } from '@firebase/firestore';

// const Home = () => {
//     const messageRef = useRef();
//     const ref = collection(firestore, "message");

//     const handleSave = async (e) => {
//         e.preventDefault();
//         console.log(messageRef.current.value);
//         let data = {
//             message: messageRef.current.value
//         }
//         try {
//             await addDoc(ref, data); // Add await here to ensure the async call is properly handled
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSave}>
//                 <label>Enter message</label>
//                 <input type='text' ref={messageRef} /> {/* Correct input type */}
//                 <button type='submit'>Save</button>
//             </form>
//         </div>
//     );
// }

// export default Home;
