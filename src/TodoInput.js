import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewTodo } from './actions/todos.actions'

let TodoInput = ({ handleSubmit, addNewTodo }) => {

  function addTodo({ newTodo }) {
    addNewTodo(newTodo)
  }

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <Field
        type="text"
        name="newTodo"
        component="input"
      />
      <button type="submit">Submit</button>
    </form>
  )

}

TodoInput = reduxForm({
  form: 'todo_input'
})(TodoInput)

function mapStateToProps(state) {
  return {
    initialValues: { newTodo: 'hello' }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTodo: bindActionCreators(addNewTodo, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);