import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        axios.get('/api/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the reviews!', error);
            });
    }, []);

    const addReview = () => {
        if (reviewText) {
            axios.post('/api/reviews', { text: reviewText })
                .then(response => {
                    setReviews([...reviews, response.data]);
                    setReviewText('');
                })
                .catch(error => {
                    console.error('Hubo un error añadiendo la reseña', error);
                });
        } else {
            alert('Por favor, escribe una reseña.');
        }
    };

    return (
        <section id="reseñas">
            <h2>Reseñas</h2>
            <div id="review-list">
                {reviews.map(review => (
                    <div className="review" key={review._id}>
                        <p>{review.text} - {review.user}</p>
                    </div>
                ))}
            </div>
            <div id="add-review">
                <h3>Agregar Reseña</h3>
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Escribe tu reseña aquí..."></textarea>
                <button onClick={addReview}>Enviar Reseña</button>
            </div>
        </section>
    );
}

export default Reviews;