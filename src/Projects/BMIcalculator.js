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
            color = '#d2b55b'; // Darker yellow
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Healthy Weight';
            color = '#4caf50'; // Bright green
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            color = '#6db65b'; // Darker green
        } else if (bmi >= 30 && bmi < 35) {
            category = 'Class 1 Obesity';
            color = '#9acd32'; // Yellow-green, leaning green
        } else if (bmi >= 35 && bmi < 40) {
            category = 'Class 2 Obesity';
            color = '#ff8c00'; // Bright orange
        } else {
            category = 'Class 3 Obesity';
            color = '#ff4500'; // Bright red
        }
        

        setBMICategory(category);
        setBMIColor(color);
    }

    return (
        <div>
            <BackButton />
            <div className='bmi-window'>
                <div className='bmi-title'>
                    <h1>Body mass index Calculator</h1>
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

                <div className='bmi-result' >
                    <h1>
                        Your BMI is: {(weight / ((height / 100) ** 2)).toFixed(2)}
                    </h1>
                    <h1 style={{ color: bmiColor }}>{BMICategory}</h1>
                </div>
            </div>
        </div>
    );
}

export default BMIcalculator;
