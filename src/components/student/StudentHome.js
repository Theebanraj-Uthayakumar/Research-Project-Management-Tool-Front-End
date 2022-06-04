import StudentHome01 from "./Home/StudentHome01";
import Slider from "./Home/Slider";
import Life from "./Home/Life";

function StudentHome() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Slider />
      <StudentHome01 />
      <Life />
    </div>
  );
}

export default StudentHome;
