package com.example.demo.entity;



import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Rating {
    @Id
    private long book_id;

    private int starCount;
    private String experience;
    private String userName;


    private String givenDate;
}
