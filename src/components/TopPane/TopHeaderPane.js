import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
} from "semantic-ui-react";
import {
  setWorkDate,
  setWorkDateData,
  refreshWorkDateDataId,
} from "../../redux/workdates/workdateAction";
import firebase from "../../firebase";

class TopHeaderPane extends Component {
  state = {
    modal: false,
    workName: "",
    workDatesRef: firebase.database().ref("workdates"),
    worksRef: firebase.database().ref("works"),
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { workName, worksRef } = this.state;
    if (this.props.workDateData) {
      this.saveWork(this.props.workDateData.id, workName, worksRef);
    } else {
      this.saveWorkDate();
    }
  };

  //lưu workdate
  saveWorkDate() {
    if (this.isFormVail(this.state)) {
      const { workDatesRef, workName, worksRef } = this.state;
      const { user, workDate } = this.props;
      const key = workDatesRef.push().key;
      const newWorkDate = {
        id: key,
        date: workDate,
        uid: user.uid,
      };

      workDatesRef
        .child(key)
        .update(newWorkDate)
        .then(() => {
          console.log("success");
          this.saveWork(key, workName, worksRef);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  //
  saveWork = (key, workName, worksRef) => {
    const newWork = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      name: workName,
      status: "TODO",
    };
    worksRef
      .child(key)
      .push()
      .set(newWork)
      .then(() => {
        console.log("save work");
        this.closeModal();
        this.props.refreshWorkDateDataId(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  isFormVail = ({ workName }) => workName;

  // đóng modal
  closeModal = () => {
    this.setState({ modal: false });
  };

  // mở modal
  openModal = () => {
    this.setState({ modal: true });
  };

  render() {
    const { modal } = this.state;
    const { workDate } = this.props;

    return (
      <>
        <Segment clearing>
          <Header>
            <Icon name="calendar" />
            <Header.Content>
              <h1> Date: {workDate} </h1>
            </Header.Content>
          </Header>
          <Button icon="plus" floated="right" onClick={this.openModal} />
        </Segment>

        <Modal open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Work</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label="Work Name:"
                  name="workName"
                  onChange={this.handleChange}
                ></Input>
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark"></Icon> Add
            </Button>

            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove"></Icon> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}
/// workDates, user lấy từ reducer
const mapStateToProps = ({
  workDates: { workDate, workDateData },
  users: { user },
}) => ({
  workDate: workDate,
  workDateData: workDateData,
  user: user,
});

const mapDispatchToProps = (dispatch) => ({
  setWorkDate: (workDate) => dispatch(setWorkDate(workDate)),
  setWorkDateData: (data) => dispatch(setWorkDateData(data)),
  refreshWorkDateDataId: (id) => dispatch(refreshWorkDateDataId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderPane);
