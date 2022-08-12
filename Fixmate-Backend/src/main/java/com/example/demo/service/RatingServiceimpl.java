package com.example.demo.service;

import com.example.demo.config.SecurityUtils;
import com.example.demo.repository.AppoinmentRepository;
import com.example.demo.repository.RatingRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Rating;
import com.example.demo.entity.Package;
import com.example.demo.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class RatingServiceimpl implements RatingService{

    @Autowired
    private PackageServices packageServices;

    @Autowired
    private AppoinmentRepository appoinmentDao;

    @Autowired
    private com.example.demo.service.AppoinmentService appoinmentService;

    @Autowired
    private RatingRepository ratingDao;

    @Autowired
    private UserRepository dao;

    @Override
    public Rating addRating(Rating rating) {
        String user = SecurityUtils.getCurrentUserLogin().get();
        rating.setUserName(user);
        this.ratingDao.save(rating);

        return rating;
    }

    @Override
    public List<Rating> getRatings() {
        return this.ratingDao.findAll();
    }


    @Override
    public List<Rating> getRatingsbyUser() {
        Users user = this.dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
        List<Appoinment> appoinments = user.getAppoinments();
        List<Rating> ratings = new ArrayList<>();
        for(Appoinment x:appoinments){
            if(Objects.isNull(x.getRating())){
                continue;
            }
            ratings.add(x.getRating());
        }
        return ratings;
    }

    @Override
    public Rating editRating(Rating rating) {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = formatter.format(date);
        rating.setGivenDate(strDate);
        String user = SecurityUtils.getCurrentUserLogin().get();
        rating.setUserName(user);
        this.ratingDao.save(rating);
        return rating;
    }

    @Override
    public Rating deleteRating(long id) {
        List<Rating> ratings = getRatings();
        Rating rating = new Rating();
        for(Rating x:ratings){
            if(Objects.equals(x.getBook_id(),id)){
                rating = x;
                this.ratingDao.delete(rating);

            }
        }
        return rating;

    }




}
