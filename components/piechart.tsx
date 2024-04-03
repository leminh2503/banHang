import React from "react";
import { StyleSheet, View, processColor } from "react-native";
import { LineChart } from "react-native-charts-wrapper";

const RevenueChart = () => {
  // Dữ liệu doanh thu, lợi nhuận và chi phí
  const data = {
    dataSets: [
      {
        label: "Doanh thu",
        values: [
          { x: 0, y: 1000 },
          { x: 1, y: 1200 },
          { x: 2, y: 1400 },
          // Thêm dữ liệu cho doanh thu
        ],
        config: {
          color: processColor("blue"), // Màu của dòng biểu đồ doanh thu
        },
      },
      {
        label: "Lợi nhuận",
        values: [
          { x: 0, y: 800 },
          { x: 1, y: 1000 },
          { x: 2, y: 1200 },
          // Thêm dữ liệu cho lợi nhuận
        ],
        config: {
          color: processColor("green"), // Màu của dòng biểu đồ lợi nhuận
        },
      },
      {
        label: "Chi phí",
        values: [
          { x: 0, y: 600 },
          { x: 1, y: 800 },
          { x: 2, y: 1000 },
          // Thêm dữ liệu cho chi phí
        ],
        config: {
          color: processColor("red"), // Màu của dòng biểu đồ chi phí
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={data}
        chartDescription={{ text: "" }}
        legend={{ enabled: true }}
        xAxis={{ drawGridLines: false, position: "BOTTOM" }}
        yAxis={{ left: { drawGridLines: false } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  chart: {
    flex: 1,
  },
});

export default RevenueChart;
