import React from 'react'

function Namelist(){

    const person =[
        {
            id: 1,
            name: 'Prakhar',
            age : 22,
            skill :'Laravel'
        },
        {
            id: 2,
            name: 'Shivang',
            age : 22,
            skill :'Gamer'
        },
        {
            id: 3,
            name: 'Ishan',
            age : 22,
            skill :'Boybulider'
        },
        {
            id: 4,
            name: 'Sarim',
            age : 22,
            skill :'CS'
        }
    ]

    const names =['Prakhar','Shivang','Ishan','Sarim']
    const nameList = names.map(name => <h2> {name}</h2>)

    const presonList = person.map(person =><h2>I am {person.name} . I am  {person.age} old. My skill are {person.skill}</h2>)
    return  <div>{presonList}</div>
    
}

export default Namelist