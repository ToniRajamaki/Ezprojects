import React, { useState, useEffect } from 'react';
import './Styles/BMIcalculator.css';
import BackButton from '../BackButton';

function BMIcalculator() {
    const [height, setHeight] = useState(160);
    const [weight, setWeight] = useState(60);
    const [BMICategory, setBMICategory] = useState("Underweight");
    const [bmiColor, setBMIColor] = useState("yellow");

    useEffect(() => {
        const bmi = weight / ((height / 100) ** 2);
        getBMICategory(bmi);
    }, [height, weight]);

    function getBMICategory(bmi) {
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = 'yellow';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Healthy Weight';
            color = 'green';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            color = '#a3c644'; // Lighter green
        } else if (bmi >= 30 && bmi < 35) {
            category = 'Class 1 Obesity';
            color = '#f7ea00'; // Yellow-green
        } else if (bmi >= 35 && bmi < 40) {
            category = 'Class 2 Obesity';
            color = '#ff9900'; // Orange
        } else {
            category = 'Class 3 Obesity';
            color = 'red';
        }

        setBMICategory(category);
        setBMIColor(color);
    }

    return (
        <div>
            <BackButton />
            <div className='bmi-window'>
                <div className='bmi-title'>
                    <h1>BMI Calculator</h1>
                </div>
                <div className='sliders'>
                    <label className='slider-title' htmlFor='height'>
                        Height: {height} cm
                    </label>
                    <input
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        type='range'
                        min='90'
                        max='210'
                        className='bmi-slider'
                        id='height'></input>
                    <label className='slider-title' htmlFor='weight'>
                        Weight: {weight} Kg
                    </label>
                    <input
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type='range'
                        min='30'
                        max='150'
                        className='bmi-slider'
                        id='weight'></input>
                </div>

                <div className='bmi-result' style={{ color: bmiColor }}>
                    <h1>
                        Your BMI is: {(weight / ((height / 100) ** 2)).toFixed(2)}
                    </h1>
                    <h1>You are {BMICategory}</h1>
                </div>
            </div>
        </div>
    );
}

export default BMIcalculator;
