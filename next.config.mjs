// next.config.js

export default  {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      });
  
      return config;
    },
  };
  