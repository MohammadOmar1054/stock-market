const chart = LightweightCharts.createChart(
  document.getElementById("chart"),
  {
    layout: {
      background: { color: "#0e1117" },
      textColor: "white",
    },
    grid: {
      vertLines: { color: "#222" },
      horzLines: { color: "#222" },
    },
  }
);

const candleSeries = chart.addCandlestickSeries({
  upColor: '#26a69a',
  downColor: '#ef5350',
  borderVisible: false,
  wickUpColor: '#26a69a',
  wickDownColor: '#ef5350',
});

async function loadStock() {
  const symbol = document.getElementById("symbol").value || "AAPL";
  const res = await fetch(`/api/stock/${symbol}`);
  const data = await res.json();
  candleSeries.setData(data);
}
