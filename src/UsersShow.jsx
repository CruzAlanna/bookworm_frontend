import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecommendationsList } from './RecommendationsList';
import { RecommendationsNew } from './RecommendationsNew';

axios.defaults.baseURL = "http://localhost:3000";

export function UsersShow({ user, onUpdate, onDestroy }) {
  const [recommendations, setRecommendations] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(user, params, successCallback);
  };

  const handleCreateRecommendation = (params, successCallback) => {
    console.log(params)
    axios.post("/api/v1/recommendations", params)
    .then((response) => {
      setRecommendations([...recommendations, response.data]);
      successCallback();
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const handleDestroyRecommendation = (recommendation) => {
    axios.delete(`/api/v1/recommendations/${recommendation.id}`, { data: { user_id: user.id } })
    .then(() => {
      setRecommendations(recommendations.filter((r) => r.id !== recommendation.id));
    })
  };

  useEffect(() => {
    if (user && user.id) {
      axios.get(`/view_profile/${user.id}`)
      .then((response) => {
        if (response.data.recommendations) {
          setRecommendations(response.data.recommendations);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }, [user])

  return (
    <div>
      <h1>Member: {user.name}</h1>
      <h3>Contact via email: {user.email} </h3>
      <hr></hr>
      {/* Update the update and destroy actions to limit who can view this part */}
      <h4>Update Member Info:</h4>
      <form onSubmit={handleSubmit}>
        <div>
            Name: <input defaultValue={user.name} name="name" type="text" />
          </div>
          <br></br>
          <div>
            Email: <input defaultValue={user.email} name="email" type="text" />
          </div>
          <br></br>
        <button type="submit">Update</button>
      </form>
      <h4>Delete Account</h4>
      <button onClick={() => onDestroy(user)}>Remove</button>
      <hr></hr>


      <div>
        <RecommendationsList recommendations={recommendations} onDestroyRecommendation={handleDestroyRecommendation}/>
        <RecommendationsNew userId={user.id} onCreateRecommendation={handleCreateRecommendation}/>
      </div>
    </div>
  )
}