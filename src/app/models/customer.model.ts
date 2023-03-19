export interface Customer {
  customer_name: string
  ca: string
  customer_email: string
  customer_phone: string
  customer_address: string
  contact_history: [
    topic: string,
    date: string,
    report: String | File
  ]
  
}
