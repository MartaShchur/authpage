// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import Notiflix from 'notiflix';
// import { addContacts } from 'redux/operations';
// import { selectContacts } from 'redux/selectors';
// import { Form, Label, Button, Input } from './ContactForm.styled';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   // console.log(contacts);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//     // if (name.trim() === '' || number.trim() === '') {
//     //   return;
//     // }

//     const isContactExist = contacts.find(
//        contact  => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//     );

//     // console.log(number);
//     // console.log(name);
//     console.log(contacts);


//     if (isContactExist) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const isNumberExist = contacts.find(
//        contact  => contact.number.toLowerCase().trim() === number.toLowerCase().trim()
//     );

//     if (isNumberExist) {
//       alert(`${number} is already in contacts`);
//       return;
//     }

//     dispatch(addContacts({name, number}));
//     setName('');
//     setNumber('');
//   };

//   // const handleChange = event => {
//   //   const { name, value } = event.target;

//   //   switch (name) {
//   //     case 'name':
//   //       setName(value);
//   //       break;
//   //     case 'number':
//   //       setPhone(value);
//   //       break;
//   //     default:
//   //       return;
//   //   }
//   // };

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handlePhoneChange = event => {
//     setNumber(event.target.value);
//   };


//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off" >
//       <Label>
//         Name
//         </Label>
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces."
//           required
//           // placeholder="Enter name"
//           value={name}
//         onChange={handleNameChange}   
//         />

//       <Label>
//         Number
//         </Label>
//         <Input
//           type="tel"
//           name="phone"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           placeholder="Enter number"
//            value={number}
//         onChange={handlePhoneChange}
//         />
      
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// }

// export default ContactForm;