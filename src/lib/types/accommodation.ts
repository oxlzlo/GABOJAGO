export type Accommodation = {
  id: number;
  name: string;
  address: string;
  numbers: number;
  comment: string;
  thumbnail: string;
  price: number;
  roomList: Rooms[];
};

export type Rooms = {
  id: number;
  imageList: string[];
  roomType: string;
  roomTypeName: string;
  roomPrice: number;
  roomExtraPrice: number;
  roomStock: number;
  roomDefaultGuest: number;
  roomMaxGuest: number;
  comment: string;
};
