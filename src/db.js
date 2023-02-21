const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'login',
    password: 'prajwal',
    port: 5432
})

const checkConn = () => {
    return new Promise((resolve, reject) => {
        try {
            pool.connect().then(() => {
                console.log("Database connected!!");
                return resolve;
            })
            
        } catch (error) {
            console.log(`error ${error}`);
             return reject(error)
            
        }
    })
}

module.exports = 
{   pool,
    checkConn
};
