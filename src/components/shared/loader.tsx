import React from 'react';

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-progress" />
    </div>
  );
}
