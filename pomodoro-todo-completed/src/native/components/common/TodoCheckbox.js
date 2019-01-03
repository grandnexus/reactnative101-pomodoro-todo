import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { CheckBox, ListItem, Body, Input, Right, Button, Icon } from 'native-base';

const TodoCheckbox = ({ checked, inverted, isInputField, task, onPress, onChangeText, onSubmitEditing, onDelete }) => (
  <ListItem>
    <CheckBox color={checked ? 'green' : inverted ? 'black' : 'white'} onPress={onPress} checked={checked} />
    <Body style={styles.body}>
      <Input
        style={{ ...styles.inputText, color: inverted ? 'black' : 'white' }}
        placeholder='Add task here...'
        placeholderTextColor={inverted ? 'black' : 'white'}
        value={task}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType='done'
      />
    </Body>
    {!isInputField ? (<Right style={styles.right}>
      <Button transparent onPress={onDelete}><Icon style={styles.icon} name='trash'></Icon></Button>
    </Right>) : (<View />)
    }

  </ListItem>
);

TodoCheckbox.propTypes = {
  task: PropTypes.string,
};

TodoCheckbox.defaultProps = {
  task: '',
};

const styles = StyleSheet.create({
  inputText: {
    paddingLeft: 20,
    fontSize: 20
  },
  body: {
    flex: 1
  },
  right: {
    margin: -25
  },
  icon: {
    color: 'darkgrey'
  }
});

export default TodoCheckbox;
