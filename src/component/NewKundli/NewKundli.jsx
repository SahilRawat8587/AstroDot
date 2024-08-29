import React from 'react'
import "./NewKundli.css"

const NewKundli = () => {
  return (
    <div className="nkundli-container">
        <h1>New Kundli</h1>
        <p>Get your personalized Vedic birth chart instantly.</p>
        <div className="nform-container">
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" required />

                <label for="gender">Gender</label>
                <select id="gender" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <div className="birth-details">
                    <div>
                        <label for="day">Day</label>
                        <input type="number" id="day" name="day" placeholder="Day" min="1" max="31" required />
                    </div>
                    <div>
                        <label for="month">Month</label>
                        <input type="number" id="month" name="month" placeholder="Month" min="1" max="12" required />
                    </div>
                    <div>
                        <label for="year">Year</label>
                        <input type="number" id="year" name="year" placeholder="Year" min="1900" required />
                    </div>
                    <div>
                        <label for="hour">Hour</label>
                        <input type="number" id="hour" name="hour" placeholder="Hour" min="0" max="23" required />
                    </div>
                    <div>
                        <label for="minute">Minutes</label>
                        <input type="number" id="minute" name="minute" placeholder="Minutes" min="0" max="59" required />
                    </div>
                    <div>
                        <label for="second">Seconds</label>
                        <input type="number" id="second" name="second" placeholder="Seconds" min="0" max="59" required />
                    </div>
                </div>

                <label for="birth-place">Birth Place</label>
                <input type="text" id="birth-place" name="birth-place" placeholder="Enter your birth place" required />

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default NewKundli;
