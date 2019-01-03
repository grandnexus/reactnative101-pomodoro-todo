import React, { Component } from 'react';
import { Text, StyleSheet, StatusBar, ImageBackground, AsyncStorage } from 'react-native';
import { Button, Content, View } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from "react-native-router-flux";
import moment from 'moment';
import TodoCheckbox from '../common/TodoCheckbox';
import CountdownText from '../common/CountdownText';
import backgroundImage from "../../../images/fire.jpeg";

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = '0' + s; }
  return s;
}

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTimerString: '25 : 00',
      remainingTime: null,
      isTimerStarted: false,
      currentTaskIsChecked: false,
      currentTaskIndex: -1,
      currentTaskName: null,
      isAllTasksCompleted: true
    }
  }

  getLatestTask = async (tasks) => {
    console.log('Getting latest task');
    // fill in the blanks
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

  startTimer() {
    console.log("Start timer");
    this.setState({
      isTimerStarted: true
    });
    this.interval = setInterval(() => {
      let pomodoroTime;
      if (this.state.remainingTime == null) {
        pomodoroTime = moment().add('25', 'minutes');
      } else {
        pomodoroTime = this.state.remainingTime.subtract('1000', 'milliseconds');
      }
      const timeDiff = pomodoroTime.diff(moment());
      const timeRemainingTime = moment.duration(timeDiff, 'milliseconds');

      const displayTimeRemaining = `${(timeRemainingTime.minutes()).pad(2)} : ${(timeRemainingTime.seconds()).pad(2)}`;
      this.setState({
        currentTimerString: displayTimeRemaining,
        remainingTime: pomodoroTime
      });

      if (timeDiff < 0) {
        clearInterval(this.interval);
        this.setState({
          currentTimerString: '25 : 00',
          isTimerStarted: false,
          remainingTime: null
        });
      }
    }, 1000);
  }

  stopTimer() {
    console.log("Stop timer");
    clearInterval(this.interval);
    this.setState({
      currentTimerString: '25 : 00',
      isTimerStarted: false,
      remainingTime: null
    });
  }

  componentDidMount() {
    // fill in the blanks
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async componentWillReceiveProps() {
    console.log("Receiving new updates");
    // fill in the blanks
  }

  render() {
    return (<ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <StatusBar hidden />
      <Content style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.buttonGroup}>
            <Button style={styles.button} onPress={() => {
              if (this.state.isTimerStarted) {
                this.stopTimer();
              } else {
                this.startTimer();
              }
            }} transparent>
              <FontAwesome name={this.state.isTimerStarted ? 'stop-circle' : 'play-circle'} size={32} color="white" />
            </Button>
            <Button style={styles.button} onPress={() => Actions.dashboard()} transparent>
              <FontAwesome name='dashboard' size={32} color='white' />
            </Button>
          </View>
          <CountdownText text={this.state.currentTimerString} />
          {!this.state.isAllTasksCompleted ? <TodoCheckbox
            isInputField={true}
            checked={this.state.currentTaskIsChecked}
            task={this.state.currentTaskName}
            onChangeText={(text) => {
              this.updateTask({
                id: this.state.currentTaskIndex,
                taskName: text,
                isChecked: this.state.currentTaskIsChecked,
                timeCompleted: this.state.currentTimerString,
              })
            }}
            onPress={() => {
              console.log(this.state.currentTaskIndex, 'tests');
              if (!this.state.currentTaskIsChecked) {
                this.setState({
                  currentTaskIsChecked: true
                })
                this.stopTimer();
              } else {
                this.setState({
                  currentTaskIsChecked: false
                })
              }
              this.updateTask({
                id: this.state.currentTaskIndex,
                taskName: this.state.currentTaskName,
                isChecked: !this.state.currentTaskIsChecked,
                timeCompleted: this.state.currentTimerString,
              });
            }
            } />
            : <View><Text style={styles.text}>Add new task at Dashboard to begin.</Text></View>
          }

        </View>
      </Content>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  content: {
    backgroundColor: "rgba(0,0,0,.6)",
    width: '100%',
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  }

});

export default Focus;