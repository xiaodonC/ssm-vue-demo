import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      hidden: true,
      component: Home
    },
    {
      path: '/',
      component: Home,
      name: 'Upload',
      iconCls: 'el-icon-upload',//图标样式class
      children: [
          { path: '/upload_forecast',  name: 'Forecast' },
          { path: '/upload_sit',  name: 'Stock in Transit' },
          { path: '/upload_commit',  name: 'Commit' },
          { path: '/upload_po',  name: 'PO' },
          { path: '/upload_shipment',  name: 'Shipment' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'Search',
      iconCls: 'el-icon-search',//图标样式class
      children: [
          { path: '/search_forecast',  name: 'Forecast' },
          { path: '/search_po',  name: 'PO' },
          { path: '/search_shipment',  name: 'Shipment' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-date',//图标样式class
      leaf: true,//只有一个节点
      children: [
          { path: '/shortage',  name: 'Shortage' },
      ]
    }
  ]
})
