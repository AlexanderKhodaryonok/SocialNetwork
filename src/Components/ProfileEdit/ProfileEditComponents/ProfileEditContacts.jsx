import React from 'react'
import {Field, reduxForm} from 'redux-form'
import style from './ProfileEditContacts.module.css';

let ProfileEditContacts = props => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">fullName: </label>
                <Field name="fullName" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="lookingForAJob">lookingForAJob: </label>
                <Field name="lookingForAJob" component="input" type="checkbox"/>
            </div>
            <div>
                <label htmlFor="lookingForAJobDescription">lookingForAJobDescription: </label>
                <Field name="lookingForAJobDescription" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="aboutMe">aboutMe: </label>
                <Field name="aboutMe" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="facebook">facebook: </label>
                <Field name="facebook" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="github">github: </label>
                <Field name="github" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="instagram">instagram: </label>
                <Field name="instagram" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="mainLink">mainLink: </label>
                <Field name="mainLink" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="twitter">twitter: </label>
                <Field name="twitter" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="vk">vk: </label>
                <Field name="vk" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="website">website: </label>
                <Field name="website" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="youtube">youtube: </label>
                <Field name="youtube" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

ProfileEditContacts = reduxForm({
    form: 'contact'
})(ProfileEditContacts);

export default ProfileEditContacts;