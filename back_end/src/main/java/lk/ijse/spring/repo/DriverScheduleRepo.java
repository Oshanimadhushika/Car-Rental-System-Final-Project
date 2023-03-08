package lk.ijse.spring.repo;

import lk.ijse.spring.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverScheduleRepo extends JpaRepository<DriverSchedule,String> {
}
