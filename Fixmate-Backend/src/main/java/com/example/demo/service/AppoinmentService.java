package com.example.demo.service;


import com.example.demo.entity.Appoinment;

import java.util.List;

public interface AppoinmentService {
    Appoinment addAppoinment(Appoinment appoinment);

    List<Appoinment> allAppoinments();
    List<Appoinment> getUserAppoinments();
    
    Appoinment editAppoinment(Appoinment appoinment);
    Appoinment editBookingStatusAccept(long id);
    Appoinment editServiceStarted(long id);
    Appoinment editServiceEnded(long id);
    Appoinment editBookingStatusReject(long id);
    Appoinment editCharges(Appoinment appoinment);
    Appoinment editFinalPay(long id);
    Appoinment deleteAppoinment(long id);

    Appoinment editPayment(long id);
}
