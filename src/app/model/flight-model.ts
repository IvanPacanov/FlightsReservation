export const AIR_PORTS: Airport[] = [
  {code: 'WAW', text: 'Warszawa Okęcie'},
  {code: 'LUB', text: 'Lublin Świdnik'},
  {code: 'HAM', text: 'Hamburg'},
  {code: 'OSL', text: 'Oslo'}
];

export interface Airport{
  code: string;
  text: string;
}

export interface Flight{
  place: { departure: string; arrival: string; };
  data: { arrive: Date, depart?: Date};
}

export interface FlightAdded extends Flight{
  firstname: string;
  lastName: string;
  numberPeople: number;
  class: String;
}
