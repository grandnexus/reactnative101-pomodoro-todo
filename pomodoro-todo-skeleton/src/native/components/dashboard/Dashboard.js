import React, { Component } from 'react';
import { StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { Container, Content, Header, Left, Button, Icon, Body, Right } from 'native-base';
import Spacer from '../common/Spacer';
import TodoCheckbox from '../common/TodoCheckbox';
import { Actions } from 'react-native-router-flux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    }
  }

  loadData = async () => {
    console.log("Loading tasks");
    try {
      // fill in the blanks
    } catch (error) {
      console.log("Problem retriving data");
    }
  }

  saveData = async () => {
    console.log("Saving tasks");
    try {
      // fill in the blanks
    } catch (error) {
      console.log("Error saving");
    }
  }

  updateTask = async (task) => {
    console.log("Updating task");
      // fill in the blanks
  }

  deleteTask = async (task) => {
    console.log("Deleting task");
      // fill in the blanks
  }

  listTodoTasks() {
    return this.state.tasks.map(item => {
      return (
        <TodoCheckbox
          key={item.id}
          task={item.taskName}
          checked={item.isChecked}
          inverted={true}
          onPress={() => {
            this.updateTask({
              id: item.id,
              taskName: item.taskName,
              isChecked: !item.isChecked,
              timeCompleted: null,
            });
          }}
          onChangeText={(text) => {
            this.updateTask({
              id: item.id,
              taskName: text,
              isChecked: false,
              timeCompleted: null
            })
          }}
          onDelete={() =>
            this.deleteTask({
              id: item.id
            })
          }
        />
      );
    });
  }

  componentDidMount() {
    // fill in the blanks
  }

  render() {
    return (<Container>
      <StatusBar hidden />
      <Header transparent>
        <Left>
          <Button transparent onPress={() => {
            Actions.pop(); setTimeout(() => {
              Actions.refresh({});
            }, 100);
          }}>
            <Icon name='arrow-back' style={styles.leftButtonIcon} />
          </Button>
        </Left>
        <Body />
        <Right>
        </Right>
      </Header>
      <Content style={styles.content} padder>
        {this.listTodoTasks()}
        <TodoCheckbox
          task={this.state.newTask}
          isInputField={true}
          inverted={true}
          onChangeText={(text) => {
            console.log("Update task text", text);
            // fill in the blanks
          }}
          onSubmitEditing={() => {
            console.log("Submit new task");
            // fill in the blanks
          }}
        />
        <Spacer size={50} />
      </Content>
    </Container>);
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  leftButtonIcon: {
    color: 'black'
  }
});

export default Dashboard;