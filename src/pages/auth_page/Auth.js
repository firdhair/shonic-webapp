//Component
import FotAuth from '../../components/auth_component/FotAuth';
import NavAuth from '../../components/auth_component/NavAuth';
import ResetPassDone from '../../components/auth_component/ResetPassDone';
/* import ResetPassNext from '../../components/auth_component/ResetPassNext'; */
/* import ResetPass from '../../components/auth_component/ResetPass'; */
//css
import styles from './Auth.module.scss';
//react router
/* import Login from '../../components/auth_component/Login'; */
/* import Register from '../../components/auth_component/Register'; */
/* import Verif from '../../components/auth_component/Verif'; */
/* import LoginNext from '../../components/auth_component/LoginNext'; */

const Auth = () => {
  return (
    <>
      <section className={styles.relative}>
        <NavAuth />
        {/* <Login /> */}
        {/* <Register /> */}
        {/*      <Verif /> */}
        {/* <LoginNext /> */}
        {/*  <ResetPass /> */}
        {/* <ResetPassNext /> */}
        <ResetPassDone />
        <FotAuth />
      </section>
    </>
  );
};

export default Auth;
