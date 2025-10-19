export const doctors = [
  { value: '', label: 'Select Doctor' },
  { value: 'dr. Shivakumar', label: 'Dr. Shivakumar - Consultant General, Laparoscopic, Laser & Podiatric Surgeon' },
  { value: 'dr. Prashanth', label: 'Dr. Prashanth - Consultant Surgical Gastroenterologist' },
  { value: 'dr. Swapana', label: 'Dr. Swapana - Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon' },
  { value: 'dr. Vineeth', label: 'Dr. D.V. Vineeth - Consultant Surgical Oncologist' },
  { value: 'dr. Rajsree', label: 'Dr. Rajsree - Consultant Interventional Radiologist' },
  { value: 'dr. Avinash', label: 'Dr. Avinash - Consultant Urologist & Minimal Access Surgeon' }
];

export const timeSlots = [
  { value: '', label: 'Select Time' },
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' }
];

export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};