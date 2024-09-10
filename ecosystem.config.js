module.exports = {
  apps: [
    {
      name: "backend-server",
      script: "backend/server.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
