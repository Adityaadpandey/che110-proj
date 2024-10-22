import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sdgs from '../sdgs.json';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

// Registering chart elements with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const SDGPage = () => {
  const { slug } = useParams();
  const [sdg, setSdg] = useState(null);

  useEffect(() => {
    const selectedSDG = sdgs.find((sdg) => sdg.slug === slug);
    setSdg(selectedSDG);
  }, [slug]);

  if (!sdg) return <p className="text-center text-xl font-semibold text-gray-100">Loading...</p>;

  // Prepare chart data
  const chartData = (data) => ({
    labels: data.years || data.regions,
    datasets: [
      {
        label: data.title,
        data: data.values,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#1E3A8A'); // Indigo
          gradient.addColorStop(1, '#F59E0B'); // Yellow
          return gradient;
        },
        borderColor: '#F59E0B',
        borderWidth: 2,
        borderRadius: 10,
        hoverBorderWidth: 3,
      },
    ],
  });

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gradient  to-pink-500 hover:animate-pulse">
        {sdg.title}
      </h1>

      {/* Side-by-side layout for image and description */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
        <img
          src={sdg.image}
          alt={sdg.title}
          className="w-100 md:w-1/3 h-auto m-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300 flex-1">
          <p className="text-lg leading-relaxed">
            {sdg.description}
          </p>
        </div>
      </div>

      {/* Government Initiatives Section */}
      {sdg.government_initiatives && sdg.government_initiatives.length > 0 && (
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 hover:text-green-400 transition-colors duration-300">
            Government Initiatives
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {sdg.government_initiatives.map((initiative, index) => (
              <li
                key={index}
                className="text-lg text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                {initiative}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Charts Section */}
      {sdg.charts && sdg.charts.length > 0 && (
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 hover:text-blue-400 transition-colors duration-300">
            Charts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdg.charts.map((chart, index) => (
              <div key={index} className="my-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-500 hover:text-yellow-400 transition-colors duration-300">
                  {chart.title}
                </h3>

                {/* Conditionally render Line or Bar chart based on type */}
                {chart.title.includes('Rate') ? (
                  <Bar
                    data={chartData(chart.data)}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            color: '#E5E7EB',
                            font: { size: 14 },
                          },
                        },
                        tooltip: {
                          callbacks: {
                            label: function (tooltipItem) {
                              return `${tooltipItem.raw}%`; // Custom tooltip to show percentage
                            },
                          },
                          backgroundColor: '#1E3A8A',
                          titleFont: { size: 14, color: '#F59E0B' },
                          bodyFont: { size: 12, color: '#F59E0B' },
                          cornerRadius: 6,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            color: '#E5E7EB',
                          },
                          grid: {
                            color: '#4B5563',
                          },
                        },
                        x: {
                          ticks: {
                            color: '#E5E7EB',
                          },
                          grid: {
                            color: '#4B5563',
                          },
                        },
                      },
                    }}
                  />
                ) : (
                  <Bar
                    data={chartData(chart.data)}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            color: '#E5E7EB',
                            font: { size: 14 },
                          },
                        },
                        tooltip: {
                          callbacks: {
                            label: function (tooltipItem) {
                              return `${tooltipItem.raw}`; // Custom tooltip to show values
                            },
                          },
                          backgroundColor: '#10B981',
                          titleFont: { size: 14, color: '#F59E0B' },
                          bodyFont: { size: 12, color: '#F59E0B' },
                          cornerRadius: 6,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            color: '#E5E7EB',
                          },
                          grid: {
                            color: '#4B5563',
                          },
                        },
                        x: {
                          ticks: {
                            color: '#E5E7EB',
                          },
                          grid: {
                            color: '#4B5563',
                          },
                        },
                      },
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Individual Actions Section */}
      {sdg.individual_actions && sdg.individual_actions.length > 0 && (
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 hover:text-green-400 transition-colors duration-300">
            What We Can Do
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {sdg.individual_actions.map((action, index) => (
              <li
                key={index}
                className="text-lg text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                {action}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Global Initiatives Section */}
      {sdg.global_initiatives && sdg.global_initiatives.length > 0 && (
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 hover:text-yellow-400 transition-colors duration-300">
            Global Initiatives
          </h2>
          <div className="space-y-4">
            {sdg.global_initiatives.map((initiative, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {initiative.organization}
                </h3>
                <p className="text-lg text-gray-300">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {sdg.solutions && sdg.solutions.length > 0 && (
        <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4 hover:text-blue-400 transition-colors duration-300">
            Solutions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {sdg.solutions.map((solution, index) => (
              <li
                key={index}
                className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {solution}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default SDGPage;
