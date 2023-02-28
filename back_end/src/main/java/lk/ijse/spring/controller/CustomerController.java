package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;


    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+ " is Added!",dto);
    }



    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO dto){
        customerService.updateCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+": Updated.!",null);
    }

    @DeleteMapping(params = {"customerId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String customerId){
        customerService.deleteCustomer(customerId);
        return new ResponseUtil("200",customerId+" : Deleted.!",null);
    }


    @GetMapping
    public ResponseUtil getAllCustomers(){
        List<CustomerDTO> allCustomer = customerService.getAllCustomerDetail();
        return new ResponseUtil("200","OK",allCustomer);
    }

    @GetMapping(params = {"customerId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@RequestParam String customerId){
        CustomerDTO customerDTO = customerService.searchCustomer(customerId);
        return new ResponseUtil("200","Getting Success!",customerDTO);
    }

    @GetMapping(params = {"userName"})
    public ResponseUtil loginCustomer(@RequestParam String userName){
        CustomerDTO customerDTO = customerService.checkCustomerLogIn(userName);
        return new ResponseUtil("200","Login Success!",customerDTO);
    }
}
