import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns = ['customer-name', 'customer-ca', 'customer-email', 'customer-phone', 'customer-address', 'action']

  dataSource = new MatTableDataSource<Customer>()

  constructor() { }

  ngOnInit(): void {
    this.feedCustomerData();
  }

  feedCustomerData() {
    const dummy: Customer[] = [
      {
        customer_name: 'นายไพฑูรย์ น้อยสืบสาย',
        customer_ca: '20020519957',
        customer_email: 'paitoon_mdf@kijchai.co.th',
        customer_phone: '089-5499567',
        customer_address: 'บริษัท ส.กิจชัยเอ็นเตอร์ไพรส์ จำกัด (มหาชน)'
      },
      {
        customer_name: 'นายสถาพร แก้วผสม',
        customer_ca: '20002252513',
        customer_email: 'k.sathaporn@rayongboard.com',
        customer_phone: '098-5429354',
        customer_address: 'บริษัท ระยอง พาเนล จำกัด'
      },
      {
        customer_name: 'ว่าที่ ร.ต.สันติ ศรีสุข',
        customer_ca: '20002282640',
        customer_email: 'santi.srisuk@grohe.com',
        customer_phone: '085-9059789',
        customer_address: 'บริษัท โกรเฮ่ สยาม จำกัด'
      },
      {
        customer_name: 'นายวรวรรธน์ ขวัญดี',
        customer_ca: '20022980575',
        customer_email: 'worawat.khwandee@ingredion.com',
        customer_phone: '081-4085515',
        customer_address: 'บริษัท อินกริดิออน (ประเทศไทย)จำกัด'
      },
      {
        customer_name: 'นายอุกฤษ ละอองแก้ว',
        customer_ca: '20002276795',
        customer_email: 'ukrit.lao@cpf.co.th',
        customer_phone: '088-2805905',
        customer_address: 'บริษัท เจริญโภคภัณฑ์อาหาร จำกัด (มหาชน)'
      },
      {
        customer_name: 'นายสยาม ศรนุรักษ์',
        customer_ca: '20002297359',
        customer_email: 'sayamsrnuraks@gmail.com',
        customer_phone: '091-2356697',
        customer_address: 'บริษัท ซิน หย่วน ด้า รับเบอร์(ประเทศไทย) จำกัด'
      },
    ]
    this.dataSource.data = dummy
  }
}
