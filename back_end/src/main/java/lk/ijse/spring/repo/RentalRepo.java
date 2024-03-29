package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RentalRepo extends JpaRepository<Rental,String> {

    @Query(value = "SELECT * FROM rental WHERE reservationStatus='Pending'", nativeQuery = true)
    List<Rental> getRentalByReservationStatus();

    @Query(value = "SELECT rentalId FROM rental ORDER BY rentalId DESC limit 1", nativeQuery = true)
    String generateReservationId();

    @Query(value = "SELECT * FROM rental WHERE customerId=:customerId", nativeQuery = true)
    List<Rental> getRentalByCustomerId(@Param("customerId") String customerId);
}
