<template>
    <div>
        <div class="header">
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
                <div class="building">
                    <div>Building</div>
                    <span class="icon-cog"></span>
                    <div>3</div>
                </div>
                <div class="building">
                    <div>Idle</div>
                    <span class="icon-cog"></span>
                    <div>3</div>
                </div>
                <div class="tab">
                    <ul>
                        <li>All</li>
                        <li>Physical</li>
                        <li>Virtual</li>
                    </ul>
                </div>
                <div class="agent">
                    <img src="../assets/windows.png" alt="windows">
                    <div class="upper">
                        <div class="icon-desktop"><span>&nbsp;fajobjvwbpqiprg.thoughtworks.com</span></div>
                    </div>
                    <div class="lower"></div>
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
    overflow: hidden;
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
    height: 100%;
    overflow: hidden;
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
}
.agent img{
    float: left;
    padding: 10px;
}
.icon-desktop{
    font-size: 16px;
    color: #efefef;
}
.icon-desktop span{
    color: #00B4CF;
}
.upper{
    height: 50%;
    float: left;
    line-height: 50%;
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

