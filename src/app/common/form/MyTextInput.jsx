import React from 'react';
import {useField} from 'formik'
import { FormField, Label } from 'semantic-ui-react';

export default function({label, ...props}) {
    const [field, meta] = useField(props);    // destructuring props to extract field and meta.
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error 
               ? <Label basic color='red'>{meta.error}</Label> 
               : null
            }
        </FormField>        
    )
}