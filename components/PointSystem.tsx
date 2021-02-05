import React from "react";
import { Table } from "antd";
export default function PointSystem() {
  const columns = [
    {
      title: "S1 No",
      dataIndex: "S1No",
      align: "center",
    },
    {
      title: "Event",
      dataIndex: "event",
      align: "center",
    },
    {
      title: "Region",
      dataIndex: "region",
      align: "center",
    },
    {
      title: "Placement Threshold Required for points",
      dataIndex: "thresh",
      align: "center",
    },
    {
      title: "No. of Players Receiving Points",
      dataIndex: "numofplayers",
      align: "center",
    },
    {
      title: "Point System",
      dataIndex: "pointsystem",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      S1No: "1",
      event: "Dreamhack Online Open Grand Finals",
      region: "EU/NAE/NAW",
      thresh: "Top 25",
      numofplayers: "50",
      pointsystem: "50,48,46...",
    },
    {
      key: "2",
      S1No: "2",
      event: "Frosty Frenzy (All 4 sessions)",
      region: "All Regions",
      thresh: "Top 20 - EU/Top15 - all other regions",
      numofplayers: "60/45",
      pointsystem: "40,38,36... / 30,28,26...",
    },
    {
      key: "3",
      S1No: "3",
      event: "Trio Cash Cup",
      region: "All Regions",
      thresh: "Top 20 - EU/Top15 - all other regions",
      numofplayers: "60/45",
      pointsystem: "40,38,36... / 30,28,26...",
    },
    {
      key: "4",
      S1No: "4",
      event: "Solo Cash Cup",
      region: "All Regions",
      thresh: "Top 30",
      numofplayers: "30",
      pointsystem: "30,29,28...",
    },
    {
      key: "5",
      S1No: "5",
      event: "K1ng Duos Cup",
      region: "Brazil",
      thresh: "Top 20",
      numofplayers: "40",
      pointsystem: "40,38,36...",
    },
    {
      key: "6",
      S1No: "6",
      event: "GamersClub Duos",
      region: "Brazil",
      thresh: "Top 20",
      numofplayers: "40",
      pointsystem: "40,38,36...",
    },
    {
      key: "7",
      S1No: "7",
      event: "GamersClub Trios",
      region: "Brazil",
      thresh: "Top 20",
      numofplayers: "40",
      pointsystem: "40,38,36...",
    },
  ];

  return (
    <div id="tableid" style={{ paddingTop: "4em" }}>
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </div>
  );
}
