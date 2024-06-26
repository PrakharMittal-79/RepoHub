import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Chart from "chart.js/auto";
const CommitHistory = ({ props }) => {
  const location = useLocation();
  const { name, full_name } = location.state.props.data;
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${full_name}/commits`
        );
        setCommits(response.data);
        renderChart(response.data);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchCommits();
  }, [name]);

  const renderChart = (commitsData) => {
    const ctx = document.getElementById("commitChart");
    const commitDates = commitsData.map((data) =>
      new Date(data.commit.author.date).toLocaleDateString()
    );
    const commitCounts = Array.from({ length: 12 }, (_, monthIndex) => {
      const month = new Date();
      month.setMonth(new Date().getMonth() - monthIndex);
      return commitsData.filter(
        (data) =>
          new Date(data.commit.author.date).getMonth() === month.getMonth()
      ).length;
    }).reverse();

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: commitDates,
        datasets: [
          {
            label: "Commits",
            data: commitCounts,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Commit History for {name}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
        <canvas id="commitChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default CommitHistory;
