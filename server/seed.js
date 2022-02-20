require('dotenv').config()
const { CONNECTION_STRING } = process.env
const req = require('express/lib/request');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl : {
            rejectUnauthorized: false
        }
    }
 })

 module.exports = {
     seed: (req, res) => {
         sequelize.query(`
         
         drop table if exists applicants;       
         create table applicants (
             applicant_id serial primary key,
             first_name varchar(100), 
             last_name varchar(100),
             address varchar(100),
             city varchar(100),
             state varchar(25),
             zip_code integer, 
             phone integer
         );
         `).then(() => {
             console.log('DB seeded!')
            res.sendStatus(200) 
         }).catch(err => console.log('Error seeding DB', err))
     }
 }

 