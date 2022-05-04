import React from 'react'

const Employee = ({ name, age, gender, alive }) => {
    return (
        <div>
            {name && <p>Name: {name}</p>}
            {age && <p>Age: {age}</p>}
            {(!isNaN(gender) || gender) && <p>Gender: {gender === 0 ? 'Male' : 'Female'}</p>}
            {(!isNaN(alive) || alive) && <p>{alive ? 'Alive' : 'Dead'}</p>}
            <hr />
        </div>
    );
};

export default Employee;