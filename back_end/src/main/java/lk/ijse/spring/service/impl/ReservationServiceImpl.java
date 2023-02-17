package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.ReservationService;

import java.util.List;

public class ReservationServiceImpl implements ReservationService {
    public String generateReservationId() {
        return null;
    }

    public void requestReservation(ReservationDTO ReservationDTO) {

    }

    public void updateReservationStatus(String reserve_id, String driver_id, String status) {

    }

    public List<ReservationDTO> getAllPendingReservation() {
        return null;
    }

    public ReservationDTO getReservationDetail(String id) {
        return null;
    }

    public List<ReservationDTO> getAllTodayReservation() {
        return null;
    }

    public List<ReservationDTO> getAllTodayPickUps() {
        return null;
    }

    public List<ReservationDTO> getCustomerReservationByStatus(String id, String status) {
        return null;
    }
}
