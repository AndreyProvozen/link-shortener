import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import type { FC } from 'react';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';

import type { MetricsProps } from '@/types';
import { getBarChartData, getPieChartData } from '@/utils';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const PIE_OPTIONS = {
  plugins: { legend: { position: 'bottom' as const } },
  options: { parsing: false, normalized: true },
};

const BAR_OPTIONS = {
  responsive: true,
  plugins: { legend: { display: false }, options: { parsing: false, normalized: true } },
};

type Props = { metrics: MetricsProps[] };

const ChartBlock: FC<Props> = ({ metrics }) => {
  const pieChartMetrics = metrics.slice(0, 4);
  const barChartData = getBarChartData(metrics[4].data);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full rounded-lg border border-white-300 p-5 hover:border-pink-500 hover:shadow-lg">
        <p className="text-2xl font-bold mb-5 text-center">{metrics[4].title}</p>
        <Bar options={BAR_OPTIONS} data={barChartData} />
      </div>
      <div className="flex flex-wrap gap-8 tablet-small:flex-col">
        {pieChartMetrics.map(({ title, data }, index) => (
          <div
            className="flex flex-col border w-[calc(50%-1rem)] tablet-small:w-full border-white-300 p-5 rounded-lg hover:border-pink-500 hover:shadow-lg"
            key={title}
          >
            <p className="text-2xl font-bold mb-5 text-center">{title}</p>
            {index > 1 ? (
              <Pie data={getPieChartData(data)} style={{ margin: 'auto' }} options={PIE_OPTIONS} />
            ) : (
              <Doughnut data={getPieChartData(data)} style={{ margin: 'auto' }} options={PIE_OPTIONS} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartBlock;
