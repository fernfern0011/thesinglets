'use client'
import { useState, useEffect } from 'react';
import {useSessionStorage} from '../../sessionChecker';
import React from "react";

export const About = () => {
  const isLoggedIn = useSessionStorage();
  console.log(isLoggedIn);

  if(!isLoggedIn){
    return null;
  }

  else{
    return (
      <div>About</div>
    );
  }
}

export default About