# Environment Setup
Before starting the project, please make sure local node.js has been installed.

```bash
node -v
```

Run below code after you check out the project.
```bash
npm install
```

After installed, run below code to build the project.
```bash
npm run build
```

To start the project, run below code.
```bash
npm start
```

The default port number for this project is [9900], and you can update this in [webpack.config.js]
```bash
devServer: {
  contentBase: './build',
  historyApiFallback: true,
  hot: true,
  port: 9900,
  ...
```
