const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/home/ui',
        children: [
            {
                title: '按钮',
                key: '/home/ui/buttons',
            }, {
                title: '弹窗',
                key: '/home/ui/modals',
            }, {
                title: 'Loading',
                key: '/home/ui/loading',
            }, {
                title: '通知提醒',
                key: '/home/ui/notification',
            }, {
                title: '全局Message',
                key: '/home/ui/message',
            }, {
                title: 'Tab标签',
                key: '/home/ui/tabs',
            }, {
                title: '图片画廊',
                key: '/home/ui/gallery',
            }, {
                title: '轮播图',
                key: '/home/ui/carousel',
            },

        ]

    }, {
        title: '表格',
        key: '/home/table',
        children: [

            {
                title: '基础表格',
                key: '/home/table/basic',
            }, {
                title: '高级表格',
                key: '/home/table/high',
            },


        ]
    },
    {
        title: '富文本',
        key: '/home/rich',
    },
    {
        title: '城市管理',
        key: '/home/city',
    },
    {
        title: '订单管理',
        key: '/home/order',
        
    },
  
  
   
    {
        title: '统计图',
        key: '/home/charts',
 children:[
    {
        title: '柱形图',
        key: '/home/charts/pic',
    },
    {
        title: '饼图',
        key: '/home/charts/bar',
    },
    {
        title: '折线图',
        key: '/home/charts/line',
    },
 ]

    },
  
 



];
export default menuList;