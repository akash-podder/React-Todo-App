import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from './security/AuthContext';

import { retrieveTodoApiCall } from "./api/TodoApiService"

// to handle "Form Data" we use "formit" 3rd Party Library
import { Formik, Form, Field } from 'formik';

export default function TodoDetailsComponent(){
    
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username
    
    const[description, setDescription] = useState('')
    const[targetDate, setTargetDate] = useState('')

    // useEffect ---> Tell REACT that your component needs to do something after Render
    useEffect (
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo() {
      retrieveTodoApiCall(username, id)
            .then(
                (response) => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                }
            )
            .catch(error => console.log(error))
    }

    function onSubmitClick(values){
      console.log(values)
    }
        
    return (
      <div className="TodoDetailsComponent">
        <h1>Todo Details</h1>
        <div>
            Description: {description}
            <Formik initialValues={ {description, targetDate} }
              enableReinitialize = {true}
              onSubmit={onSubmitClick}
            >
                {
                  (props) => (
                    <Form>
                        <fieldset className="form-group">
                          <label>Description</label>
                          <Field type="text" className="form-control" name="description"/>
                        </fieldset>

                        <fieldset className="form-group">
                          <label>Target Date</label>
                          <Field type="date" className="form-control" name="targetDate"/>
                        </fieldset>

                        <div>
                            <button type="submit" name="login" className="btn btn-success m-5">Save</button>
                        </div>
                    </Form>
                  )
                }
            </Formik>
        </div>
      </div>
    )
}