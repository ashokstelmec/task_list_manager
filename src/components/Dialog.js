// import React from "react";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";

// const Dialog = () => {
//   return (
//     <>
//       <Modal
//         open={open}
//         onClose={handleCloseModal}
//         center
//       >
//         <h2 className="title">Create/Edit Task</h2>
//         <form onSubmit={(e) => handleSubmit(e, dialogQuote)}>
//           <div className="form-group">
//             <label>
//               <b>Enter quote</b>
//             </label>
//             <textarea
//               value={dialogQuote?.en}
//               name="en"
//               className="form-control"
//               rows={4}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>
//               <b>Author</b>
//             </label>
//             <input
//               value={dialogQuote?.author}
//               name="author"
//               className="form-control"
//               type="text"
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="add-quote">
//             Submit
//           </button>
//         </form>
//       </Modal>
//     </>
//   );
// };

// export default Dialog;
