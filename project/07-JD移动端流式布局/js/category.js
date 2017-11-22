window.onload = function () {
    /*1.区域滚动效果*/
    /*2.本质利用touch相关事件滑动效果*/
    /*3.本身元素滚动效果（内容溢出了，出现滚动条） 用户体验不一致，ios 缓冲（阻尼）效果 ,滚动条样式不一致*/
    /*4.对html结构的要求：父容器+子容器 子容器在父容器内来回的滑动 */
    /*5. 使用一个区域滚动插件 iscroll.js */
    /*6. 下载：https://github.com/cubiq/iscroll*/
    /*7. 引入：<script src="js/iscroll.js"></script>*/
    /*8. 安装要求的结构去改好*/
    /*9. 初始化*/
    /*10. 子容器的尺寸比父容器的尺寸要大  产生滑动效果*/
    new IScroll(document.querySelector('.jd_left_cate'));
    // 默认 y方向可以滑动x方向不能活动 
    new IScroll(document.querySelector('.jd_right_cate'),{
        scrollX:true
    });
}