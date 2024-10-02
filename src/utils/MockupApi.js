import mixi from '@/assets/mixi.jpg';
import snake from '@/assets/snake.jpg';
import chip from '@/assets/chipgia.webp';
import bo from '@/assets/boxanglua.webp';
import nhim from '@/assets/nhims.jpg';

export const getMockAuthor = () => {
  return new Promise(resolve => {
    const data = [
      {
        id: 123,
        name: 'Trần Xuân Bách',
        img: 'https://i.pinimg.com/564x/c1/e5/49/c1e5498161fcf802f0c7ccdf6f3da239.jpg',
      },
      {
        id: 234,
        name: 'Lê Nguyễn Bảo Tâm',
        img: 'https://i.pinimg.com/736x/cd/74/c6/cd74c6ecffb83116692ca51da358284e.jpg',
      },
      {
        id: 345,
        name: 'Trần Thị Tố Nhi',
        img: 'https://i.pinimg.com/564x/af/dc/c1/afdcc122aa1e38f11bf4f666e4eb197c.jpg',
      },
      {
        id: 567,
        name: 'Hoàng Phúc',
        img: 'https://i.pinimg.com/564x/57/ef/64/57ef64cde10d60ab6c37f11963dbb868.jpg',
      },
      {
        id: 678,
        name: 'Anonymous',
        img: 'https://i.pinimg.com/736x/ca/5b/dd/ca5bdded28614e970c13089610226ed5.jpg',
      },
    ];

    const response = {
      data,
      error: {},
    };

    setTimeout(() => {
      resolve(response);
    }, 5000); // Giả lập độ trễ 1 giây
  });
};

export const getMockCourses = () => {
  return new Promise(resolve => {
    const data = [
      {
        idCourse: 123,
        nameCourse: 'Vue JS Basic Vue JS Basic Vue JS Basic Vue JS Basic Vue JS Basic',
        timeCreated: '2024 09-30 3:00 PM',
        img: 'https://i.pinimg.com/564x/4a/07/48/4a0748d729ce3f3b2d149cb7808c429f.jpg',
      },
      {
        idCourse: 234,
        nameCourse: 'Vue TS Basic Vue TS Basic Vue TS Basic Vue TS Basic Vue TS Basic',
        timeCreated: '2024 09-30 3:00 PM',
        img: 'https://i.pinimg.com/564x/65/eb/73/65eb73e3e0679ece50c9f2c37a362b0e.jpg',
      },
      {
        idCourse: 345,
        nameCourse: '.NET Web Api .NET Web Api .NET Web Api .NET Web Api .NET Web Api',
        timeCreated: '2024 09-30 3:00 PM',
        img: 'https://i.pinimg.com/564x/da/33/98/da33983229bb45d7b2196257bb8754db.jpg',
      },
      {
        idCourse: 567,
        nameCourse: 'FullStack FullStack FullStack FullStack FullStack WEB',
        timeCreated: '2024 09-30 3:00 PM',
        img: 'https://i.pinimg.com/736x/66/9e/47/669e47981b80b93dbaf53c27c1e1650d.jpg',
      },
    ];

    const response = {
      data,
      error: {},
    };

    setTimeout(() => {
      resolve(response);
    }, 1000); // Giả lập độ trễ 1 giây
  });
};

export const getMockComment = () => {
  return new Promise(resolve => {
    const data = [
      {
        id: 1,
        content: 'Khóa học hay quá , tôi muốn học khóa khác.',
        imgUser: mixi,
        nameUser: 'Độ Tầy',
        time: '2 giờ',
        default: true,
      },
      {
        id: 2,
        content: 'Đấm thằng cmt phía dưới :)))',
        imgUser: nhim,
        nameUser: 'Nhi Dầm',
        time: '1 giờ',
        default: false,
      },
      {
        id: 3,
        content: 'Khóa học hay bổ ích,thú dị hehe.',
        imgUser: bo,
        nameUser: 'Bô xăng lửa',
        time: '1 ngày',
        default: true,
      },
      {
        id: 4,
        content: 'Anh tâm đẹp trai quá.',
        imgUser: chip,
        nameUser: 'Chíp già',
        time: '1 Tháng',
        default: false,
      },
      {
        id: 5,
        content: 'Khóa học hay và rẻ so với chất lượng :v',
        imgUser: snake,
        nameUser: 'Anh Ben',
        time: '10 Năm',
        default: true,
      },
    ];

    const response = {
      data,
      error: {},
    };

    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
