import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { GraphHeader, StyledGraph, ChartContainer } from "./PieStyles";

function PieCharts({
  graphData,
  tooltipBg,
  title,
  amount,
  graphLineColor,
  timeFrame,
}) {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        borderWidth: 2,
        cursor: "pointer",
        innerSize: "40%",
        animation: {
          duration: 1000,
        },
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b><br>{point.percentage:.1f}%",
          distance: 20,
        },
        borderRadius: 10,
      },
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        data: graphData,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <StyledGraph>
      <GraphHeader bg={tooltipBg}>
        <div className="head">
          <strong>{title}</strong>
          <span>{amount}</span>
        </div>
      </GraphHeader>
      <ChartContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </ChartContainer>
    </StyledGraph>
  );
}

export default PieCharts;
