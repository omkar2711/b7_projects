import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchJob } from './api/api.js'

function App() {
  const [job, setJob] = useState(null);

  const handleSearch = async (newJob) => {
    try{
      const response = await fetchJob(newJob);
      setJob(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
     <button onClick={() => handleSearch('developer jobs in pune')}>New Search</button>
     {job && (
      <div>
        <h2>Job Results:</h2>
        <ul>
          {job.data.map((jobItem) => (
            <li key={jobItem.job_id}>
              <h3>{jobItem.job_title}</h3>
              <p>{jobItem.job_employment_type} - {jobItem.job_city}, {jobItem.job_country}</p>
              <a href={jobItem.job_apply_link} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </li>
          ))}
        </ul>
      </div>
     )}
    </>
  )
}

export default App
