export interface IndianRegion {
  id: string;
  name: string;
  type: 'state' | 'ut' | 'other';
  label: string;
  popular?: boolean;
}

export const INDIAN_STATES_AND_UTS: IndianRegion[] = [
  { id: 'AN', name: 'Andaman and Nicobar Islands', type: 'ut', label: 'Andaman and Nicobar Islands (UT)' },
  { id: 'AP', name: 'Andhra Pradesh', type: 'state', label: 'Andhra Pradesh' },
  { id: 'AR', name: 'Arunachal Pradesh', type: 'state', label: 'Arunachal Pradesh' },
  { id: 'AS', name: 'Assam', type: 'state', label: 'Assam' },
  { id: 'BR', name: 'Bihar', type: 'state', label: 'Bihar' },
  { id: 'CH', name: 'Chandigarh', type: 'ut', label: 'Chandigarh (UT)' },
  { id: 'CG', name: 'Chhattisgarh', type: 'state', label: 'Chhattisgarh' },
  { id: 'DH', name: 'Dadra and Nagar Haveli and Daman and Diu', type: 'ut', label: 'Dadra and Nagar Haveli and Daman and Diu (UT)' },
  { id: 'DL', name: 'Delhi / Delhi NCR', type: 'ut', label: 'Delhi / Delhi NCR (UT)', popular: true },
  { id: 'GA', name: 'Goa', type: 'state', label: 'Goa' },
  { id: 'GJ', name: 'Gujarat', type: 'state', label: 'Gujarat', popular: true },
  { id: 'HR', name: 'Haryana', type: 'state', label: 'Haryana', popular: true },
  { id: 'HP', name: 'Himachal Pradesh', type: 'state', label: 'Himachal Pradesh' },
  { id: 'JK', name: 'Jammu and Kashmir', type: 'ut', label: 'Jammu and Kashmir (UT)' },
  { id: 'JH', name: 'Jharkhand', type: 'state', label: 'Jharkhand' },
  { id: 'KA', name: 'Karnataka', type: 'state', label: 'Karnataka' },
  { id: 'KL', name: 'Kerala', type: 'state', label: 'Kerala' },
  { id: 'LA', name: 'Ladakh', type: 'ut', label: 'Ladakh (UT)' },
  { id: 'LD', name: 'Lakshadweep', type: 'ut', label: 'Lakshadweep (UT)' },
  { id: 'MP', name: 'Madhya Pradesh', type: 'state', label: 'Madhya Pradesh' },
  { id: 'MH', name: 'Maharashtra', type: 'state', label: 'Maharashtra', popular: true },
  { id: 'MN', name: 'Manipur', type: 'state', label: 'Manipur' },
  { id: 'ML', name: 'Meghalaya', type: 'state', label: 'Meghalaya' },
  { id: 'MZ', name: 'Mizoram', type: 'state', label: 'Mizoram' },
  { id: 'NL', name: 'Nagaland', type: 'state', label: 'Nagaland' },
  { id: 'OD', name: 'Odisha', type: 'state', label: 'Odisha' },
  { id: 'PY', name: 'Puducherry', type: 'ut', label: 'Puducherry (UT)' },
  { id: 'PB', name: 'Punjab', type: 'state', label: 'Punjab', popular: true },
  { id: 'RJ', name: 'Rajasthan', type: 'state', label: 'Rajasthan', popular: true },
  { id: 'SK', name: 'Sikkim', type: 'state', label: 'Sikkim' },
  { id: 'TN', name: 'Tamil Nadu', type: 'state', label: 'Tamil Nadu' },
  { id: 'TS', name: 'Telangana', type: 'state', label: 'Telangana' },
  { id: 'TR', name: 'Tripura', type: 'state', label: 'Tripura' },
  { id: 'UP', name: 'Uttar Pradesh', type: 'state', label: 'Uttar Pradesh', popular: true },
  { id: 'UK', name: 'Uttarakhand', type: 'state', label: 'Uttarakhand' },
  { id: 'WB', name: 'West Bengal', type: 'state', label: 'West Bengal' },
  { id: 'OT', name: 'Other', type: 'other', label: 'Other (Pan India / International)' },
];
