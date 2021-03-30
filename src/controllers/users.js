const express = require('express');


//el profe lo puso en todos los metodos
/*
* @param {express.Request} req
* @param {express.Request} req
*/

 //o function( req = Request, res)
const getAllUsers = function (req, res) 
{
    const users = 
    [
        {
            id: 1,
            name: 'Fernando'
        },
        
        {
            id: 2,
            name: 'Marta'
        },
    ]
   res.json(users); //200 default entonces no lo pongo <- status(200)
};

const createUser = function (req, res)
{  
    const user = req.body;
    user.id = 86546;

    const result =
    {
        message: 'User created',
        user
    }
  res.status(201).json(result);
};

const updateUser = function (req, res) 
{
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = 
    {
        message: 'User updated',
        user
    }
    res.status(200).json(result)
};

const updatePartialUser = function (req, res) 
{
    const {id} = req.params;
    const user = req.body;

    user.id = id;
    const result = 
    {
        message: 'User updated with patch',
        user
    }

    res.status(200).json(result);
};

const deleteUser = function (req, res)  //con los : indico que es dinamico
{
const {id} = req.params;
//const id = req.params.id;

    const result =
    {
        message: `User with id: ${id} deleted`
    }
  res.json(result);
};

module.exports = 
{
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser,
}
