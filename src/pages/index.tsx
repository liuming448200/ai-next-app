import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import {
  Grid,
  Card,
  Space,
  Avatar,
  Typography,
  Layout,
  Menu,
  Divider,
  Tag,
  Rate,
  Modal,
  Button,
  Link,
} from '@arco-design/web-react';
import { IconArrowRight } from '@arco-design/web-react/icon';
import styles from './index.module.less';
import weixin from '@/assets/weixin.jpg';
import Image from 'next/image';
import axios from 'axios';
import wechat from '@/assets/wechat.jpg';
import qrcode from '@/assets/qrcode.png';

const Header = Layout.Header;
const Content = Layout.Content;

const MenuItem = Menu.Item;

const GridItem = Grid.GridItem;
const Text = Typography.Text;

const createContainer = (parentClassName: string) => {
  const div = document.createElement('div');
  div.classList.add(parentClassName);
  window.document.body.append(div);
  return {
    element: div,
    destroy: () => {
      window.document.body.removeChild(div);
    },
  };
};

const Main = ({ item, children }) => {
  const { title, logo, proxyFlag, rateValue } = item;
  return (
    <Space
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Space>
        {/* <Avatar
          style={{
            backgroundColor: '#165DFF',
          }}
          size={28}
        >
          A
        </Avatar> */}
        <Space direction="vertical" className={styles.nameWrapper}>
          <Space>
            <Text>{title}</Text>
            {proxyFlag ? <Tag color="red">科学上网</Tag> : null}
          </Space>
          <Rate readonly defaultValue={rateValue} allowHalf />
        </Space>
      </Space>
      {children}
    </Space>
  );
};

export interface NavigateItemData {
  id: number;
  title: string;
  logo: string;
  proxyFlag: boolean;
  rateValue: number;
  url: string;
}

export interface NavigateCategoryItemData {
  id: number;
  title: string;
  items: NavigateItemData[];
}

export type NavigateCategoryListType = NavigateCategoryItemData[];

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [sourceData, setSourceData] = useState<NavigateCategoryListType>([]);

  function fetchSourceData(showLoading = true) {
    showLoading && setLoading(true);
    axios
      .get('/api/navigate/listByCategory')
      .then((res) => {
        setSourceData(res.data);
      })
      .finally(() => {
        showLoading && setLoading(false);
      });
  }

  const getNavigateList = (): NavigateCategoryListType => {
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

  useEffect(() => {
    // fetchSourceData();
    const data: any = getNavigateList();
    setSourceData(data);
  }, []);

  const current = () => {
    const container = createContainer('contact-wrapper');
    const modal = Modal.info({
      closable: true,
      simple: true,
      alignCenter: false,
      title: '请扫码获取前沿资讯',
      onCancel: () => {
        modal.close();
        container.destroy();
      },
      content: <Image src={wechat} />,
      getPopupContainer: () => {
        return container.element;
      },
      footer: null,
    });
  };

  const contact = () => {
    const container = createContainer('contact-wrapper');
    const modal = Modal.info({
      closable: true,
      simple: true,
      alignCenter: false,
      title: '请扫码添加客服',
      onCancel: () => {
        modal.close();
        container.destroy();
      },
      content: <Image src={weixin} />,
      getPopupContainer: () => {
        return container.element;
      },
      footer: null,
    });
  };

  const communicate = () => {
    const container = createContainer('contact-wrapper');
    const modal = Modal.info({
      closable: true,
      simple: true,
      alignCenter: false,
      title: '入群学习交流',
      onCancel: () => {
        modal.close();
        container.destroy();
      },
      content: <Image src={qrcode} />,
      getPopupContainer: () => {
        return container.element;
      },
      footer: null,
    });
  };

  return (
    <div className={styles.firstPageWrapper}>
      <Layout>
        <Header>
          <Menu mode="horizontal">
            <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
              <div
                style={{
                  width: 80,
                  height: 30,
                  borderRadius: 2,
                  background: '#ffffff',
                  cursor: 'text',
                  color: 'rgb(var(--primary-6))',
                  fontWeight: 'bold',
                }}
              >
                AI加油站
              </div>
            </MenuItem>
            <MenuItem key="1" onClick={current}>
              最新动态
            </MenuItem>
            <MenuItem key="2" onClick={contact}>
              联系我们
            </MenuItem>
            <MenuItem key="3" onClick={communicate}>
              学习交流
            </MenuItem>
          </Menu>
        </Header>
        <Divider />
        {sourceData.map((data) => {
          const { id, title, items } = data;
          return (
            <Content key={id}>
              <div className={styles.categoryWrapper}>
                <Space
                  style={{
                    marginBottom: 16,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
                >
                  {title}
                </Space>
                <Grid
                  className={styles.gridResponsive}
                  cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                  colGap={12}
                  rowGap={16}
                >
                  {items.map((item) => {
                    const { id, url } = item;
                    return (
                      <GridItem className={styles.item} key={id}>
                        <Link
                          onClick={() => {
                            window.open(url);
                          }}
                          style={{ display: 'inherit' }}
                        >
                          <Card bordered>
                            <Main item={item}>
                              <span>
                                <IconArrowRight
                                  style={{
                                    cursor: 'pointer',
                                  }}
                                />
                              </span>
                            </Main>
                          </Card>
                        </Link>
                      </GridItem>
                    );
                  })}
                </Grid>
              </div>
            </Content>
          );
        })}
      </Layout>
    </div>
  );
};

export default Home;
