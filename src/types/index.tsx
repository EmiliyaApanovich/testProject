export type ImageFromRequest = {
  image_src: string;
  id: number;
  earth_date: Date;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
};

export type ParamsForRequest = {
  date: string;
  roverCamera: string;
};

export const CamerasArray = [
  {shortName: 'fhaz', fullName: 'Front Hazard Avoidance Camera'},
  {shortName: 'mast', fullName: 'Mast Camera'},
  {shortName: 'chemcam', fullName: 'Chemistry and Camera Complex,'},
  {shortName: 'mahli', fullName: 'Mars Hand Lens Imager'},
  {shortName: 'mardi', fullName: 'Mars Descent Imager'},
  {shortName: 'navcam', fullName: 'Navigation Camera'},
  {shortName: 'pancam', fullName: 'Panoramic Camera'},
  {
    shortName: 'minites',
    fullName: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
  },
  {shortName: 'rhaz', fullName: 'Rear Hazard Avoidance Camera'},
];
export const monthNames = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
