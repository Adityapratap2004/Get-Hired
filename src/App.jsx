import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Job from './pages/Job';
import JobListing from './pages/JobListing';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import NotFound from './pages/NotFound'; 
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/ThemeProvide';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<LandingPage />} />
            <Route 
              path="onboarding" 
              element={
                <ProtectedRoute>
                  <Onboarding />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="jobs" 
              element={
                <ProtectedRoute>
                  <JobListing />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="job/:id" 
              element={
                <ProtectedRoute>
                  <Job />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="post-job" 
              element={
                <ProtectedRoute>
                  <PostJobs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="saved-jobs" 
              element={
                <ProtectedRoute>
                  <SavedJobs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="my-jobs" 
              element={
                <ProtectedRoute>
                  <MyJobs />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
