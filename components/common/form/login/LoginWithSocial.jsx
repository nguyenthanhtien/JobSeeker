import { account, teams } from "../../../../appwrite/appwrite";

const LoginWithSocial = () => {
  const loginWithSocial = async (provider) => { // Step 3
    const url = account.createOAuth2Session(provider);
    console.log(url);
  };
  return (
    <div className="btn-box row">
      <div className="col-lg-6 col-md-12">
        <a href="#" className="theme-btn social-btn-two facebook-btn" onClick={e => loginWithSocial('facebook')}>
          <i className="fab fa-facebook-f"></i> Log In via Facebook
        </a>
      </div>
      <div className="col-lg-6 col-md-12">
        <a href="#" className="theme-btn social-btn-two google-btn" onClick={e => loginWithSocial('google')}>
          <i className="fab fa-google"></i> Log In via Google
        </a>
      </div>
    </div>
  );
};

export default LoginWithSocial;
