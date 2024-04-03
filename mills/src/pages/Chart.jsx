// MillChart.jsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useMillContext } from "../contexts/millsContext";

const MillChart = () => {
    const { mills } = useMillContext();
    const chartRef = useRef(null);

    useEffect(() => {
        const millTypes = {};
        mills.forEach((mill) => {
            millTypes[mill.type] = millTypes[mill.type] ? millTypes[mill.type] + 1 : 1;
        });

        const chartData = {
            labels: Object.keys(millTypes),
            datasets: [
                {
                    label: "Mills by Type",
                    data: Object.values(millTypes),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        const ctx = chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: chartData,
            options: chartOptions,
        });
    }, [mills]);

    return <canvas ref={chartRef} />;
};

export default MillChart;
