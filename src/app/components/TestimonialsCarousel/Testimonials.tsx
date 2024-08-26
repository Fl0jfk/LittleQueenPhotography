"use client";

import { useState, useEffect } from "react";

interface GoogleReview {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    text: string;
    author_url: string; // Assurez-vous que ce champ contient l'URL du commentaire
}

export default function Testimonials() {
    const [reviews, setReviews] = useState<GoogleReview[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const reviews = data.reviews || [];
                if (Array.isArray(reviews)) {
                    setReviews(reviews);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                console.error(error); // Log error for debugging
                setError("Failed to fetch reviews. Please try again later.");
            }
        };
        fetchReviews();
    }, []);
    return (
        <section className="p-8 flex flex-col items-center gap-8 overflow-hidden rounded-lg shadow-lg text-white">
            <h2 className="text-4xl font-bold">Avis de nos clients</h2>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : reviews.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                    {reviews.map((review, index) => (
                        <a key={index} href={review.author_url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 p-4 bg-gray-700 rounded-lg shadow-md w-full max-w-md">
                            <div className="flex items-center mb-4">
                                <img 
                                    src={review.profile_photo_url} 
                                    alt={review.author_name} 
                                    className="w-16 h-16 rounded-full mr-4 border border-gray-300" 
                                />
                                <div>
                                    <p className="font-semibold text-lg">{review.author_name}</p>
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <svg 
                                                key={i} 
                                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 24 24" 
                                                fill="currentColor" 
                                                stroke="currentColor"
                                            >
                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M12 2.25a.75.75 0 0 1 .68.45l2.226 4.513 4.991.724a.75.75 0 0 1 .416 1.277l-3.607 3.515.85 4.946a.75.75 0 0 1-1.088.791L12 15.898l-4.446 2.337a.75.75 0 0 1-1.088-.79l.85-4.946-3.607-3.515a.75.75 0 0 1 .416-1.277l4.991-.724L11.32 2.7A.75.75 0 0 1 12 2.25z" 
                                                    clipRule="evenodd" 
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p>{review.text}</p>
                        </a>
                    ))}
                </div>
            ) : (
                <p>Aucun avis disponible.</p>
            )}
        </section>
    );
}