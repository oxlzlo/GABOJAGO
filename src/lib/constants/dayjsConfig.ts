import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const configureDayjs = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  // 한국 시간대로 설정
  dayjs.tz.setDefault('Asia/Seoul');
};
