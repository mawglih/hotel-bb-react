import React, { Component } from 'react';
import { storage } from '../firebase';




class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {file: null, fileUrl: '', fileName: '',};
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    onSubmit(event){
        event.preventDefault(); 
        storage.doUploadImage(this.state.file)
        .then((snapshot) => {
            console.log('file uploaded: ', snapshot.downloadURL);
            this.setState({fileUrl: snapshot.downloadURL});
        });
    }

    onFileChange(e) {
        this.setState({file: e.target.files[0], fileName: (new Date().getTime()) + '-' + e.target.files[0].name}, () =>{
            console.log('before upload: ', this.state.fileName);
        });
    }



    render() {
        return(
            <div className="signin">
                <form className="signup__form" onSubmit={this.onSubmit}>
                    <label className="signup__form-label" htmlFor="files">Upload your image</label>
                    <input className="signup__form-photo" id="files" type="file" onChange={this.onFileChange}/> 
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    }
}
export default Photo;