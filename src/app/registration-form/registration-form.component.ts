import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  firstName!: string;
  lastName!: string;
  gender!: string;
  dob!: Date;
  address1!: string;
  address2!: string;
  phone!: string;
  pincode!: string;
  state!: string;
  district!: string;

  onSave() {
    // Calculate age based on DOB
    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // TODO: Save user data to database

    // Fetch state/district based on pincode
    // TODO: Implement API call to fetch state/district data
  }
}
