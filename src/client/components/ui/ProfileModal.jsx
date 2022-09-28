import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class ProfileModal extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    
    serverFunctions.collect_profile(window.db.staff, 'Employee')
      .then(response => this.load_profile(response));

  }
  load_profile = (response) => {
    for (var i in response) {
      const name = i;
      const value = response[i];
      this.setState({
        [name]: value
      });
    }
    this.collect_todos();
  }
  collect_todos() {
        var todos;
        switch(this.state.evaluation_status){
          case 'Pending employee':
            todos = (<p>Evaluation <span class="badge bg-warning">{new Date().toLocaleDateString()}</span></p>)
            break;
          default:
            todos =  (<p>Evaluation <span class="badge bg-success">Complete</span></p>);
            break;
        }
        this.setState({todos: todos})
      }

  render() {
    return (
      <div id='profile-modal' class="modal modal-lg">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{this.state.first_name} {this.state.last_name} - {this.state.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="profile-home-tab" data-bs-toggle="tab" data-bs-target="#profile-home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-todos-tab" data-bs-toggle="tab" data-bs-target="#profile-todos-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">To-Do</button>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="profile-home-tab-pane" role="tabpanel" aria-labelledby="profile-home-tab" tabindex="0">
                  <div class="row pt-4">
                    <div class="col">
                      <p>{this.state.department}</p>
                    </div>
                  </div>
                  </div>
                <div class="tab-pane fade" id="profile-todos-tab-pane" role="tabpanel" aria-labelledby="profile-todos-tab" tabindex="0">
                  <div class="row pt-4">
                    <div class="col">
                      {this.state.todos}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileModal;
