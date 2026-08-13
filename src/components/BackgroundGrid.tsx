"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Clean Static Small Grid Overlay */}
      <div className="absolute inset-0 subtle-flat-grid opacity-75" />
    </div>
  );
}
