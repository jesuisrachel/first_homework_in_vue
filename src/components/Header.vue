<template>
    <div>
        <div class="header" v-if="'ok'">
            <div class="header-content">
                <span>
                    <img src="../assets/logo.svg" alt="cruise">
                    <img src="../assets/logo.png" alt="user-portrait">
                </span>
            </div>
        </div>
        <div class="content-fluid">
            <div class="nav">
                <div class="navigator">
                    <div class="navigator-bar icon-dashboard">&nbsp;&nbsp;DASHBOARD</div>
                    <div class="navigator-bar icon-sitemap">&nbsp;&nbsp;AGENT</div>
                    <div class="navigator-bar icon-boat">&nbsp;&nbsp;MY&nbsp;CRUISE</div>
                    <div class="navigator-bar icon-life-bouy">&nbsp;&nbsp;HELP</div>
                </div>
                <div class="history">
                    <div class="history-title">History</div>
                    <div class="history-list">
                        <ul>
                            <li>Coffee</li>
                            <li>Milk</li>
                            <li>Coffee</li>
                            <li>Milk</li>
                            <li>Coffee</li>
                            <li>Milk</li>
                            <li>Coffee</li>
                            <li>Milk</li>
                            <li>Coffee</li>
                            <li>Milk</li>
                            <li>Coffee</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="building" v-for="(item, index) in msg" v-bind:key="index">
                    <div>{{item.title}}</div>
                    <span class="icon-cog"></span>
                    <div>{{item.num}}</div>
                </div>
                <div class="tab">
                    <ul>
                        <li>All</li>
                        <li>Physical</li>
                        <li>Virtual</li>
                    </ul>
                </div>
                <div class="agent"  v-for="(item, index) in items" v-bind:key="index">
                    <img :src="item.src" alt="windows">
                    <div class="detail">
                        <table class="table1">
                            <tr>
                                <td class="icon-desktop"></td>
                                <td><div>&nbsp;fajobjvwbpqiprg.thoughtworks.com&nbsp;&nbsp;</div></td>
                                <td><div><span>Building</span></div></td>
                                <td><div class="icon-info">&nbsp;192.168.0.1&nbsp;&nbsp;</div></td>
                                <td><div class="icon-folder">&nbsp;/var/lib/cruise-agent&nbsp;&nbsp;</div></td>
                            </tr>
                        </table>
                        <table class="table2" v-for="(item,index) in browser" v-bind:key="index">
                            <tr>
                                <td><div class="icon-plus"></div></td>
                                <td><div>{{item.name}}&nbsp;&nbsp;<span class="icon-trash"></span></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <span class="icon-info"></span>
            Copyright&nbsp;2017&nbsp;<strong>Thought</strong>Works
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:[
                {
                    title:"Building",
                    iconClass: "icon-cog",
                    num:3
                },
                {
                    title:"Idle",
                    iconClass: "icon-desktop",
                    num:5
                },
            ],
            browser:[{name:"Firefox"},{name:"Safari"},{name:"Ubuntu"},{name:"Chrome"}],
            items:[{
                src: require("../assets/windows.png")
            },{
                src: require("../assets/debin.png")
            },{
                src: require("../assets/cent_os.png")
            },{
                src: require("../assets/ubuntu.png")
            },{
                src: require("../assets/suse.png")
            }]
        }
    }
}
</script>


<style>
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #2D4054;
    font-size: 14px;
    background: #f3f3f3;
    box-sizing: border-box;
}
.header{
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background: white;
    position: relative;
}
.header-content{
    margin: 0 200px;
}
.header img{
    height: 40px;
} 
.header img:nth-child(2){
    float: right;
    border-radius: 100px;
    border: 1px solid grey;
} 
/* 中间部分 */
.content-fluid{
    width: 1200px;
    height: calc(100vh - 90px);
    overflow-y: scroll;
    margin: auto;
}
/* 左边导航栏 */
.nav{
    width: 20%;
    height: 100%;
    background: #2D4054;
    color: white;
    float: left;
    position: relative;
}
/* 导航栏按钮 */
.navigator-bar{
    height: 45px;
    line-height: 45px;   
    text-align: left;
    padding-left: 30px;
}
.navigator-bar:hover{
    color: #00B4CF;
    background: #435466;
}
/* history部分 */
.history{
    position: absolute;
    bottom: 0px;
    padding: 0 15px;
    text-align: left;
}
.history-title{
    font-size: 24px;
    color: #ccc;
}
.history-list{
    font-size: 12px;
    color: #999;
}
.history-list ul{
    padding: 10px;
    line-height: 20px;
    margin: 0;
}
.history-list li:hover{
    color: #00B4CF;
}
/* 右边部分 */
.content{
    overflow-y: scroll;
}
.building{
    width: 33.3%;
    background:#FF9A2A;
    color: white;
    margin: 15px;
    position: relative;
    float: left;
}
.building div:nth-child(1){
    font: 18px bold;
    position: absolute;
    top: 5px;
    left: 5px;
}
.building span{
    font-size: 144px;
    opacity: 0.2;
}
.building div:nth-child(3){
    font-size: 44px;
    position: absolute;
    right: 5px;
    bottom: 5px;
}
.tab{
    clear: both;
    margin: 0 0 15px 15px;
    height: 50px;
    line-height: 50px;
    background: white;
}
.tab ul{
    padding: 0;
}
.tab ul li{
    float: left;
    color: #2D4054;
    list-style-type: none;
    width: 80px;
    border-right:1px solid #f3f3f3;
}
.tab ul li:hover{
    border-bottom: 3px solid #00B4CF;
    color: #00B4CF;
}
.agent{
    width: 100%;
    height: 100px;
    margin: 0 0 15px 15px;
    background: white;
    position: relative;
}
.agent img{
    left: 0;
    padding: 10px;
    position: absolute;
}
.detail{
    min-height: 100px;
    margin: 0 15px 0 115px
}
.detail table{
    height: 50px;
}
.table1 td:nth-child(1){
    font-size: 18px;
    color: #435466;
}
.table1 td:nth-child(2) div{
    color: #00B4CF;
    width: 250px;
    text-align: left;
}
.table1 td:nth-child(3) div{
    color: white;
    width: 100px;
}
.table1 td:nth-child(3) div span{
    background: #7FBC39;
    padding: 3px 1px;
}
.table1 td:nth-child(4) div{
    text-align: left;
    width: 120px;
}
.table1 td:nth-child(5) div{
    text-align: left;
    width: 200px;
}
.table2{
    float: left;
}
.table2 td:nth-child(1) div{
    font-size:18px;
    background: #00B4CF;
    color: white;
    padding: 1px 3px;                          
}
.table2 td:nth-child(2) div{
    background: #EFEFEF;
    padding: 4px 8px 0 8px;
    margin-right: 10px; 
}
.footer{
    position: fixed;
    bottom: 0; 
    height: 25px;
    line-height: 25px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    background: white;
}
</style>

