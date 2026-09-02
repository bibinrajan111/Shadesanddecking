import type { Enquiry } from '../types/enquiry'
const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined
export async function submitEnquiry(enquiry: Enquiry) {
 if (!endpoint) throw new Error('Enquiry endpoint is not configured.')
 const response = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(enquiry) })
 if (!response.ok) throw new Error('Enquiry request failed.')
}
