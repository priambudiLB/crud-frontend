import Chart from "react-apexcharts";

function App() {
  const options = {
    chart: {
      height: 350,
      type: "rangeBar",
      events: {
        dataPointSelection: function (event, chartContext, config) {
          console.log(event, chartContext, config)
          console.log(event.target.dataset.rangeY1)
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: 'mm:ss:fff',
      }
    },
    tooltip: {
      custom: function ({ dataPointIndex, w }) {
        const itemCountMap = w.globals.initialSeries[0].data.reduce(function (r, e) {
          r[e.x + e.y[0]] = (r[e.x + e.y[0]] || 0) + 1
          return r;
        }, {})
        return '<div>' +
          '<span>Total: ' + itemCountMap[w.globals.initialSeries[0].data[dataPointIndex].x + w.globals.initialSeries[0].data[dataPointIndex].y[0]] + '</span>' +
          '</div>'
      },
      x: {
        show: false,
        format: 'mm:ss:fff',
        formatter: undefined,
      },
      y: {
        show: false,
        formatter: undefined,
        format: 'mm:ss:fff',
      },
    }
  };
  const series = [
    {
      data: [
        {
          "x": "RBC",
          "y": [
            0,
            800
          ],
          "rangeName": "dewpldd"
        },
        {
          "x": "RBC",
          "y": [
            0,
            800
          ],
          "rangeName": "msqdpwqg"
        },
        {
          "x": "RBC",
          "y": [
            0,
            800
          ],
          "rangeName": "mfnqjjin"
        },
        {
          "x": "RBC",
          "y": [
            0,
            800
          ],
          "rangeName": "6yrmwxol"
        },
        {
          "x": "RBC",
          "y": [
            0,
            800
          ],
          "rangeName": "avtexhxg"
        },
        {
          "x": "RBC",
          "y": [
            800,
            1600
          ],
          "rangeName": "knmzaife"
        },
        {
          "x": "RBC",
          "y": [
            800,
            1600
          ],
          "rangeName": "37atpwbzk"
        },
        {
          "x": "RBC",
          "y": [
            800,
            1600
          ],
          "rangeName": "tapdwlbv"
        },
        {
          "x": "RBC",
          "y": [
            800,
            1600
          ],
          "rangeName": "iw3df661"
        },
        {
          "x": "RBC",
          "y": [
            800,
            1600
          ],
          "rangeName": "cj0vjlq8"
        },
        {
          "x": "RBC",
          "y": [
            1600,
            2400
          ],
          "rangeName": "zyb4prra"
        },
        {
          "x": "RBC",
          "y": [
            1600,
            2400
          ],
          "rangeName": "jx554gmv"
        },
        {
          "x": "RBC",
          "y": [
            1600,
            2400
          ],
          "rangeName": "1t4mzpek"
        },
        {
          "x": "RBC",
          "y": [
            1600,
            2400
          ],
          "rangeName": "0dh3odav"
        },
        {
          "x": "RBC",
          "y": [
            1600,
            2400
          ],
          "rangeName": "6h6pn9vq"
        },
        {
          "x": "RBC",
          "y": [
            2400,
            3200
          ],
          "rangeName": "l205eapn"
        },
        {
          "x": "RBC",
          "y": [
            2400,
            3200
          ],
          "rangeName": "vfdg6vnv"
        },
        {
          "x": "RBC",
          "y": [
            2400,
            3200
          ],
          "rangeName": "e84g4cmy"
        },
        {
          "x": "RBC",
          "y": [
            2400,
            3200
          ],
          "rangeName": "zicwnl4zh"
        },
        {
          "x": "RBC",
          "y": [
            2400,
            3200
          ],
          "rangeName": "f1jtcm0n"
        },
        {
          "x": "RBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "pk7ic19d"
        },
        {
          "x": "RBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "rapnh54g"
        },
        {
          "x": "RBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "6udn7pgd"
        },
        {
          "x": "RBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "2ye9asyp"
        },
        {
          "x": "RBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "7r460dmi"
        },
        {
          "x": "WBC",
          "y": [
            3200,
            4000
          ],
          "rangeName": "j0njvmmj"
        },
        {
          "x": "RBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "8gjyixqt"
        },
        {
          "x": "RBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "a4g0pdv8"
        },
        {
          "x": "RBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "372ajknk"
        },
        {
          "x": "RBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "w3p3wlc7"
        },
        {
          "x": "RBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "rtgz097k"
        },
        {
          "x": "WBC",
          "y": [
            4000,
            4800
          ],
          "rangeName": "iqggw5nf"
        },
        {
          "x": "RBC",
          "y": [
            4800,
            5600
          ],
          "rangeName": "9xxnpvra"
        },
        {
          "x": "RBC",
          "y": [
            4800,
            5600
          ],
          "rangeName": "mmbw3bbn"
        },
        {
          "x": "RBC",
          "y": [
            4800,
            5600
          ],
          "rangeName": "7jtknsys"
        },
        {
          "x": "RBC",
          "y": [
            4800,
            5600
          ],
          "rangeName": "p077q2jq"
        },
        {
          "x": "RBC",
          "y": [
            4800,
            5600
          ],
          "rangeName": "mfmpciin"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "6wcphry8"
        },
        {
          "x": "WBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "ow8558c1"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "hq3rpvjz"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "r9mdnrqj"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "rh46azkwh"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "2247jwjx"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "my83eqyag"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "tvbn6nvg"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "2vqtilaq"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "ilrb1qslg"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "nzuvloog"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "8t43x3c7"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "tl4v88egj"
        },
        {
          "x": "RBC",
          "y": [
            5600,
            6400
          ],
          "rangeName": "bxdo0e6nj"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "5oopqksr"
        },
        {
          "x": "WBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "qzf4r6te"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "dkohoz85"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "hrjbpjs6k"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "7ne7h4rq"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "tgqae8i9"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "mbe70hwzf"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "nzz55gkc"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "yeavpv4w"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "xtv74j5i"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "bbtyy426k"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "a1k3n6h"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "gb5l5nz5f"
        },
        {
          "x": "RBC",
          "y": [
            6400,
            7200
          ],
          "rangeName": "7qvhm631"
        },
        {
          "x": "RBC",
          "y": [
            7200,
            8000
          ],
          "rangeName": "xv6t8mcc"
        },
        {
          "x": "RBC",
          "y": [
            7200,
            8000
          ],
          "rangeName": "y3u796w7"
        },
        {
          "x": "RBC",
          "y": [
            8000,
            8800
          ],
          "rangeName": "nx3y6twp"
        },
        {
          "x": "WBC",
          "y": [
            8000,
            8800
          ],
          "rangeName": "ojoabojv"
        }
      ],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type={"rangeBar"}
      height={350}
    />
  );
}

export default App;
