import { StaffSearchField, SupervisorSearchField } from '../components/form/NameSearchField';
import { CaseNumberSearchField } from '../components/form/CaseNumberSearchField';
import { SelectField } from '../components/form/SelectField';

//import { AutoFillForm } from '../utils/FormFunctions';

import ProfileModal from '../components/ui/ProfileModal';
import Loader from '../components/ui/Loader';

import Home from '../apps/Home/index';
import AdminDashboard from '../apps/Admin/dashboard';
import StaffForm from '../apps/Staff Management/index';
import EvaluationForm from '../apps/Evaluations/index';
import AcknowledgementForm from '../apps/Acknowledgements/index';

import PleaForm from './Pleas/RequestApproval';
import ViewPleaModal from './Pleas/ViewPleaModal';
import PleaDashboard from './Pleas/Dashboard';

import NolleForm from './Nolles/RequestApproval';
import ViewNolleModal from './Nolles/ViewNolleModal';
import NolleDashboard from './Nolles/Dashboard';

import WarrantForm from '../apps/Warrants/index';
import MyDashboard from "./My Dashboard/index";

import GiglioForm from '../apps/Giglio/index';

import NewCaseForm from '../apps/bridge/NewCase';


import EvaluationJSON from "../components/form/forms/evaluations";
import GiglioJSON from "../components/form/forms/giglio";
import NolleJSON from "../components/form/forms/nolle";
import PleaJSON from "../components/form/forms/plea";
import StaffManagementJSON from "../components/form/forms/staff_management";

export { StaffSearchField, SupervisorSearchField, CaseNumberSearchField, SelectField }
//export { AutoFillForm }
export { ProfileModal, Loader }
export { Home, AdminDashboard, StaffForm, EvaluationForm, AcknowledgementForm, PleaForm, ViewPleaModal, PleaDashboard, NolleForm, ViewNolleModal, NolleDashboard, WarrantForm, MyDashboard, NewCaseForm, GiglioForm }

export { EvaluationJSON, GiglioJSON, NolleJSON, PleaJSON, StaffManagementJSON }