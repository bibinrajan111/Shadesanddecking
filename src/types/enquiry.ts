export type Enquiry = { name:string; email:string; phone:string; service:string; projectDescription:string; preferredContactMethod:''|'Phone'|'Email'; enquiryUpdates:boolean; website:string }
export type EnquiryField = keyof Pick<Enquiry,'name'|'email'|'phone'|'service'|'projectDescription'>
