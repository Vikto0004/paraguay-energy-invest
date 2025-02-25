const ctx = document.getElementById("investmentChart").getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(75, 192, 192, 0.5)");
gradient.addColorStop(1, "rgba(75, 192, 192, 0)");

const gradientProjects = ctx.createLinearGradient(0, 0, 0, 400);
gradientProjects.addColorStop(0, "rgba(255, 159, 64, 0.5)");
gradientProjects.addColorStop(1, "rgba(255, 159, 64, 0)");

const data = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Инвестиции в Revolut и Торговля (миллионы $)",
      data: [50, 70, 120, 150, 180, 210],
      backgroundColor: gradient,
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
    },
    {
      label: "Число Трейдеров и Инвесторов на Платформе Revolut",
      data: [5, 8, 12, 18, 24, 30],
      backgroundColor: gradientProjects,
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(255, 205, 86, 1)",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
    },
  ],
};

new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(200, 200, 200, 0.3)" },
        ticks: { color: "#333" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(200, 200, 200, 0.3)" },
        ticks: { color: "#333" },
      },
    },
  },
});
