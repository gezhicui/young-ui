const argv = require('minimist')(process.argv.slice(2));
const build = argv.build || false;
const baseBuild = build ? '/young-design-docs/' : '/';

export default {
  base: baseBuild,
  themeConfig: {
    siteTitle: false,
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/button/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/gezhicui/young-design' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: '开发中',
              link: '/guild/advanced',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/examples/button/',
            },
            {
              text: 'Icon 图标',
              link: '/examples/icon/',
            },
            {
              text: 'Container 布局容器',
              link: '/examples/container/',
            },
            {
              text: 'Upload 上传',
              link: '/examples/upload/',
            },
          ],
        },
        {
          text: '反馈组件',
          items: [
            {
              text: 'Message 消息提示',
              link: '/examples/message/',
            },
            {
              text: 'Dialog 对话框',
              link: '/examples/dialog/',
            },
          ],
        },
      ],
    },
  },
};
