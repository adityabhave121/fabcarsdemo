// module.exports = {
//   rules: [
//     {
//       test: /\.less$/,
//       use: [
//         {
//           loader: "style-loader",
//         },
//         {
//           loader: "css-loader", // translates CSS into CommonJS
//         },
//         {
//           loader: "less-loader", // compiles Less to CSS
//           options: {
//             lessOptions: {
//               // If you are using less-loader@5 please spread the lessOptions to options directly
//               modifyVars: {
//                 "primary-color": "#1DA57A",
//                 "link-color": "#1DA57A",
//                 "border-radius-base": "2px",
//               },
//               javascriptEnabled: true,
//             },
//           },
//         },
//       ],
//       // ...other rules
//     },
//   ],
//   // ...other config
// };

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#ff8201",
              "@link-color": "#ff8201",
              "@processing-color": "#ff8201",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
