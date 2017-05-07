<template>
	<div class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
			{{collasped?'':logoName}}
			</el-col>
			<!-- 折叠导航栏 -->
			<el-col :span="10">
				<div class="tools" @click="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<!-- 用户信息 -->
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.userPic" /> {{userName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item  @click.native="signout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>

		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collasped':'menu-expanded'">
				<el-menu class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened v-show="!collapsed" default-active="1">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
						<el-menu-item index="1-3">选项3</el-menu-item>
						<el-menu-item index="1-4">选项4</el-menu-item>
						<el-menu-item index="1-5">选项5</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-submenu>
				</el-menu>
			</aside>
		</el-col>
	</div>


</template>

<script>
export default {
	name: "home",
	data() {
		return {
			logoName:'Smart supply manager',
			collapsed:false,
			userName: '',
			userPic: ''
		}
	},
	methods: {
		collapse: function() {
			this.collapsed=!this.collapsed;
		},
		signout: function() {
			alert('已经退出')
		}
	}
}
</script>

<style scoped>

.container{
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
.header{
	height: 60px;
	line-height: 60px;
	background: #20a0ff;
	color:#fff;
}
.logo{
	height:60px;
	font-size: 20px;
	padding-left:10px;
	padding-right:10px;
	text-align: center;
	border-color: rgba(238,241,146,0.3);
	border-right-width: 1px;
	border-right-style: solid;
}
.logo-width{
	width:230px;
}
.logo-collapse-width{
	width:60px
}
.tools{
	padding: 0px 23px;
	width:14px;
	height: 60px;
	line-height: 60px;
	cursor: pointer;
}
.userinfo {
	text-align: right;
	padding-right: 35px;
	float: right;
}
.userinfo-inner {
	cursor: pointer;
	color:#fff;
}
img {
	width: 40px;
	height: 40px;
	border-radius: 20px;
	margin: 10px 0px 10px 10px;
	float: right;
}
.main {
	display: flex;
	// background: #324057;
	position: absolute;
	top: 60px;
	bottom: 0px;
	overflow: hidden;
}
aside {
	flex:0 0 230px;
	width: 230px;
}
.el-menu{
	height: 100%;
}
.menu-collapsed{
	flex:0 0 60px;
	width: 60px;
}
.menu-expanded{
	flex:0 0 230px;
	width: 230px;
}














</style>