import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeExercise = this.onChangeExercise.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeSets = this.onChangeSets.bind(this);
        this.onChangeReps = this.onChangeReps.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            username: '',
            description: '',
            exercise: '',
            weight: 0,
            sets: 0,
            reps: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })                  
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    