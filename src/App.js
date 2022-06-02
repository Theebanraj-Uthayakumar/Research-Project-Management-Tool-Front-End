import { Routes, BrowserRouter, Route } from "react-router-dom";
import FileUpload from "./components/admin/FileUpload";
import AdminHome from "./components/admin/AdminHome";
import AddTemplate from "./components/admin/templates/AddTemplate";
import ViewTemplates from "./components/admin/templates/ViewTemplates";
import ViewTemplateAdmin from "./components/admin/templates/ViewTemplatesAdmin";
import UpdateTemplate from "./components/admin/templates/UpdateTemplate";
import RegisterStudent from "./components/admin/Users/Student/RegisterStudent";
import ViewStudents from "./components/admin/Users/Student/ViewStudents";
import ViewStaff from "./components/admin/Users/Staff/ViewStaff";
import RegisterStaff from "./components/admin/Users/Staff/RegisterStaff";
import Login from "./components/Login";
import SupervisorHome from "./components/SupervisorHome";
import StudentHome from "./components/student/StudentHome";
import Footer from "./components/footer/Footer";
import UpdateStaff from "./components/admin/Users/Staff/UpdateStaff";
import UpdateStudent from "./components/admin/Users/Student/UpdateStudent";
import AddAdmin from "./components/admin/AddAdmin";
import PanelMemberHome from "./components/PanelMemberHome";
import TopicRegister from "./components/Supervisor/TopicicRegister";
import TopicView from "./components/Supervisor/TopicView";
import TopicStatus from "./components/Supervisor/TopicStatus";
import SupervisorHome from "./components/SupervisorHome";
import AddResearch from "./components/student/AddResearch";
import ViewResearch from "./components/student/ViewResearch";
import EditResearch from "./components/student/EditResearch";
import AddGroup from "./components/student/AddGroup";
import ViewGroup from "./components/student/ViewGroup";
import EditGroup from "./components/student/EditGroup";


export function App() {
  return (
    <div>
      <style>{"body { background-color: #f1f3f0; }"}</style>
      <BrowserRouter>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/templates/add" element={<FileUpload />}></Route>
          <Route path="/admin-home" element={<AdminHome />}></Route>
          <Route path="/addTemplate" element={<AddTemplate />}></Route>
          <Route path="/viewTemplates" element={<ViewTemplates />}></Route>
          <Route
            path="/admin/templates"
            element={<ViewTemplateAdmin />}
          ></Route>
          <Route
            path="admin/templates/update/:id"
            element={<UpdateTemplate />}
          ></Route>
          <Route path="/registerStudent" element={<RegisterStudent />}></Route>
          <Route path="/registerStaff" element={<RegisterStaff />}></Route>
          <Route path="/admin/students" element={<ViewStudents />}></Route>
          <Route
            path="admin/staff/update/:id"
            element={<UpdateStaff />}
          ></Route>
          <Route
            path="admin/students/update/:id"
            element={<UpdateStudent />}
          ></Route>
          <Route path="/admin/staff" element={<ViewStaff />}></Route>
          <Route path="/supervisor" element={<SupervisorHome />}></Route>
          <Route path="/student" element={<StudentHome />}></Route>
          <Route path="/addAdmin" element={<AddAdmin />}></Route>
          <Route path="/panelMember" element={<PanelMemberHome />}></Route>

          <Route path="/topicRegister" element={<TopicRegister />}></Route>
          <Route path="/topicView" element={<TopicView />}></Route>
          <Route path="/status" element={<TopicStatus />}></Route>/
          <Route path="/supervisorHome" element={<SupervisorHome />}></Route>


          <Route path="/student/addResearch" element={<AddResearch />}></Route>
          <Route path="/student/viewResearch" element={<ViewResearch />}></Route>
          <Route path="/student/viewResearch/update/:id" element={<EditResearch />}></Route>
          <Route path="/student/addGroup" element={<AddGroup />}></Route>
          <Route path="/student/viewGroup" element={<ViewGroup />}></Route>
          <Route path="/student/viewGroup/update/:id" element={<EditGroup />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
