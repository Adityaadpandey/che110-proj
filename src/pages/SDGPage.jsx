import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sdgs from '../sdgs.json';
import { Bar, Line } from 'react-chartjs-2';
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
    const selectedSDG = sdgs.find(sdg => sdg.slug === slug);
    setSdg(selectedSDG);
  }, [slug]);

  if (!sdg) return <p>Loading...</p>;

  // Prepare chart data
  const chartData = (data) => ({
    labels: data.years || data.regions,
    datasets: [
      {
        label: data.title,
        data: data.values,
        backgroundColor: ['#1E3A8A', '#10B981', '#F59E0B', '#EF4444'], // Custom colors for bars/lines
      }
    ]
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{sdg.title}</h1>
      <img src={sdg.image} alt={sdg.title} className="w-full h-auto mb-6" />
      <p className="mb-4">{sdg.description}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Government Initiatives</h2>
        <ul>
          {sdg.government_initiatives.map((initiative, index) => (
            <li key={index} className="mb-2">
              {initiative}
            </li>
          ))}
        </ul>
      </section>

      {/* Charts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Charts</h2>
        {sdg.charts.map((chart, index) => (
          <div key={index} className="my-4">
            <h3 className="text-xl font-bold mb-2">{chart.title}</h3>

            {/* Conditionally render Line or Bar chart based on type */}
            {chart.title.includes('Rate') ? (
              <Bar
                data={chartData(chart.data)}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                  }
                }}
              />
            ) : (
              <Bar
                data={chartData(chart.data)}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                  }
                }}
              />
            )}
          </div>
        ))}
      </section>

      {/* You can add more sections for individual actions, solutions, etc. */}
      <section className="mb-8">
  <h2 className="text-2xl font-semibold">What We Can Do</h2>
  <ul>
    {sdg.individual_actions.map((action, index) => (
      <li key={index} className="mb-2">{action}</li>
    ))}
  </ul>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-semibold">Solutions</h2>
  <ul>
    {sdg.solutions.map((solution, index) => (
      <li key={index} className="mb-2">{solution}</li>
    ))}
  </ul>
</section>

    </div>
  );
};

export default SDGPage;
