package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@CrossOrigin
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    ReservationService carReservationService;

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseUtil requestReservation(@RequestPart("reservation") ReservationDTO carReservation, @RequestPart("file") MultipartFile file) {
        carReservation.setBankSlip("uploads/" + carReservation.getBankSlip());

        carReservationService.requestReservation(carReservation);

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            file.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file.getOriginalFilename()));

        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil("500", "Reservation Sending Filed.Try Again Latter", carReservation);
        }
        return new ResponseUtil("200", "Request Send Successfully", carReservation);
    }


    @GetMapping(path = "generateReservationId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateReservationId() {
        return new ResponseUtil("200", "Done", carReservationService.generateReservationId());
    }

    @PutMapping(params = {"reserve_id", "driver_id", "status"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateReservationStatus(@RequestParam String reserve_id, @RequestParam String driver_id, @RequestParam String status) {
        carReservationService.updateReservationStatus(reserve_id, driver_id, status);
        return new ResponseUtil("200", status + " Request Successfully", null);
    }

    //return reservations they are in pending status
    @GetMapping(path = "pendingReservation", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPendingReservation() {
        return new ResponseUtil("200", "Done", carReservationService.getAllPendingReservation());
    }

    @GetMapping(path = "getReservation/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getReservationDetail(@PathVariable String id) {
        return new ResponseUtil("200", "Done", carReservationService.getReservationDetail(id));
    }

    //return all today reserve reservations
    @GetMapping(path = "todayReservation", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllTodayReservation() {
        return new ResponseUtil("200", "Done", carReservationService.getAllTodayReservation());
    }

    //return all reservations they are picking up today
    @GetMapping(path = "todayPickUps", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllTodayPickUps() {
        return new ResponseUtil("200", "Done", carReservationService.getAllTodayPickUps());
    }
}
