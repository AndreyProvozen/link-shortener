import getRandomColor from './getRandomColor';

interface DatasetsProps {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

interface PieChartData {
  labels: string[];
  datasets: DatasetsProps[];
}

/**
 * Generates pie chart data based on a list of values and labels.
 *
 * This function takes a list of values and labels, then generates the necessary data
 * structure for rendering a pie chart. It randomly assigns colors to the data points
 * and creates appropriate dataset structures for the chart.
 *
 * @example
 * ```typescript
 * const data = {
 *   'Browsers': 120,
 *   'Devices': 90,
 *   'Languages': 70,
 *   // ...
 * };
 * const pieChartData = getPieChartData(data);
 * ```
 *
 * @param {Record<string, number>} list - The list of values with corresponding labels.
 * @returns {Object} - An object containing data structures for rendering a pie chart.
 */

const getPieChartData = (list: Record<string, number>): PieChartData => {
  const pieData: PieChartData = {
    labels: [],
    datasets: [{ label: 'Clicked', data: [], backgroundColor: [], borderColor: [], borderWidth: 1 }],
  };

  Object.entries(list).forEach(([label, value]) => {
    const { color, colorWithOpacity } = getRandomColor(0.4);

    pieData.labels.push(label);
    pieData.datasets[0].data.push(value);
    pieData.datasets[0].backgroundColor.push(colorWithOpacity);
    pieData.datasets[0].borderColor.push(color);
  });

  return pieData;
};

export default getPieChartData;
