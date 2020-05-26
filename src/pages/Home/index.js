import './style.modules.scss'
import React, { Component } from 'react'
// import Header from '@/components/Header'
export default class Home extends Component {
    changeImg1(index) {
        this.imgIndex1 = index
    }
    changeImg2(index) {
        this.imgIndex2 = index
    }
    changeImg3(index) {
        this.imgIndex3 = index
    }
    login() {
        window.removeEventListener("resize", this.watchWidth);
        let routeData = this.$router.resolve({
            name: "appLogin"
        });
        window.open(routeData.href, "_blank");
    }
    render(){
        return (
            <div>首页</div>
        )
    }
    // render() {
    //     return (
    //         <div className='home-wrap'>
    //             <Header></Header>
    //             <div
    //                 className='content-top clearfix'
    //                 style={{ backgroundImage: `url(${_global.imgUrl + 'COCOCORE/guanwang/1.png'})` }}
    //             >
    //                 <div className='appInfo'>
    //                     <p style={{ marginBottom: '35px' }}>企业星·云服务</p>
    //                     <div>企业星云是一个提供企业营销、企业服务、云端办公于一体的B2B互联网平台。</div>

    //                     <div className='free-use hoverBlack' onClick={login}>免费使用</div>
    //                 </div>
    //             </div>
    //             <div className="content-nav">
    //                 <div className="content-title">
    //                     <p>我们的服务</p>
    //                 </div>
    //                 <div className="nav-main">
    //                     <div
    //                         onMouseenter={changeImg1(2)} onMouseleave={changeImg1(3)}
    //                         className={showType == 1 ? 'content-item activeItem' : 'content-item'}
    //                         style={showType == 1 || imgIndex1 == 2 ? `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/2.png'})` : `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/3.png'})`}
    //                         onClick="showType = 1"
    //                     >
    //                         <span className="top">云端办公</span>
    //                     </div>
    //                     <div
    //                         onMouseenter={changeImg2(4)} onMouseleave={changeImg2(5)}
    //                         className={showType == 2 ? 'content-item activeItem' : 'content-item'}
    //                         onClick="showType = 2"
    //                         style={showType == 2 || imgIndex1 == 4 ? `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/4.png'})` : `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/5.png'})`}
    //                     >
    //                         <span className="top">博览</span>
    //                     </div>
    //                     <div
    //                         onMouseenter={changeImg3(6)} onMouseleave={changeImg3(7)}
    //                         className={showType == 3 ? 'content-item activeItem' : 'content-item'}
    //                         onClick="showType = 3"
    //                         style={showType == 3 || imgIndex3 == 6 ? `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/6.png'})` : `background-image: url(${_global.imgUrl + 'COCOCORE/guanwang/7.png'})`}
    //                     >
    //                         <span className="top">企业服务</span>
    //                     </div>
    //                 </div>
    //                 <div className="content-main" v-if="showType==2">
    //                     <div className="white-box">
    //                         <img src={`${_global.imgUrl}` + 'COCOCORE/guanwang/8.png'} alt />
    //                         <div className="detail-top">博览</div>
    //                         <div
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '46px', lineHeight: '38px', color: '#313131' }}
    //                         >入驻企业星云即可定制企业商务空间，凸显企业优势，打造品牌影响力，覆盖更多潜在客户，全方面强化企业营销广度和深度。*24小时全天候待命。</div>
    //                     </div>
    //                     <div className="gray-box">
    //                         <div
    //                             className="eng"
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '43px', lineHeight: '38px', color: '#9B9B9B', backgroundColor: '#F8F9FC' }}
    //                         >You can customize the BizSpace, highlight the advantages of the enterprise, build brand influence, cover more potential customers, and strengthen the breadth and depth of enterprise marketing in all aspects.</div>
    //                         <div className="lookMore hoverOrg" onClick={lookMore}>查看更多</div>
    //                     </div>
    //                 </div>
    //                 <div className="content-main" v-if="showType==1">
    //                     <div className="white-box">
    //                         <img src={`${_global.imgUrl}` + 'COCOCORE/guanwang/9.png'} alt />
    //                         <div className="detail-top">云端办公</div>
    //                         <div
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '46px', lineHeight: '38px', color: '#313131' }}
    //                         >员工随时随地多端办公，突破办公环境限制，亲临一线市场，全员协作，7*24小时全天候待命。</div>
    //                     </div>
    //                     <div className="gray-box">
    //                         <div
    //                             className="eng"
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '43px', lineHeight: '38px', color: '#9B9B9B', backgroundColor: '#F8F9FC' }}
    //                         >Employees work at any time and place, break through the restrictions of office environment, visit the first-line market in person, cooperate with all staff, and stand by 24 / 7.</div>
    //                         <div className="lookMore hoverOrg" onClick={lookMore}>查看更多</div>
    //                     </div>
    //                 </div>
    //                 <div className="content-main" v-if="showType==3">
    //                     <div className="white-box">
    //                         <img style={{ width: '491px', height: '448px', top: '30px' }} src={`${_global.imgUrl}` + 'COCOCORE/guanwang/10.png'} alt />
    //                         <div className="detail-top">企业服务</div>
    //                         <div
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '46px', lineHeight: '38px', color: '#313131' }}
    //                         >专业的企业服务，覆盖代记账、财税、知识产权、人力资源、IT服务等诸多领域，满足企业经营和业务发展需求，为企业降本增效。</div>
    //                     </div>
    //                     <div className="gray-box">
    //                         <div
    //                             className="eng"
    //                             style={{ minWidth: '500px', fontSize: '16px', letterSpacing: '1px', marginTop: '43px', lineHeight: '38px', color: '#9B9B9B', backgroundColor: '#F8F9FC' }}
    //                         >Professional enterprise services, covering bookkeeping, finance and taxation, intellectual property, human resources, it services and many other fields, meet the needs of enterprise operation and business development, and reduce costs and increase costs for enterprises</div>
    //                         <div className="lookMore hoverOrg" onClick={lookMore}>查看更多</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="partner">
    //                 <div>
    //                     <p style={{ marginBottom: '20px' }}>他们正在使用企业星云</p>
    //                     <p style={{ fontSize: '22px', color: '#707070' }}>越来越多的企业使用企业星云开始提高生产效率</p>
    //                 </div>
    //                 <div
    //                     className="partnerLogo"
    //                     style={`background-image:url(${_global.imgUrl + 'COCOCORE/guanwang/11.png'})`}
    //                 ></div>
    //             </div>
    //             <vfooter></vfooter>
    //         </div>
    //     )
    // }
}