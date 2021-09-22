import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider, Header, Icon, Segment, Button } from "semantic-ui-react";
import { refreshWordDateDataId } from "../../redux/workdates/workdateAction";
class ToDoPane extends Component {
  handleDeleteWork = (work) => {};
  handleUpdateStatus = (work) => {};
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
          todoWorks.map((item,index) => {
            return (
              <Segment key={index} attached clearing>
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
  refreshWorkDateDataId: (id) => dispatch(refreshWordDateDataId(id)),
});

export default connect(mapDispatchToProps)(ToDoPane);
