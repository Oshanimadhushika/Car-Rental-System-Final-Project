package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.List;

public interface ReservationService {

    String generateReservationId();

    void updateReservation(ReservationDTO ReservationDTO);

    void requestReservation(ReservationDTO ReservationDTO);

    void updateReservationStatus(String reserve_id, String driver_id, String status);

    List<ReservationDTO> getAllPendingReservation();

    List<ReservationDTO> getAllReservation();

    List<ReservationDTO> getRentalByReservationStatus();

    List<ReservationDTO> getReservationDetail(String id);

}
