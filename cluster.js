const cluster = require("cluster")
const os = require("os")
require("dotenv").config()

const numOfCPUs= os.availableParallelism()
// console.log(numOfCPUs)
if(cluster.isPrimary){

    for(let i = 0; i < numOfCPUs; i++){
        cluster.fork({PORT: process.env.PORT + i})
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });

}else{
    require("./index")
}
