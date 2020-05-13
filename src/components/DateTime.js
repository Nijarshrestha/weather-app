import React from "react";

export default function DateTime() {
  const date = new Date();
  return (
    <div className="date-time">
      {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
    </div>
  );
}
