import React from 'react';

const SettingsForm = (props) => {
  return (
    <form style={styles.container} onSubmit={props.editMe}>
      <h2>Account Information</h2>
      <p style={styles.myInputRow}>
        Name: <input type='text' style={styles.myInput} value={props.fName} placeholder='First Name' />
        Name: <input type='text' style={styles.myInput} value={props.lName} placeholder='Last Name' />
      </p>
      <p style={styles.myInputRow}>
        Street: <input type='text' style={styles.myInput} value={props.street} placeholder='Street' />
        State: <input  type='text' style={styles.myInput} value={props.state} placeholder='State' />
      </p>
      <p style={styles.myInputRow}>
          Email: <input type='text' style={styles.myInput} value={props.email} placeholder='Email' />
          Phone: <input type='text' style={styles.myInput} value={props.phone} placeholder='Phone' />
      </p>
      <p style={styles.myInputRow}>
          City: <input  type='text' style={styles.myInput} value={props.city} placeholder='City' />
          Zip Code: <input type='text' style={styles.myInput} value={props.zipcode} placeholder='Zip Code' />
      </p>
    </form>
  );
}

export default SettingsForm;

const styles= {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    justifyContent: 'center',
    // marginLeft: '50%',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    border: '1 solid gray',
    color: 'gray',
    width: '100%',
    padding: '5%'
  },
  myInputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
    // width: '200px',
    // flex: 1
  },
  myInput: {
    padding: '2%',
    display: 'flex',
    flexDirection:'row',
    flex: '1 1 auto',
    border: 'none',
    color: 'grey',
    fontSize: '1em'
  },
  btnCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 175,
    padding: 20,
    color: 'grey',
    margin: 10
  }
}
// .form-row {
//   display: flex;
//   justify-content: flex-end;
//   padding: .5em;
// }
// .form-row > label {
//   padding: .5em 1em .5em 0;
//   flex: 1;
// }
// .form-row > input {
//   flex: 2;
// }
// .form-row > input,
// .form-row > button {
//   padding: .5em;
// }
// .form-row > button {
//  background: gray;
//  color: white;
//  border: 0;
// }
// }