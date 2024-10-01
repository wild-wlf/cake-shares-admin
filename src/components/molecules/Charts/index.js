import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { GraphHeader, StyledGraph } from './Graph.styles';
import { size } from 'polished';

function Graph({ graphData, tooltipBg, title, amount, graphLineColor, sm, timeFrame }) {
  const options = {
    chart: {
      type: 'spline',
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
        },
        marker: {
          enabled: false,
        },
        lineWidth: 2,
      },
    },
    series: [
      {
        name: '',
        data: graphData,
        yAxis: 0,
        color: graphLineColor,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            // Your responsive chart options here
          },
        },
      ],
    },
  };

  return (
    <StyledGraph sm={sm}>
      <div className="blur">No Data</div>
      <GraphHeader bg={tooltipBg} sm={sm}>
        <div className="Head">
          <strong>{title}</strong>
          <span>{amount}</span>
        </div>
      </GraphHeader>
      {graphData ? (
        <>
          <HighchartsReact highcharts={Highcharts} options={options} />

          {timeFrame === 'steps' ? (
            <div className="label">
              <span>Step 1</span>
              <span>Step 30</span>
            </div>
          ) : timeFrame === 'day' ? (
            <div className="label">
              <span>12:01 - 03:01</span>
              <span>03:01 - 06:01</span>
              <span>06:01 - 09:01</span>
              <span>09:01 - 12:01</span>
            </div>
          ) : timeFrame === 'week' ? (
            <div className="label">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          ) : timeFrame === 'month' ? (
            <div className="label">
              <span>Week 01</span>
              <span>Week 02</span>
              <span>Week 03</span>
              <span>Week 04</span>
            </div>
          ) : (
            timeFrame === 'year' && (
              <div className="label">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nev</span>
                <span>Dec</span>
              </div>
            )
          )}
        </>
      ) : (
        <div className="no-data">{/* <span>No Data</span> */}</div>
      )}
    </StyledGraph>
  );
}

export default Graph;
