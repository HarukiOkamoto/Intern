export type MockData = {
  [key: string]: HeadArea;
};

export type HeadArea = {
  BigTitle: string;
  intro: string;
  contents: content[];
};

export type content = {
  ContentTitle: string;
  ContentIntro: string;
  services: service[];
};

export type service = {
  ServiceTitle: string;
  ServiceIntro: string;
  ServiceStar: string;
  ServicePrice: number;
};

export const Mock: MockData = {
  '1': {
    BigTitle: 'Section 1',
    intro: 'Introduction to Section 1',
    contents: [
      {
        ContentTitle: 'Content 1',
        ContentIntro: 'Introduction to Content 1',
        services: [
          {
            ServiceTitle: 'Service 1',
            ServiceIntro: 'Introduction to Service 1',
            ServiceStar: '5',
            ServicePrice: 50,
          },
          {
            ServiceTitle: 'Service 2',
            ServiceIntro: 'Introduction to Service 2',
            ServiceStar: '4',
            ServicePrice: 30,
          },
        ],
      },
      {
        ContentTitle: 'Content 2',
        ContentIntro: 'Introduction to Content 1',
        services: [
          {
            ServiceTitle: 'Service 1',
            ServiceIntro: 'Introduction to Service 1',
            ServiceStar: '5',
            ServicePrice: 80,
          },
          {
            ServiceTitle: 'Service 2',
            ServiceIntro: 'Introduction to Service 2',
            ServiceStar: '4',
            ServicePrice: 90,
          },
        ],
      },
    ],
  },
  '2': {
    BigTitle: 'Section 2',
    intro: 'Introduction to Section 2',
    contents: [
      {
        ContentTitle: 'Content 2',
        ContentIntro: 'Introduction to Content 2',
        services: [
          {
            ServiceTitle: 'Service 3',
            ServiceIntro: 'Introduction to Service 3',
            ServiceStar: '4.5',
            ServicePrice: 40,
          },
          {
            ServiceTitle: 'Service 4',
            ServiceIntro: 'Introduction to Service 4',
            ServiceStar: '3.5',
            ServicePrice: 25,
          },
        ],
      },
      // Add more content entries if needed
    ],
  },
  // Add more sections if needed
};
