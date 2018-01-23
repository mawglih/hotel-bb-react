import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import * as routes from '../constants/routes';
import { BY_PROP_KEY } from '../constants/prop-key';

const SignUpPage = ({history}) =>
    <div className="signup__page">
        <SignUpForm history={history}/>
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    fileUrl: '',
    fileName: '',
    file: null,
    error: null,
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
        
    }
    onSubmit = (event) => {
        let { username, email, passwordOne, file,} = this.state;
        const { history, } = this.props;
        auth.doCreateUserWithEmailAndPassword(email,passwordOne)
            .then(authUser => {
                db.doCreateUser(authUser.uid, username, email, this.state.fileUrl)
                .then(()=> {
                    this.setState(() => ({...INITIAL_STATE}), () => {
                        console.log("user created: ", this.state.username);
                    });
                    history.pushState(routes.HOTEL);
                })
                .catch(error => {
                    this.setState(BY_PROP_KEY('error', error));
                });
            })
            .catch(error => {
                this.setState(BY_PROP_KEY('error', error));
            });
        
        event.preventDefault();    
    }

    onSubmitPhoto(event){
        //let file = '';
        this.onFileChange(event);
        event.preventDefault(); 
        storage.doUploadImage(this.state.file)
        .then((snapshot) => {
            this.setState({fileUrl: snapshot.downloadURL}, () => {
                console.log('file url: ', this.state.fileUrl);
            });
        });
        //return file;
    }


    // onFileChange(e) {
    //     this.setState({file: e.target.files[0]});
    // }
    onFileChange(e) {
        this.setState({file: e.target.files[0], fileName: (new Date().getTime()) + '-' + e.target.files[0].name}, () =>{
            console.log('before upload: ', this.state.fileName);
        });
    }


    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return(
            <div className="signup">
                <form className="signup__form" onSubmit={this.onSubmit}>
                    <div className="u-center-text u-margin-bottom-medium">
                        <h2 className="heading-tertiary-form">
                            New account sign-up
                        </h2>
                    </div>
                    <div className="signup__form-group">
                        <label className="signup__form-label" htmlFor="name">Full name</label>
                        <input className="signup__form-input" id="name" type="text" placeholder="Full Name" value={username} onChange={event => this.setState(BY_PROP_KEY('username', event.target.value))}/>
                    </div>
                    <div className="signup__form-group">
                        <label className="signup__form-label" htmlFor="email">Email</label>
                        <input className="signup__form-input" id="email" type="text" placeholder="Email Address" value={email} onChange={event => this.setState(BY_PROP_KEY('email', event.target.value))}/>
                    </div>
                    <div className="signup__form-group">
                        <label className="signup__form-label"  htmlFor="password1">Password</label>
                        <input className="signup__form-input" id="password1" type="password" placeholder="Password" value={passwordOne} onChange={event => this.setState(BY_PROP_KEY('passwordOne', event.target.value))}/>
                    </div>
                    <div className="signup__form-group">
                    <label  className="signup__form-label" htmlFor="password2">Re-enter password</label>
                        <input className="signup__form-input" id="password2" type="password" placeholder="Confirm password" value={passwordTwo} onChange={event => this.setState(BY_PROP_KEY('passwordTwo', event.target.value))}/>
                    </div>
                    <div className="signup__form-group">    
                        <label className="signup__form-label" htmlFor="files">Upload your image</label>
                        <input className="signup__form-photo" id="files" type="file" onChange={this.onFileChange.bind(this)}/> 
                    </div>
                    <div className="signup__form-group">
                        <button className="signup__form-button" disabled={isInvalid} type="submit">Sign Up &rarr;</button>
                        
                    </div>
                    { error && <p>{error.message}</p>}
                </form>
            </div>
            
        );
    }
}

const SignUpLink = () => 
 <div className="signup__link">
     <p  >Do not have an account?
     {' '}
     <Link to={routes.SIGN_UP} className="signup__link">Sign Up</Link>
</p>
 </div>
 
export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };