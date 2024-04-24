import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" Component={() => <div>Page not found</div>} />
      </Routes>
    </Router>
  )
};
