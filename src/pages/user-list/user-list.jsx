import React, { Component } from "react";
import "./user-list.scss";
import Container from "../../components/container/container";
import { UserCard } from "../../components/user-card/user-card";
import { CustomButton } from "../../components/custom-button/custom-button";
import { connect } from "react-redux";

import {
  deleteUserActionStart,
  fetchUserStart,
  onCancelingUserAction,
  hideToastAction,
} from "../../store/user-list/user-list.actions";
import { Toast } from "../../components/toast/toast";

export class UserList extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const {
      users,
      onCancelingUser,
      listUsersToCancel,
      confirmDeleteUser,
      successMessage,
      errorMessage,
    } = this.props;
    const onConfirmDeleteUser = () => {
      confirmDeleteUser(listUsersToCancel);
      setTimeout(() => this.props.hideToast(), 5000);
    };
    return (
      <div>
        <h1>User List</h1>
        <Container customClassName='userListContainer'>
          {users
            ? users.map((user) => {
                return (
                  <UserCard
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    removeUser={onCancelingUser}
                  />
                );
              })
            : []}

          <CustomButton
            onClick={() => {
              onConfirmDeleteUser();
            }}
            type='button'
            buttonStyle={"rectangle"}
            buttonShape={"normal-button"}>
            Save
          </CustomButton>
          <Toast showToast={this.props.showToastProp}>
            {successMessage || errorMessage}
          </Toast>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    listUsersToCancel: state.user.listUsersToCancel,
    isFetching: state.user.isFetching,
    showToastProp: state.user.showToast,
    successMessage: state.user.successMessage,
    errorMessage: state.user.errorMessage,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUserStart()),
  onCancelingUser: (userId) => dispatch(onCancelingUserAction(userId)),
  confirmDeleteUser: (userId) => dispatch(deleteUserActionStart(userId)),
  hideToast: () => dispatch(hideToastAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
