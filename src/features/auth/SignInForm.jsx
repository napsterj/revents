import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import ModalWrapper from '../../app/common/modal/ModalWrapper';
import MyTextInput from '../../app/common/form/MyTextInput';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signIn } from './authActions';
import { closeModal } from '../../app/common/modal/modalReducer';

export default function SignInForm() {   
    const dispatch = useDispatch();
    
    return (
        <ModalWrapper size='mini' header='Sign In with Re-vents'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={yup.object({
                    email: yup.string().required().email(),
                    password: yup.string().required()
                })}                
                onSubmit={(values, {setSubmitting}) => { 
                    dispatch(signIn(values))
                    setSubmitting(false)
                    dispatch(closeModal())
                }}                
            >
               {({isSubmitting, isValid, dirty}) => (
                   <Form className='ui-form'>
                       <MyTextInput name='email' placeholder='Email'/>
                       <MyTextInput name='password' placeholder='password' type='password'/>
                       <Button 
                       color='teal'
                       fluid 
                       loading={isSubmitting}
                       disabled={isSubmitting || !isValid || !dirty}                       
                       type="submit"                      
                       content='Log in'
                       />                                                  
                   </Form>
               )}
            </Formik>
        </ModalWrapper>
    )
}