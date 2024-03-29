import { Injectable } from '@angular/core';

import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  serviceId = 'service_sctkkia';
  templateId = 'contact_form';
  userId = 'dRvzaAp8aTa8BxGA1';

  constructor() {
    emailjs.init(this.userId);
  }

  sendEmail(params: Record<string, unknown>) {
    return emailjs.send(this.serviceId, this.templateId, params)
  }
}
