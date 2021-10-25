export const AIR_PORTS: Place[] = [
  {code: 'WAW', text: 'Warszawa Okęcie'},
  {code: 'LUB', text: 'Lublin Świdnik'},
  {code: 'HAM', text: 'Hamburg'},
  {code: 'OSL', text: 'Oslo'}
];

export interface Place{
  code: string;
  text: string;
}

export interface Flight{
  place: { departure: string; arrival: string; };
  data: Date;
}
