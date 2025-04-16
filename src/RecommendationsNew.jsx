import { useState } from 'react';

export function RecommendationsNew({ userId, onCreateRecommendation }) {
  const [rating, setRating] = useState(5);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    // Manually append user_id to the FormData object
    params.append("user_id", userId);
    params.append("rating", rating);
    const successCallback = () => form.reset();
    onCreateRecommendation(params, successCallback);
  }

  return (
    <div>
      <h3>Add a Recommendation</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Recommendations:
            <select 
              name="rating"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value='1'>1 ⭐</option>
              <option value='2'>2 ⭐⭐</option>
              <option value='3'>3 ⭐⭐⭐</option>
              <option value='4'>4 ⭐⭐⭐⭐</option>
              <option value='5'>5 ⭐⭐⭐⭐⭐</option>
            </select>
          </label>
        </div>
        <br></br>
        <div>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <br></br>
          <div>
            Author: <input name="author" type="text" />
          </div>
          <br></br>
          <label>
            Review: <textarea name="review" required rows="3" />
          </label>
        </div>
        <button type="submit">Share</button>
      </form>
    </div>
  )
}