import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {
  
  constructor(private http:HttpClient){
    this.loadTable()
  }
  public customerList:any=[]
  loadTable(){
    this.http.get("http://localhost:8080/customer/find-all").subscribe(data=>{
        console.log(data)
        this.customerList=data
    })
  }
  
  // id:"",
    // name:"",
    // email:"",
    // address:""
  public selectCustomer:any={
    id:"",
    name:"",
    email:"",
    address:""
  }
  
  updateCustomer(customerNew:any){
    console.log(customerNew);
    
    this.selectCustomer=customerNew
    
    
  }
  
  update(){
    this.http.put("http://localhost:8080/customer/update",this.selectCustomer).subscribe(()=>{
      
      console.log(this.selectCustomer+"hi");
      
      alert("Updated!");
      this.loadTable();
      
    })
  }

  deleteCustomer(id:any){
      this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe(()=>{
        
        alert("Deleted!")
        this.loadTable();
      })
  }

  
}
