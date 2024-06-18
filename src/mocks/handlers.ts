import { http, HttpResponse } from 'msw';

let lodgment = [
  {
    id: 0,
    image: 'https://picsum.photos/200/300',
    price: 100000,
    description: '서울 중심부에 위치한 아늑한 숙소입니다.',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
    price: 300000,
    description: '강원도 중심부에 위치한 아늑한 숙소입니다.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    price: 500000, // 원화 기준 가격
    description: '경기도 중심부에 위치한 아늑한 숙소입니다.',
  },
];

export const handlers = [
  http.get('/api/lodgment', () => {
    return HttpResponse.json(lodgment);
  }),
];
