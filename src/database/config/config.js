require('dotenv').config();

module.exports = {
    server: process.env.SERVER,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.SERVER,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT,
    // dialectOptions: {
    //     options: {
    //       trustServerCertificate: true,
    //       requestTimeout: 300000,
    //       useUTC: false,
    //     },
    //   },
      // logging: (query) => {
      //   // console.log(query);
      // },
      logging: false,
      timezone: '+03:00',
      pool: {
        max: 30,
        min: 0,
        acquire: 60000,
        idle: 10000,
      },
}