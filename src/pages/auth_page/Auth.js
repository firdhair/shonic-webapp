//Component
import FotAuth from '../../components/auth_component/FotAuth';
import NavAuth from '../../components/auth_component/NavAuth';
<<<<<<< HEAD
/* import ResetPassDone from '../../components/auth_component/ResetPassDone'; */
=======
import ResetPassDone from '../../components/auth_component/ResetPassDone';
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
/* import ResetPassNext from '../../components/auth_component/ResetPassNext'; */
/* import ResetPass from '../../components/auth_component/ResetPass'; */
//css
import styles from './Auth.module.scss';
//react router
<<<<<<< HEAD
import Login from '../../components/auth_component/Login';
=======
import Login from '../../components/auth_component/Login'; 
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
/* import Register from '../../components/auth_component/Register'; */
/* import Verif from '../../components/auth_component/Verif'; */
/* import LoginNext from '../../components/auth_component/LoginNext'; */

const Auth = () => {
  return (
    <>
      <section className={styles.relative}>
        <NavAuth />
        <Login />
        {/* <Register /> */}
        {/*      <Verif /> */}
        {/* <LoginNext /> */}
        {/*  <ResetPass /> */}
        {/* <ResetPassNext /> */}
<<<<<<< HEAD
        {/* <ResetPassDone /> */}
=======
        <ResetPassDone />
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
        <FotAuth />
      </section>
    </>
  );
};

export default Auth;
