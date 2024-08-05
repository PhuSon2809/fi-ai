import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip
} from 'chart.js'
import { memo, useMemo } from 'react'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useAppSelector } from '~/redux/configStore'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  Legend,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

const RealHoursChart = memo(() => {
  const { homeReportCurrent } = useAppSelector((s) => s.report)

  const data = useMemo(() => homeReportCurrent?.hourlyVisitors, [homeReportCurrent])

  const datasetData = useMemo(() => Array.from({ length: 10 }).map((_, index) => data?.[`${index + 1}`]), [data])

  return (
    <div className='w-[424px] h-[176px] p-3 bg-ln-blue-pink rounded-2xl shadow-s-5'>
      <p className='text-[18px]/[18px] font-customMedium mt-1 ml-1'>Real Hours</p>

      <div className='h-[135px]'>
        <Chart
          type='bar'
          data={{
            labels: ['11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h'],
            datasets: [
              {
                type: 'bar',
                label: 'Bar Dataset',
                data: datasetData,
                backgroundColor: (ctx: any) => {
                  const chart = ctx.chart
                  const { ctx: canvasCtx, chartArea } = chart
                  if (!chartArea) return null
                  const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                  gradient.addColorStop(0, 'rgba(252, 252, 253, 0)')
                  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.44)')
                  return gradient
                },
                hoverBackgroundColor: (ctx: any) => {
                  const chart = ctx.chart
                  const { ctx: canvasCtx, chartArea } = chart
                  if (!chartArea) return null
                  const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                  gradient.addColorStop(0, 'rgba(252, 252, 253, 0)')
                  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.44)')
                  return gradient
                },
                borderWidth: 0,
                borderRadius: 4
              },
              {
                type: 'line',
                label: 'Line Dataset',
                data: datasetData,
                fill: false,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4,
                borderWidth: 3,
                borderColor: (ctx: any) => {
                  const chart = ctx.chart
                  const { ctx: canvasCtx, chartArea } = chart
                  if (!chartArea) return null
                  const gradient = canvasCtx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)
                  gradient.addColorStop(0, '#31D366')
                  gradient.addColorStop(1, '#5495FC')
                  return gradient
                }
              }
            ]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, datalabels: { display: false } },
            scales: {
              x: {
                display: true,
                grid: { display: false },
                ticks: { display: true, font: { size: 14 }, color: '#0D0D0D' },
                border: { display: true, color: '#000' }
              },
              y: { display: false }
            }
          }}
        />
      </div>
    </div>
  )
})

export default RealHoursChart
