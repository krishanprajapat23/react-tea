import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // Use the data from the loader
  const data = useLoaderData()

  return (
    <div className='container-lg container-fluid py-4 my-3'>
      <h2 className="text-center fw-bold">GitHub Profile</h2>
      <div className="text-center mb-4">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={200}
          className="rounded-circle shadow"
        />
      </div>
      <h3 className="text-center">{data.name}</h3>
      <p className="text-center text-muted">{data.bio || 'No bio available'}</p>

      <div className="text-center mt-4">
        <p><strong>Followers:</strong> {data.followers}</p>
        <p><strong>Following:</strong> {data.following}</p>
        <p><strong>Public Repositories:</strong> {data.public_repos}</p>
      </div>

      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-theme"
        >
          Visit GitHub Profile
        </a>
        <a
          href={data.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-theme"
        >
          Visit Portfolio
        </a>
      </div>
    </div>
  )
}

export default Github;


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/krishanprajapat23')
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user data')
  }
  return response.json()
}
