import { ProfileModal, AdminDashboard, Home, StaffForm, EvaluationForm, AcknowledgementForm, PleaForm, PleaDashboard, NolleForm, NolleDashboard, WarrantForm, MyDashboard, ScoreCardPage, NewCaseForm, GiglioForm } from '../../apps/exports';
import { Scrollbars } from 'rc-scrollbars';

const Navbar = () => {
  return (
    <>
    <ProfileModal />
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img
            src="https://i.ibb.co/zmKZKks/cropped-logo.png"
            width="32"
            height="32"
            class="d-inline-block align-text-bottom"
          />{' '}
          Apps
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="" onClick={(e) => load_page(e, <Home />)}>
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Staff</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <StaffForm type="onboard" />)}>Onboard</a>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <StaffForm type="modify" />)}>Modify</a>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <StaffForm type="offboard" />)}>Offboard</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Evaluations</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <EvaluationForm type="open" />)}>Create New</a>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <EvaluationForm type="load_saved" />)}>Load Saved</a>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <EvaluationForm type="modify" />)}>Modify</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <AcknowledgementForm type="reviewer" />)}>Reviewer Acknowledgement</a>
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <AcknowledgementForm type="employee" />)}>Employee Acknowledgement</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Bridge</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <NewCaseForm type="onboard" />)}>New Case</a>
              </div>
            </li>
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Legal Tools</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown02">
                        <div class="dropdown dropdown dropend">
                            <a class="dropdown-item dropdown-toggle" href="" id="dropdown-pleas" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pleas</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown-pleas">
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <PleaForm />)}>Request Approval</a>
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <PleaDashboard />)}>Supervisor Dashboard</a>
                            </div>
                        </div>
                        <div class="dropdown dropend">
                            <a class="dropdown-item dropdown-toggle" href="" id="dropdown-nolles" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nolles</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown-nolles">
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <NolleForm />)}>Request Approval</a>
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <NolleDashboard />)}>Supervisor Dashboard</a>
                            </div>
                        </div>
                        <div class="dropdown dropend">
                            <a class="dropdown-item dropdown-toggle" href="" id="dropdown-giglio" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Giglio</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown-giglio">
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <GiglioForm />)}>Create/Edit Case</a>
                                <a class="dropdown-item" href="" onClick={(e) => load_page(e, <NolleForm />)}>Panel Dashboard</a>
                            </div>
                        </div>
                        <a class="dropdown-item" href="" onClick={(e) => load_page(e, <WarrantForm />)}>Warrants</a>
                    </div>
                </li>
            <li class="nav-item">
              <a class="nav-link" href="" onClick={(e) => load_page(e, <MyDashboard />)}>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" onClick={(e) => load_page(e, <ScoreCardPage />)}>
                Score Cards
              </a>
            </li>
            <li class="nav-item">
              <a id="profile-link" class="nav-link" href="" onClick={(e) => load_page(e, <AdminDashboard />)}>
                Admin
              </a>
              </li>
            <li class="nav-item">
              <a id="profile-link" class="nav-link" href="" onClick={(e) => show_profile(e)}>
                Profile
              </a>
            </li>
          </ul>
          <div class='d-flex'>
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="" onClick={(e) => show_profile(e)}>
                  <i class="fa-solid fa-bell fa-large"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
const load_page = (e, page) => {
  e.preventDefault();
  ReactDOM.render(page, document.getElementById('index'));
}

const show_profile = (e) => {
  e.preventDefault();
  var modalInstance = document.querySelector('#profile-modal');
  var modal = bootstrap.Modal.getOrCreateInstance(modalInstance);
  modal.show();
}

export default Navbar;