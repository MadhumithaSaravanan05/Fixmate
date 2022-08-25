package com.example.demo.service;


import com.example.demo.entity.Rating;

import java.util.List;

public interface RatingService {
    Rating addRating(Rating rating);

    List<Rating> getRatings();

    List<Rating> getRatingbyPackage(long id);

    List<Rating> getRatingsbyUser();

    Rating editRating(Rating rating);

    Rating deleteRating(long id);

}
