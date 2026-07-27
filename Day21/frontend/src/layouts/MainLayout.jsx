import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";

function MainLayout() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <Sidebar />

        <main className="main">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
