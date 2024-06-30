import { http, HttpResponse } from 'msw';

let lodgment = [
  {
    id: '0',
    thumbnail: 'https://picsum.photos/200/300',
    price: 100000,
    name: '서울 숙소',
    address: '서울시 강남구 역삼동 123-456',
    numbers: '02-1234-5678',
    comment: '서울 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomTypeName: ' A 싱글룸',
        roomType: ' 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다. 해당 상품은 1인 기준입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomTypeName: ' B 더블룸',
        roomType: '더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '1',
    thumbnail: 'https://picsum.photos/200/300',
    price: 200000,
    name: '부산 숙소',
    address: '부산시 해운대구 우동 123-456',
    numbers: '051-1234-5678',
    comment: '부산 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '2',
    thumbnail: 'https://picsum.photos/200/300',
    price: 300000,
    name: '제주도 숙소',
    address: '제주시 제주동 123-456',
    numbers: '064-1234-5678',
    comment: '제주도 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '3',
    thumbnail: 'https://picsum.photos/200/300',
    price: 400000,
    name: '강릉 숙소',
    address: '강원도 강릉시 강릉동 123-456',
    numbers: '033-1234-5678',
    comment: '강릉 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '4',
    thumbnail: 'https://picsum.photos/200/300',
    price: 500000,
    name: '경주 숙소',
    address: '경상북도 경주시 경주동 123-456',
    numbers: '054-1234-5678',
    comment: '경주 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '5',
    thumbnail: 'https://picsum.photos/200/300',
    price: 600000,
    name: '대구 숙소',
    address: '대구시 중구 대구동 123-456',
    numbers: '053-1234-5678',
    comment: '대구 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    id: '6',
    thumbnail: 'https://picsum.photos/200/300',
    price: 700000,
    name: '인천 숙소',
    address: '인천시 남동구 인천동 123-456',
    numbers: '032-1234-5678',
    comment: '인천 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomType: '싱글룸',
        roomTypeName: 'A 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        id: '1',
        roomType: '더블룸',
        roomTypeName: 'B 더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
];

const roomList = [
  {
    id: '0',
    lodgmentId: '0',
    roomType: '싱글룸',
    roomTypeName: 'A 싱글룸',
    roomPrice: 100000,
    roomExtraPrice: 50000,
    roomStock: 10,
    roomDefaultGuest: 1,
    roomMaxGuest: 1,
    comment: '싱글룸 입니다.',
    imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: '1',
    lodgmentId: '0',
    roomType: '더블룸',
    roomTypeName: 'B 더블룸',
    roomPrice: 200000,
    roomExtraPrice: 100000,
    roomStock: 10,
    roomDefaultGuest: 2,
    roomMaxGuest: 2,
    comment: '더블룸 입니다.',
    imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: '0',
    lodgmentId: '1',
    roomType: '싱글룸',
    roomTypeName: 'A 싱글룸',
    roomPrice: 100000,
    roomExtraPrice: 50000,
    roomStock: 10,
    roomDefaultGuest: 1,
    roomMaxGuest: 1,
    comment: '싱글룸 입니다.',
    imageList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
];

export const handlers = [
  // 전체 숙박 목록 조회
  http.get('/api/lodgment', () => {
    return HttpResponse.json(lodgment);
  }),
  // 단일 숙박 조회
  http.get('/api/lodgment/:LodgmentId', (request) => {
    const { LodgmentId } = request.params;
    const lodgmentItem = lodgment.find((item) => item.id === LodgmentId);
    if (lodgmentItem) {
      return HttpResponse.json(lodgmentItem);
    } else {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 });
    }
  }),

  // 전체 객실 목록 조회
  http.get('/api/lodgment/:lodgmentId/room', (request) => {
    const { lodgmentId } = request.params;
    const lodgmentItem = lodgment.find((item) => item.id === lodgmentId);
    if (lodgmentItem) {
      return HttpResponse.json(lodgmentItem.roomList);
    } else {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 });
    }
  }),

  http.get('/api/lodgment/:lodgmentId/room/:roomId', (request) => {
    const { lodgmentId, roomId } = request.params;
    const lodgmentItem = lodgment.find((item) => item.id === lodgmentId);
    if (lodgmentItem) {
      const room = lodgmentItem.roomList.find((room) => room.id === roomId);
      if (room) {
        return HttpResponse.json(room);
      } else {
        return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
      }
    } else {
      return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
    }
  }),

  // 전체 객실 목록 조회
  // http.get('/api/lodgment/:LodgmentId/room', (request) => {
  //   const { LodgmentId } = request.params;
  //   const rooms = roomList.filter((room) => room.lodgmentId === LodgmentId);
  //   if (rooms.length > 0) {
  //     return HttpResponse.json(rooms);
  //   } else {
  //     return HttpResponse.json({ message: 'Not found' }, { status: 404 });
  //   }
  // }),
];
