export type Lodgement = {
  id: string;
  image: string;
  name: string;
  address: string;
  telephone: string;
  comment: string;
  room: Room;
};

export type Room = {
  id: number;
  name: string;
  type: string;
  extra_price: number;
  price: number;
  comment: string;
  max_person: number;
};
