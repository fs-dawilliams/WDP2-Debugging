import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SettingsForm from '../components/forms/SettingsForm';

function Settings() {
  //Declare States 
  const [userData, setuserData] = useState(null);
  /*********** 
  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering

  async function name([param[, param[, ...param]]]) {
    statements
  }
  Parameters
  name -Is the function’s name.  
  param - Is the name of an argument to be passed to the function. 
  statements -The statements comprising the body of the function.  The await mechanism may be used.
  
  Return value
  A Promise which will be resolved with the value returned by the async function, or rejected with an exception thrown from, or uncaught within, the async function.
  Promise- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. pending, fulfilled or rejected.
***********/

  useEffect(() => {
    async function fetchAPI(){
      const response = await fetch('https://randomuser.me/api/?seed=4c9615182274d6f3');
      const data = await response.json();
      const [user] = data.results;
      console.log(user);
      // OR
      // const [user] = data.results.results.map(user => setuserData({
      //           firstName: `${user.name.first}`,
      //           lastName: `${user.name.last}`,
      //           username: `${user.login.username}`}))
      // console.log(user)
      setuserData(user);
    }
    fetchAPI();
  }, []);
  
  return (
    <section style={styles.container}>
      <p><Link to="/">Back</Link> / Settings</p>
        {userData && <SettingsForm 
                        avatar={userData.picture.large} 
                        fName={userData.name.first}
                        lName={userData.name.last}
                        street={userData.location.street.number}
                        city={userData.location}
                        state={userData.location}
                        zipcode={userData.location.postcode}
                        email={userData.email}
                        phone={userData.phone}
                      />
        }
    </section>
  );
}

export default Settings;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
    paddingLeft: '2%'
  },
  form: {
    paddingLeft: '70%'
  }
}