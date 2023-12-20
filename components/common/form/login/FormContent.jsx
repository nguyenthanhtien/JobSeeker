import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import  { account, teams } from "../../../../appwrite/appwrite";
const FormContent = () => {
  const promise = account.createEmailSession('tiennguyen.aws@gmail.com', '123456789');
  teams.updateMembership()
  var a = account.get();
    a.then(function (response) {
      console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
  return (
    <div className="form-inner">
      <h3>Login to Superio</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
