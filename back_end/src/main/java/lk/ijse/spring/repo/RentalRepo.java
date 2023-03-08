package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RentalRepo extends JpaRepository<Rental,String> {

    @Query(value = "SELECT * FROM driver WHERE status='Available' ORDER BY driverId DESC limit 1", nativeQuery = true)
    Driver getDriverByDriverStatus();

    @Query(value = "SELECT rentalId FROM Rental ORDER BY rentalId DESC limit 1", nativeQuery = true)
    String generateReservationId();
}
