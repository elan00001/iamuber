


const config = {
  LOG_LEVEL: process.env.LOG_LEVEL ?? "debug",
  PORT: Number(process.env.PORT) || 3000,
  ENV: process.env.NODE_ENV || "development",
};


export default config;
