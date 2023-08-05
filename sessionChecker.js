'use client'
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export const useSessionStorage = () => {
  const router = useRouter();
  const isLandingPage = router.pathname === '/landing_page';

  // Check for session variables
  const userEmailFromSession = typeof window !== 'undefined' ? sessionStorage.getItem('userEmail') : null;
  const userUsernameFromSession = typeof window !== 'undefined' ? sessionStorage.getItem('userUsername') : null;

  // Redirect the user back to the landing page and clear all session variables if email does not exist
  if (!userEmailFromSession && !userUsernameFromSession && !isLandingPage) {
    // sessionStorage.clear();
    typeof window !== 'undefined' ? sessionStorage.clear() : null;
    router.push('/landing_page');
    return null;// Render nothing else on this page
  }

  //if user is logged in
  if (userEmailFromSession && userUsernameFromSession) {
    return true;
  }
};
