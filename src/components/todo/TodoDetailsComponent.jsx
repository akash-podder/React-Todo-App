import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from './security/AuthContext';

import { retrieveTodoApiCall, updateTodoApiCall } from "./api/TodoApiService"

// to handle "Form Data" we use "formit" 3rd Party Library
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function TodoDetailsComponent(){
    
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username
    
    const navigate = useNavigate()

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
      const todo = {
        id: id,
        username: username,
        description: values.description,
        targetDate: values.targetDate,
        done:false
      }

      updateTodoApiCall(username, id, todo)
            .then(
              (response) => {
                  console.log(response)
                  navigate('/todos')
              }
          )
          .catch(error => console.log(error))
    }

    function myValidationFunction(values){
      let errors = {
          // description: 'Enter a valid description',
          // targetDate: 'Enter a valid Target Date'
      }

      if(values.description.length<5){
        errors.description = 'Enter atleast 5 characters'
      }

      if(values.targetDate==null){
        errors.description = 'Enter a Target Date'
      }

      console.log(values)

      return errors
    }
        
    return (
      <div className="TodoDetailsComponent">
        <h1>Todo Details</h1>
        <div>

            <Formik initialValues={ {description, targetDate} }
              enableReinitialize = {true}
              onSubmit={onSubmitClick}
              validate={myValidationFunction}
              validateOnChange = {false}
              validateOnBlur = {false}
            >
                {
                  (props) => (
                    <Form>

                        <ErrorMessage
                          name="description"
                          component="div"
                          className="alert alert-warning"
                        />

                        <ErrorMessage
                          name="targetDate"
                          component="div"
                          className="alert alert-warning"
                        />

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