import { useColorScheme } from "@mantine/hooks";
import React from "react";

type MinskyLogotypeProps = {
  scale?: number;
  fillColor?: string;
  typographyColor?: string;
};

export default function MinskyLogotype({
  scale = 0.08,
  typographyColor = "#060607",
  fillColor,
}: MinskyLogotypeProps) {
  // const colorSchema = useColorScheme();
  // console.log("colorSchema", colorSchema);
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // const defaultLettersColor = colorSchema == "dark" ? "white" : "#060607";
  return (
    <svg
      width={1880 * scale}
      height={341 * scale}
      viewBox="0 0 1880 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M291.789 241.947V241.947C291.789 276.035 319.423 303.724 353.511 303.724H365.361C401.397 303.724 430.61 274.511 430.61 238.475V238.475C430.61 202.439 401.397 173.226 365.361 173.226H105.812C68.2703 173.226 37.8368 142.793 37.8368 105.251V105.251C37.8368 67.7094 68.2703 37.2759 105.812 37.2759H275.213C310.15 37.2759 338.473 65.5982 338.473 100.536V100.536"
        stroke={fillColor ?? "#FF7134"}
        strokeWidth="73.7894"
      />
      <path
        d="M667.434 265.645C665.29 265.645 663.36 264.895 661.644 263.394C660.143 261.678 659.393 259.748 659.393 257.604V48.5335C659.393 46.1748 660.143 44.2449 661.644 42.7439C663.36 41.2429 665.29 40.4923 667.434 40.4923H702.172C707.318 40.4923 711.071 42.8511 713.429 47.5686L770.039 148.887L826.649 47.5686C829.008 42.8511 832.76 40.4923 837.907 40.4923H872.323C874.682 40.4923 876.612 41.2429 878.113 42.7439C879.828 44.2449 880.686 46.1748 880.686 48.5335V257.604C880.686 259.963 879.828 261.893 878.113 263.394C876.612 264.895 874.682 265.645 872.323 265.645H834.047C831.688 265.645 829.651 264.895 827.936 263.394C826.435 261.893 825.684 259.963 825.684 257.604V136.986L789.66 204.211C786.872 209.143 783.12 211.608 778.402 211.608H761.677C758.889 211.608 756.637 210.965 754.922 209.679C753.206 208.392 751.705 206.569 750.419 204.211L714.073 136.986V257.604C714.073 259.748 713.322 261.678 711.821 263.394C710.32 264.895 708.39 265.645 706.032 265.645H667.434Z"
        fill={fillColor ?? typographyColor}
      />
      <path
        d="M933.798 265.645C931.653 265.645 929.724 264.895 928.008 263.394C926.507 261.678 925.757 259.748 925.757 257.604V48.5335C925.757 46.1748 926.507 44.2449 928.008 42.7439C929.724 41.2429 931.653 40.4923 933.798 40.4923H976.898C979.257 40.4923 981.187 41.2429 982.688 42.7439C984.404 44.2449 985.261 46.1748 985.261 48.5335V257.604C985.261 259.963 984.404 261.893 982.688 263.394C981.187 264.895 979.257 265.645 976.898 265.645H933.798Z"
        fill={fillColor ?? typographyColor}
      />
      <path
        d="M1038.08 265.645C1035.94 265.645 1034.01 264.895 1032.29 263.394C1030.79 261.678 1030.04 259.748 1030.04 257.604V48.5335C1030.04 46.1748 1030.79 44.2449 1032.29 42.7439C1034.01 41.2429 1035.94 40.4923 1038.08 40.4923H1072.18C1077.54 40.4923 1081.18 42.5294 1083.11 46.6036L1161.59 170.116V48.5335C1161.59 46.1748 1162.34 44.2449 1163.85 42.7439C1165.56 41.2429 1167.49 40.4923 1169.64 40.4923H1208.23C1210.59 40.4923 1212.52 41.2429 1214.02 42.7439C1215.52 44.2449 1216.27 46.1748 1216.27 48.5335V257.282C1216.27 259.641 1215.52 261.678 1214.02 263.394C1212.52 264.895 1210.59 265.645 1208.23 265.645H1173.82C1169.1 265.645 1165.56 263.608 1163.2 259.534L1084.72 140.525V257.604C1084.72 259.748 1083.97 261.678 1082.47 263.394C1080.97 264.895 1079.04 265.645 1076.68 265.645H1038.08Z"
        fill={fillColor ?? typographyColor}
      />
      <path
        d="M1345.17 268.862C1324.8 268.862 1307.33 265.86 1292.75 259.856C1278.16 253.851 1267.12 246.025 1259.62 236.375C1252.33 226.511 1248.47 215.79 1248.04 204.211C1248.04 202.495 1248.68 200.994 1249.97 199.708C1251.47 198.207 1253.18 197.456 1255.11 197.456H1295.64C1298.21 197.456 1300.25 197.992 1301.75 199.064C1303.47 199.922 1305.18 201.316 1306.9 203.246C1309.69 208.821 1314.19 213.431 1320.41 217.076C1326.63 220.722 1334.88 222.544 1345.17 222.544C1357.4 222.544 1366.72 220.615 1373.16 216.755C1379.59 212.895 1382.81 207.642 1382.81 200.994C1382.81 196.277 1381.09 192.417 1377.66 189.415C1374.44 186.413 1369.3 183.732 1362.22 181.374C1355.15 179.015 1344.64 176.335 1330.7 173.333C1304.97 167.972 1285.67 160.145 1272.8 149.852C1260.15 139.345 1253.83 124.442 1253.83 105.143C1253.83 92.0631 1257.47 80.3766 1264.76 70.0839C1272.05 59.7912 1282.45 51.75 1295.96 45.9603C1309.47 40.1707 1325.23 37.2759 1343.24 37.2759C1361.9 37.2759 1378.09 40.4924 1391.81 46.9253C1405.54 53.3582 1415.94 61.5066 1423.01 71.3704C1430.3 81.0199 1434.16 90.562 1434.59 99.997C1434.59 101.927 1433.95 103.535 1432.66 104.822C1431.38 106.108 1429.77 106.752 1427.84 106.752H1385.38C1382.81 106.752 1380.66 106.323 1378.95 105.465C1377.45 104.607 1376.05 103.213 1374.77 101.284C1373.48 96.3517 1369.94 92.1703 1364.15 88.7394C1358.58 85.3085 1351.61 83.593 1343.24 83.593C1333.59 83.593 1326.2 85.3085 1321.05 88.7394C1315.9 92.1703 1313.33 97.2094 1313.33 103.857C1313.33 108.36 1314.72 112.112 1317.51 115.114C1320.51 118.116 1325.23 120.904 1331.66 123.477C1338.31 125.836 1347.75 128.302 1359.97 130.875C1379.91 134.52 1395.78 139.131 1407.57 144.706C1419.58 150.067 1428.37 157.143 1433.95 165.935C1439.52 174.512 1442.31 185.341 1442.31 198.421C1442.31 212.788 1438.13 225.332 1429.77 236.054C1421.62 246.561 1410.15 254.709 1395.35 260.499C1380.77 266.074 1364.04 268.862 1345.17 268.862Z"
        fill={fillColor ?? typographyColor}
      />
      <path
        d="M1482.54 265.645C1480.4 265.645 1478.47 264.895 1476.76 263.394C1475.25 261.678 1474.5 259.748 1474.5 257.604V48.5335C1474.5 46.1748 1475.25 44.2449 1476.76 42.7439C1478.47 41.2429 1480.4 40.4923 1482.54 40.4923H1523.07C1525.43 40.4923 1527.36 41.2429 1528.86 42.7439C1530.36 44.2449 1531.11 46.1748 1531.11 48.5335V119.939L1590.62 46.6036C1593.19 42.5294 1597.37 40.4923 1603.16 40.4923H1649.48C1651.41 40.4923 1653.02 41.2429 1654.3 42.7439C1655.59 44.0305 1656.23 45.5315 1656.23 47.2469C1656.23 48.7479 1655.91 50.0345 1655.27 51.1067L1578.07 148.244L1661.06 255.031C1661.92 255.889 1662.35 257.175 1662.35 258.891C1662.35 260.606 1661.7 262.214 1660.42 263.715C1659.13 265.002 1657.52 265.645 1655.59 265.645H1607.67C1602.52 265.645 1598.23 263.501 1594.8 259.212L1531.11 179.765V257.604C1531.11 259.963 1530.36 261.893 1528.86 263.394C1527.36 264.895 1525.43 265.645 1523.07 265.645H1482.54Z"
        fill={fillColor ?? typographyColor}
      />
      <path
        d="M1753.72 265.645C1751.58 265.645 1749.65 264.895 1747.93 263.394C1746.43 261.678 1745.68 259.748 1745.68 257.604V188.45L1671.06 50.785C1670.41 48.8552 1670.09 47.6758 1670.09 47.2469C1670.09 45.5315 1670.74 44.0305 1672.02 42.7439C1673.52 41.2429 1675.24 40.4923 1677.17 40.4923H1717.37C1721.66 40.4923 1725.42 42.7439 1728.63 47.2469L1774.63 130.232L1820.95 47.2469C1823.52 42.7439 1827.27 40.4923 1832.2 40.4923H1872.41C1874.34 40.4923 1875.95 41.2429 1877.23 42.7439C1878.52 44.0305 1879.16 45.5315 1879.16 47.2469C1879.16 48.3191 1878.95 49.4985 1878.52 50.785L1803.9 188.45V257.604C1803.9 259.963 1803.04 261.893 1801.32 263.394C1799.82 264.895 1797.89 265.645 1795.53 265.645H1753.72Z"
        fill={fillColor ?? typographyColor}
      />
    </svg>
  );
}
