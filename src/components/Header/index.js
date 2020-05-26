import React, { Component } from "react";
export default class Header extends Component() {
    render() {
        return (
            <div>头</div>
        )
        // return (
        //     <div className={scollTrue ? 'scollTrue Vheader' : 'Vheader'}>
        //         <div className="nav-top">
        //             <ul className="nav-bar">
        //                 <li onClick={goNavDetail}>
        //                     <img src="@/assets/images/logoNav.png" alt />
        //                 </li>
        //                 <li onClick={goNavDetail('new')} className={navIndex == 0 ? 'nav-item activeNav' : 'nav-item'}>首页</li>
        //                 <li onClick={goNavDetail('operate')} className={navIndex == 1 ? 'nav-item activeNav' : 'nav-item'}>博览</li>
        //                 <li
        //                     onClick={goNavDetail('cloudOffice')}
        //                     className={navIndex == 2 ? 'nav-item activeNav' : 'nav-item'}
        //                 >云端办公</li>
        //                 <li
        //                     onClick={goNavDetail('service')}
        //                     className={navIndex == 3 ? 'nav-item activeNav' : 'nav-item'}
        //                 >企业服务</li>
        //                 <li onClick={goNavDetail('download')} className={navIndex == 4 ? 'nav-item activeNav' : 'nav-item'}>下载</li>
        //             </ul>
        //             <div className="vLoggedin">
        //                 <img onClick={toggleIdentity} className="isUser" src={(this.$store.state.user.userInfo.headPortraitUrl || this.$store.state.user.userInfo.photo ? _global.imgUrl + (this.$store.state.user.userInfo.headPortraitUrl || this.$store.state.user.userInfo.photo) : require('@/assets/images/deuser.png'))}></img>
        //             </div>
        //             <div className="btn-box">
        //                 <span className="login-btn" onClick={login}>登录</span>
        //                 <span className="register-btn hoverBlack" onClick={login}>免费注册</span>
        //             </div>
        //         </div>
        //     </div>
        // )

    }
}