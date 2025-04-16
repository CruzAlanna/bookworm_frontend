export function RecommendationsList({ recommendations, onDestroyRecommendation }) {
  return (
    <div>
      <h3>Recommendations:</h3>
      {recommendations.map((recommendation, index) => (
        <div key={index}>
          <div className="r-card">
            <div className="rec"> 
              <div className="left-column">
                <p>Rating: {recommendation.rating} {"⭐".repeat(recommendation.rating)} | Book: {recommendation.title} by {recommendation.author}</p>
              </div>
              <div className="right-column">
                <p>Review: {recommendation.review}</p>
              </div>
            </div>
            <hr></hr>
            <button onClick={() => onDestroyRecommendation(recommendation)}>Remove Recommendation</button>
          </div>
        </div>
      ))}
    </div>
  
  )
}