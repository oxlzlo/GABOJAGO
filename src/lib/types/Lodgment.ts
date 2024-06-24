export type Lodgment = {
  id: string;
  price: number;
  image: string;
  name: string;
  address: string;
  telephone: string;
  comment: string;
  room: Room[];
};

export type Room = {
  id: string;
  image: string;
  name: string;
  type: string;
  extra_price: number;
  price: number;
  comment: string;
  max_person: number;
};
