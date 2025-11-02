import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();

  // Selagi Clerk memeriksa status login, tampilkan pesan loading
  if (!isLoaded) {
    return <div className="text-center p-20">Loading...</div>;
  }

  // Jika sudah diperiksa dan ternyata belum login, lempar ke halaman sign-in
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  // Jika sudah login, izinkan akses ke halaman admin
  return <Outlet />;
}

export default ProtectedRoute;