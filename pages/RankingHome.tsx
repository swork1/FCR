import React, { useState } from "react";
import PointSystem from "../components/PointSystem.tsx";
import ScrollIntoView from "https://esm.sh/react-scroll-into-view";

export default function RankingHome() {
  return (
    <div>
      <PointSystem />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ScrollIntoView selector="#tableid">
        <button> Click to scroll </button>
      </ScrollIntoView>
    </div>
  );
}
