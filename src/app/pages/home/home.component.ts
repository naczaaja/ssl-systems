import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns = ['customer-name', 'ca', 'customer-email', 'customer-phone', 'customer-address', 'action']

  dataSource = new MatTableDataSource<Customer>()

  constructor() { }

  ngOnInit(): void {
  }

  feedCustomerData(){

  }

}
