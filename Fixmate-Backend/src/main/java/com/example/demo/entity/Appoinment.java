package com.example.demo.entity;


import lombok.Data;


import javax.persistence.*;

@Data
@Entity
public class Appoinment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "bookId")
    private long book_id;

    @Transient
    private long u_id;

    @Transient
    private long sc_id;


   
    private String problemStatement;
    private String contactNumber;
    private String bookingDate;
    private String bookingTime;
    private String bookingStatus;
    private String charges;
    private String finalPay;
    private String paymentDone;
    private String serviceStatus;

    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name="bookId")
    private Rating rating;

}

