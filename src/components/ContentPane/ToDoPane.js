import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Header, Icon, Segment, Button } from "semantic-ui-react";
import { refreshWorkDateDataId } from "../../redux/workdates/workdateAction";
import firebase from "../../firebase";

class ToDoPane extends Component {
  state = {
    workRef: firebase.database().ref("works"),
  };

  handleDeleteWork = (work) => {
    const { workRef } = this.state;
    const { workDateId } = this.props;

    workRef
      .child(workDateId)
      .child(work.id)
      .remove()
      .then(() => {
        this.props.refreshWorkDateDataId(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUpdateStatus = (work) => {
    const { workRef } = this.state;
    const { workDateId, refreshWorkDateDataId } = this.props;

    workRef
      .child(workDateId)
      .child(work.id)
      .update({
        name: work.name,
        status: "DONE",
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      })
      .then((updatedWork) => {
        console.log(updatedWork);
        refreshWorkDateDataId(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { todoWorks } = this.props;
    return (
      <Segment stacked>
        <Header>
          <Icon name="bell" color="red" />
          <Header.Content>To-Do</Header.Content>
        </Header>
        <Divider />
        {todoWorks &&
          todoWorks.length > 0 &&
          todoWorks.map((item, index) => {
            return (
              <Segment key={item.id} attached clearing>
                {item.name}
                <Button
                  icon="trash alternate"
                  inverted
                  color="red"
                  floated="right"
                  size="mini"
                  onClick={() => this.handleDeleteWork(item)}
                ></Button>
                <Button
                  icon="checkmark"
                  inverted
                  color="blue"
                  floated="right"
                  size="mini"
                  onClick={() => this.handleUpdateStatus(item)}
                ></Button>
              </Segment>
            );
          })}
      </Segment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  refreshWorkDateDataId: (id) => dispatch(refreshWorkDateDataId(id)),
});

export default connect(null, mapDispatchToProps)(ToDoPane);
