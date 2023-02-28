package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO customerDTO);

    void updateCustomer(CustomerDTO customerDTO);

    void deleteCustomer (String id);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomerDetail();

    CustomerDTO checkCustomerLogIn(String userName);

    List<CustomerDTO> getTodayRegisteredCustomers();
}
