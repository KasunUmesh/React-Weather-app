import Chart from "chart.js/auto"
import { useEffect, useRef } from "react"

function WeatherChart() {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if(chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: "Daily Weather",
                        data: [64, 34, 65, 34, 56, 40, 56],
                        fill: false,
                        borderColor: 'rgb(69, 129, 197)',
                        borderWidth:2
                    }
                ]
            },
            options: {maintainAspectRatio: false},
        })
        return () => {
            if(chartInstance.current) {
                chartInstance.current.destroy();
            }
        }

    }, []);

  return (
    <div className="mt-4 bg-[#ffffffbf] shadow rounded-md p-4 overflow-hidden mb-6 w-[960px] m-3 z-20 ">
        <p className="font-medium text-[1.125rem] text-[#727E8E]">Weather Chart</p>
        <div className="flex justify-between overflow-x-auto last:mr-0 ">

            <canvas ref={chartRef} className="h-72"/>

        </div>
    </div>
  )
}

export default WeatherChart