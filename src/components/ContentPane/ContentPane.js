import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { DonePane } from "./DonePane";
import ToDoPane from "./ToDoPane";
import firebase from "../../firebase";
import Spiner from "../UI/Spiner";
import EmptyContentMessage from './EmptyContentMessage';
class ContentPane extends Component {
  state = {
    worksRef: firebase.database().ref("works"),
    workDateId: this.props.workDateId,
    todoWorks: [],
    loading: true,
    doneWorks: [],
    hasWork: true,
  };

  componentDidMount() {
    const { workDateId } = this.state;

    if (workDateId) this.addListeners(workDateId);
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners = (workDateId) => {
    let todoWorks = [];
    let doneWorks = [];
    const { worksRef } = this.state;
    worksRef.child(workDateId).on("child_added", (snap) => {
      console.log(snap.val());

      this.retrieveWorks(snap.val(), snap.key, todoWorks, doneWorks);
    });
    worksRef.child(workDateId).once("value", (snap) => {
      if (snap.numChildren() === 0) {
        this.setState({
          hasWork: false,
          loading: false,
        });
      } else {
        this.setState({
          hasWork: true,
        });
      }
    });
  };

  retrieveWorks = (work, key, todoWorks, doneWorks) => {
    if (work.status === "TODO") {
      todoWorks.push({ id: key, ...work });
    } else {
      doneWorks.push({ id: key, ...work });
    }
    this.setState({
      todoWorks,
      doneWorks,
      loading: false,
    });
  };

  removeListeners = () => {
    this.state.worksRef.off();
  };

  render() {
    const { loading, workDateId, todoWorks, doneWorks, hasWork } = this.state;
    return (
      <>
        {loading && <Spiner />}
        {hasWork && (
          <Grid>
            <Grid.Column width="8">
              {/*  */}
              <ToDoPane
                key={`t${todoWorks.length}`}
                todoWorks={todoWorks}
                workDateId={workDateId}
              />
            </Grid.Column>
            <Grid.Column width="8">
              {/*  */}
              <DonePane
                key={`t${todoWorks.length}`}
                doneWorks={doneWorks}
                workDateId={workDateId}
              />
            </Grid.Column>
          </Grid>
        )}
        {!hasWork && (<EmptyContentMessage workDate={this.props.workDate}/>)}
      
      </>
    );
  }
}

export default ContentPane;
