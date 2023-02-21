package lk.ijse.spring.controller;

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

   /* @GetMapping
    public String get(){
        System.out.println("Yeeeee");
        return "oshiiiii";
    }*/

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+ " Added.!",null);
    }

   /* @PutMapping
    public ResponseUtil updateCustomer(@ModelAttribute CustomerDTO dto){
        customerService.updateCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+ " Updated.!",null);
    }*/

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(CustomerDTO dto){
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
    public ResponseUtil getCustomerDetail(@RequestParam String customerId){
        CustomerDTO customerDTO = customerService.getCustomerDetail(customerId);
        return new ResponseUtil("200","Getting Sucess!",customerDTO);
    }
}
