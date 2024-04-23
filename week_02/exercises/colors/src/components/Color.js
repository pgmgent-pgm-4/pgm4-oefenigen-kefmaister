import React, { useState } from "react";

export default function Color({ color }) {
  return <div style={{ backgroundColor: color }}>{color}</div>;
}
