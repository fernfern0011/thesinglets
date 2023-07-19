import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SecuredPage() {
  const history = useHistory();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const sessionExpired = isSessionExpired();
    
    // Redirect the user back to the landing page and clear all session variables if email does not exist
    if (!userEmail || sessionExpired) {
      // Clear session data and redirect the user back to the landing page
      // localStorage.removeItem('sessionStartTime');
      // localStorage.removeItem('sessionDurationMinutes');
      localStorage.removeItem('userEmail');
      history.push('/landing_page2');
      return null;// Render nothing else on this page
    }
  }, []);

  // Render the secured content if email exists
  return (
    <div>
      <h1>Secured Page</h1>
      <p>Welcome, {userEmail}!</p>
      {/* Change to welcome user email and profile photo*/}
    </div>
  );
}

export default SecuredPage;
