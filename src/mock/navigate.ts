import Mock from 'mockjs';
import setupMock from '@/utils/setupMock';

const getNavigateList = () => {
  return [
    {
      id: 1,
      title: '推荐',
      items: [
        {
          id: 1,
          title: 'AI奇大',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://chat.aiqida.com',
        },
        {
          id: 2,
          title: 'ChatGPT',
          logo: '',
          proxyFlag: true,
          rateValue: 5,
          url: 'https://chat.openai.com',
        },
        {
          id: 3,
          title: 'Stable Diffusion',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://stablediffusionweb.com',
        },
        {
          id: 4,
          title: 'runway',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://runwayml.com',
        },
      ],
    },
    {
      id: 2,
      title: '对话',
      items: [
        {
          id: 1,
          title: 'AI奇大',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://chat.aiqida.com',
        },
        {
          id: 2,
          title: 'ChatGPT',
          logo: '',
          proxyFlag: true,
          rateValue: 5,
          url: 'https://chat.openai.com',
        },
        {
          id: 8,
          title: 'Bard',
          logo: '',
          proxyFlag: true,
          rateValue: 4.5,
          url: 'https://bard.google.com',
        },
        {
          id: 9,
          title: 'New Bing',
          logo: '',
          proxyFlag: true,
          rateValue: 4.5,
          url: 'https://www.bing.com/new',
        },
        {
          id: 10,
          title: 'Claude',
          logo: '',
          proxyFlag: true,
          rateValue: 4.5,
          url: 'https://claude.ai',
        },
      ],
    },
    {
      id: 3,
      title: '绘图',
      items: [
        {
          id: 3,
          title: 'Stable Diffusion',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://stablediffusionweb.com',
        },
        {
          id: 5,
          title: 'Midjourney',
          logo: '',
          proxyFlag: true,
          rateValue: 5,
          url: 'https://www.midjourney.com',
        },
        {
          id: 6,
          title: 'Adobe Firefly',
          logo: '',
          proxyFlag: true,
          rateValue: 5,
          url: 'https://firefly.adobe.com',
        },
        {
          id: 7,
          title: 'Free Image',
          logo: '',
          proxyFlag: false,
          rateValue: 4.5,
          url: 'https://freeaikit.com/tools/image-generator',
        },
      ],
    },
    {
      id: 4,
      title: '视频',
      items: [
        {
          id: 4,
          title: 'runway',
          logo: '',
          proxyFlag: false,
          rateValue: 5,
          url: 'https://runwayml.com',
        },
      ],
    },
  ];
};

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/navigate/listByCategory'), () => {
      return getNavigateList();
    });
  },
});
