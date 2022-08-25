package com.example.demo.controller;

import com.example.demo.entity.Appoinment;
import com.example.demo.entity.Package;
import com.example.demo.service.AppoinmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppoinmentController {
    @Autowired
    private AppoinmentService Appoinments;
    

    @PostMapping("/appoinment")
    public Appoinment addAppoinment(@RequestBody Appoinment appoinment){
        return this.Appoinments.addAppoinment(appoinment);
    }
    @GetMapping("/getAppoinments")
    public List<Appoinment> getAppoinments(){
        return this.Appoinments.allAppoinments();
    }
  
    @GetMapping("/getAppoinments/user")
    public List<Appoinment> getUserAppoinments(){
        return this.Appoinments.getUserAppoinments();
    }

    @PutMapping("/editAppoinment")
    public Appoinment editAppoinment(@RequestBody Appoinment appoinment){
        return this.Appoinments.editAppoinment(appoinment);
    }

    @PutMapping("/editCharges")
    public Appoinment editCharges(@RequestBody Appoinment appoinment){
        return this.Appoinments.editCharges(appoinment);
    }

   

    @PutMapping("/payment/{id}")
    public Appoinment editPayment(@PathVariable String id) {
        return this.Appoinments.editPayment(Long.parseLong(id));
    }

    @PutMapping("/statusaccept/{id}")
    public Appoinment editBookingStatusAccept(@PathVariable String id){
        return this.Appoinments.editBookingStatusAccept(Long.parseLong(id));
    }

    @PutMapping("/statusreject/{id}")
    public Appoinment editBookingStatusReject(@PathVariable String id){
        return this.Appoinments.editBookingStatusReject(Long.parseLong(id));
    }

    @PutMapping("/servicestart/{id}")
    public Appoinment editServiceStarted(@PathVariable String id){
        return this.Appoinments.editServiceStarted(Long.parseLong(id));
    }

    @PutMapping("/serviceend/{id}")
    public Appoinment editServiceEnded(@PathVariable String id){
        return this.Appoinments.editServiceEnded(Long.parseLong(id));
    }

    @PutMapping("/finalpay/{id}")
    public Appoinment editFinalPay(@PathVariable String id){
        return this.Appoinments.editFinalPay(Long.parseLong(id));
    }

    @DeleteMapping("/deleteAppoinment/{id}")
    public Appoinment deleteAppoinment(@PathVariable String id){
        return this.Appoinments.deleteAppoinment(Long.parseLong(id));
    }
}
