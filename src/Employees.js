import React, { Component } from 'react'
import Employee from './Employee';
import employees from './mockEmployees';

export default class Employees extends Component {
    state = {
        employees: [],
        age: 12,
        isAlive: 2
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ employees: employees });
        }, 2000);
    }

    handleChange = e => {
        this.setState({ age: +e.target.value });
    }

    handleSelectChange = e => {
        this.setState({ isAlive: +e.target.value });
    }

    render() {
        const { employees } = this.state;

        return (
            <>
                <input onChange={this.handleChange} placeholder='Minimal age' value={this.state.age} />
                <select onChange={this.handleSelectChange} value={this.state.isAlive}>
                    <option value={2}>All</option>
                    <option value={1}>Alive</option>
                    <option value={0}>Dead</option>
                </select>
                {
                    employees?.length ? (
                        employees.filter(e => (e.age >= this.state.age))
                            .filter(e => this.state.isAlive === 2 || e.alive === this.state.isAlive)
                            .map((e, i) => <Employee key={i} {...e} />)
                    ) : (
                        <h4>Loading...</h4>
                    )
                }
            </>
        );
    };
}
