'use client';

import { useEffect, useState } from "react";
import { useAuth, useSession } from "@clerk/nextjs";

const Dashboard = () => {
  const { session } = useSession();
  const { signOut } = useAuth();

  const [oneYearToken, setOneYearToken] = useState<string>('');

  useEffect(() => {
    if (!session) {
      window.location.href = "/sign-in"; // Redirect to the sign-in page if not signed in
    }
  }, [session]);

  const handleGetOneYearToken = async () => {
    try {
      const token = await window.Clerk.session.getToken({ template: 'testing-template' });
      setOneYearToken(token || '');
    } catch (err) {
      console.error("Error getting token with template:", err);
    }
  };

  const handleLogout = () => {
    signOut();
    window.location.href = "/"; // Redirect to home after logout
  };

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {session.user?.firstName || "User"}</h2>

      <button onClick={handleGetOneYearToken} style={{ marginBottom: "1rem" }}>
        Get 1 Year Token
      </button>
      
      <div style={{ marginTop: "1rem" }}>
        <label>1 Year Token:</label>
        <input 
          type="text" 
          value={oneYearToken} 
          readOnly 
          style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.5rem",
            color: "#000", // Improved text color for better visibility
            backgroundColor: "#f9f9f9", // Light background for better contrast
            border: "1px solid #ccc",
          }} 
        />
      </div>

      <br />
      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>Logout</button>
    </div>
  );
};

export default Dashboard;
