import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const _List = (props) => {
    let itemsCollection = _.map(props.todos, (element, index) => {
        return (
            <List.Item key={index} onClick={() => {props.handleRemoveTodo(element.content)}}>
                <List.Icon name='tag' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Description>{element.content}</List.Description>
                </List.Content>
            </List.Item>
        )
    })

    return (
        <List id='todo-list' relaxed>
            {itemsCollection}
        </List>
    )
}

_List.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired
}


export default _List
