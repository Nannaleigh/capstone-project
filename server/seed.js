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

 const adoptDogs = [
     {
         id: 1,
         img: "./images/01.jpg",
         name: 'Olivia Chewton John', 
         breed:'German Shepherd',
         sex: 'Female',
         age: 'Puppy',
         size:'Medium',
         personality: 'A cute and cuddly friend waiting for her next great adventure.' ,
     }, 
     {
        id: 2,
        img: "./images/02.jpg",
        name: 'Jabba the Mutt',  
        breed: 'Pit Bull Terrier',
        sex: 'Male',
        age: 'Adult',
        size:'Large',
        personality:'A fun-loving dog who loves to play catch! Great with kids and other pets.' ,
    },
    {
        id: 3,
        img: "./images/03.jpg", 
        name: 'Mary Puppins',
        breed: 'Border Collie' ,
        sex: 'Female',
        age: 'Young' ,
        size: 'Medium',
        personality:'Great with kids or an active couple. Loves hikes, fetch, and staying active!' ,
    },
    {
        id: 4,
        img: "./images/04.jpg", 
        name: 'Bilbo Waggins', 
        breed:'Australian Cattle Dog',
        sex: 'Male',
        age: 'Adult',
        size: 'Large',
        personality: 'Searching for your next best friend? Search no more! Bilbo loves to do anything you do.',
    },
    {
        id: 5,
        img: "./images/05.jpg",
        name: 'Sir Waggington',  
        breed: 'Labrador Retriever',
        sex:'Male' ,
        age: 'Adult' ,
        size: 'Medium',
        personality: 'A proper gentleman for the proper family! Sir Waggington is great with younger kids and other dogs.'
    },
    {
        id: 6,
        img: "./images/06.jpg",
        name: 'Porkchop', 
        breed:'German Shepherd' ,
        sex:'Female' ,
        age: 'Puppy',
        size:'Medium' ,
        personality:'A darling bundle of puppy-fied energy, your hands and heart will be full with Porkchop!'
    },
    {
        id: 7,
        img: "./images/07.jpg", 
        name: 'Sir Licks-a-Lot', 
        breed: 'Labrador Retriever',
        sex:'Male' ,
        age:'Adult',
        size:'Large' ,
        personality:'You will never be without another slobbery kiss again thanks to this lovable oaf.' ,
    },
    {
        id: 8,
        img: "./images/08.jpg", 
        name: 'Pup Tart',
        breed: 'Australian Shepherd' ,
        sex:'Male' ,
        age: 'Young',
        size: 'Medium' ,
        personality: 'Meet your new best friend! Pup Tart is 5 months old and searching for the furever home of her dreams!'
    },
    {
        id: 9,
        img: "./images/09.jpg",
        name: 'Chewbacca', 
        breed:'Labrador Retriever' ,
        sex:'Male' ,
        age:'Young' ,
        size: 'Medium' ,
        personality: 'Chewbacca loves noggin pats and deep space adventures.',
    },

    {
        id: 10,
        img: "./images/10.jpg",
        name: 'Joan of Bark',  
        breed: 'American Husky',
        sex: 'Female',
        age: 'Adult',
        size: 'Large',
        personality: 'There is no heart bigger or tail wagg-ier than Joan of Bark. This legend of a pooch could be your next best friend!'
    },
    {
        id: 11,
        img: "./images/11.jpg",
        name: 'Blue',  
        breed:'Australian Cattle Dog' ,
        sex: 'Female',
        age: 'Adult',
        size: 'Medium',
        personality:'Blue loves to lounge on the coach and swim in the pool.' ,
    },
    {
        id: 12,
        img: "./images/12.jpg", 
        name: 'Jonesy Bones',
        breed: 'Australian Cattle Dog',
        sex: 'Female',
        age:'Adult' ,
        size: 'Medium' ,
        personality: 'She is an adventurous spirit and loves to discover new things!',
    },
 ]