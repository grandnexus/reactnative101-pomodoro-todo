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
      const tasksString = await AsyncStorage.getItem('tasks');
      const tasks = JSON.parse(tasksString);
      if (tasks !== null) {
        console.log("Old data loaded");
        this.setState({
          tasks: tasks
        });
      }
    } catch (error) {
      console.log("Problem retriving data");
    }
  }

  saveData = async () => {
    console.log("Saving tasks");
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } catch (error) {
      console.log("Error saving");
    }
  }

  updateTask = async (task) => {
    console.log("Updating task");
    const tasks = this.state.tasks;
    const index = tasks.findIndex(item => item.id === task.id);
    tasks[index] = task;
    this.setState({
      tasks: tasks
    })
    this.saveData();
  }

  deleteTask = async (task) => {
    console.log("Deleting task");
    const tasks = this.state.tasks;
    const index = tasks.findIndex(item => item.id === task.id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    })
    this.saveData();
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
    this.loadData();
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
            this.setState({
              newTask: text
            });
          }}
          onSubmitEditing={() => {
            console.log("Submit new task");
            if (this.state.newTask.length > 0) {
              const newTask = {
                id: this.state.tasks.length + 1,
                taskName: this.state.newTask,
                isChecked: false,
                timeCompleted: null
              };
              let tasks = this.state.tasks;
              tasks.push(newTask);
              this.setState({
                tasks: tasks,
                newTask: ''
              });
              this.saveData();
            }
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