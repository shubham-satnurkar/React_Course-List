import CourseList from "./components/CourseList";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import CourseEnquiry from "./components/CourseEnquiry";
import CourseDetails from "./components/CourseDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/course" element={<CourseList />} />
          <Route path="/enquiry/:id" element={<CourseEnquiry />} />
          <Route path="/details/:id" element={<CourseDetails />} />

          <Route path="*" element={<Navigate to="/course" replace />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
