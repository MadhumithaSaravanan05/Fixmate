package com.example.demo.service;

import com.example.demo.config.SecurityUtils;
import com.example.demo.repository.AppoinmentRepository;
import com.example.demo.repository.PackageRepository;
import com.example.demo.repository.UserRepository;

import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Package;
import com.example.demo.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class AppoinmentServiceimpl implements com.example.demo.service.AppoinmentService {
    @Autowired
    private AppoinmentRepository appoinmentDao;

    @Autowired
    private UserRepository dao;
    @Autowired
    private PackageServices packageServices;
    @Autowired
    private PackageRepository packageDao;

    @Override
    public Appoinment addAppoinment(Appoinment appoinment) {
        appoinment.setPaymentDone("no");
        appoinment.setBookingStatus("no");
        appoinment.setServiceStatus("no");
        appoinment.setFinalPay("no");
    
        this.appoinmentDao.save(appoinment);
        //adding to center
        List<Package> packages = this.packageDao.findAll();
        for(Package x:packages){
            if(Objects.equals(x.getId(),appoinment.getSc_id())){
                System.out.println(appoinment.getSc_id());
                x.getAppoinments().add(appoinment);
                this.packageDao.save(x);
            }
        }
        
        
        //adding to user
        List<Users> users = this.dao.findAll();
        for(Users y:users){
            if(Objects.equals(y.getId(),appoinment.getU_id())){
                y.getAppoinments().add(appoinment);
                this.dao.save(y);
            }
        }
        return appoinment;
    }

    @Override
    public List<Appoinment> allAppoinments() {
        return this.appoinmentDao.findAll();
    }

    @Override
    public List<Appoinment>getUserAppoinments(){
        Users user = dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
        List<Appoinment> result = user.getAppoinments();

        return result;
    }




    @Override
    public Appoinment editAppoinment(Appoinment appoinment) {
        appoinment.setPaymentDone("yes");
        appoinment.setBookingStatus("accept");
        appoinment.setServiceStatus("no");
        appoinment.setCharges("null");
        appoinment.setFinalPay("no");
        this.appoinmentDao.save(appoinment);
        return appoinment;
    }

    @Override
    public Appoinment editBookingStatusAccept(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        System.out.println(id);
        System.out.println(appoinments);

        for(Appoinment x:appoinments){
            System.out.println(x.getBook_id());
            if(x.getBook_id()==id){
                x.setBookingStatus("accept");
                appoinment=x;
                this.appoinmentDao.save(appoinment);
                System.out.println(x.getBookingStatus());
            }
        }

        return appoinment;
    }

    @Override
    public Appoinment editServiceStarted(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        System.out.println(id);
        System.out.println(appoinments);

        for(Appoinment x:appoinments){
            System.out.println(x.getBook_id());
            if(x.getBook_id()==id){
                x.setServiceStatus("started");
                appoinment=x;
                this.appoinmentDao.save(appoinment);
                System.out.println(x.getBookingStatus());
            }
        }

        return appoinment;
    }

    @Override
    public Appoinment editServiceEnded(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        System.out.println(id);
        System.out.println(appoinments);

        for(Appoinment x:appoinments){
            System.out.println(x.getBook_id());
            if(x.getBook_id()==id){
                x.setServiceStatus("ended");
                appoinment=x;
                this.appoinmentDao.save(appoinment);
                System.out.println(x.getBookingStatus());
            }
        }

        return appoinment;
    }

    @Override
    public Appoinment editBookingStatusReject(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        System.out.println(id);
        System.out.println(appoinments);

        for(Appoinment x:appoinments){
            System.out.println(x.getBook_id());
            if(x.getBook_id()==id){
                x.setBookingStatus("reject");
                appoinment=x;
                this.appoinmentDao.save(appoinment);
                System.out.println(x.getBookingStatus());
            }
        }

        return appoinment;
    }

    @Override
    public Appoinment editCharges(Appoinment appoinment) {
        appoinment.setPaymentDone("yes");
        appoinment.setBookingStatus("accept");
        appoinment.setServiceStatus("ended");
        this.appoinmentDao.save(appoinment);
        return appoinment;
    }

    @Override
    public Appoinment editFinalPay(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        for(Appoinment x:appoinments){
            System.out.println(x.getBook_id());
            if(x.getBook_id()==id){
                x.setFinalPay("yes");
                appoinment=x;
                this.appoinmentDao.save(appoinment);

            }
        }

        return appoinment;
    }

    @Override
    public Appoinment deleteAppoinment(long id) {
        List<Appoinment> appoinments = allAppoinments();
        Appoinment appoinment = new Appoinment();
        for(Appoinment a:appoinments){
            if(a.getBook_id()==id){
                appoinment = a;
                this.appoinmentDao.delete(appoinment);
            }
        }
        return appoinment;
    }

    @Override
    public Appoinment editPayment(long id) {
        List<Appoinment> appoinments = getUserAppoinments();
        Appoinment appoinment = new Appoinment();

        for(Appoinment x:appoinments){
            if(x.getBook_id()==id){
                x.setPaymentDone("yes");
                appoinment=x;
                this.appoinmentDao.save(appoinment);
            }
        }
        return appoinment;
    }
}
