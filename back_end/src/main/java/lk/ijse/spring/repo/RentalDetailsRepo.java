package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalDetail;
import lk.ijse.spring.entity.RentalDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RentalDetailsRepo extends JpaRepository<RentalDetail, RentalDetails_PK> {
}
