import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faWallet,faRightToBracket,faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'
/*
	<link href="css/main.css" rel="stylesheet" type="text/css">	
	<link href="css/framework.css" rel="stylesheet" type="text/css">
	<link href="css/animate.css" rel="stylesheet" type="text/css">
	<link href="css/imagehover.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"></link>*/

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Jumboslot สมัครเล่น สล็อต เล่นได้บนมือถือ สล็อตออนไลน์ ฝากถอนอัตโนมัติ</title>
        <meta name="description" content="Jumboslot สมัครเล่น สล็อต เล่นได้บนมือถือ สล็อตออนไลน์ ฝากถอน SLOT อัตโนมัติ ทำรายการ 30 วินาที มีโปรตลอดวัน บริการ 24 ชั่วโมง" />
        <link rel="canonical" href="https://www.Jumboslot.com"/>
        <meta property="og:locale" content="th_TH" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jumboslot สมัครเล่น สล็อต SLOT ฟรีโบนัสทันที 50% สมัครเลย" />
        <meta property="og:description" content="Jumboslot สมัครเล่น สล็อต เล่นได้ทั้ง แอนดรอยด์ และ iOS ฝากถอน SLOT อัตโนมัติ ทำรายการ 30 วินาที มีโปรตลอดวัน บริการ 24 ชั่วโมง" />
        <meta property="og:url" content="https://www.Jumboslot.com" />
        <meta property="og:site_name" content="Jumboslot" />
        <meta property="og:image" content="https://www.BunnieSlot.comPoto/1-994x559.jpg" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="1040" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jumboslot สมัครเล่น สล็อต SLOT ฟรีโบนัสทันที 50% สมัครเลย" />
        <meta name="twitter:description" content="Jumboslot สมัครเล่น สล็อต เล่นได้ทั้ง แอนดรอยด์ และ iOS ฝากถอน SLOT อัตโนมัติ ทำรายการ 30 วินาที มีโปรตลอดวัน บริการ 24 ชั่วโมง" />
        <meta name="twitter:data1" content="5 นาที"></meta>
        <link rel="icon" href="/logos4.webp" />
      </Head>

      <main className={styles.home + ' ' + styles.blog}>
          <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.head_mc}>
            <div className={styles.tt_l + ' ' + styles.h_linem}>
              <a href="www.google.com" target="_blank">
                <img src="/iconline.webp" alt="Bunnyslot"/>
              </a>
            </div>
          </div>

          <div className={styles.tt_l + ' ' + styles.tt_full}>
            <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.header_bg}>
              <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.header}>
                <a className={styles.tt_l + ' ' + styles.logo_pc}  title="เว็บสล็อตออนไลน์ มีสล็อตทุกค่ายให้เล่น  ฝาก-ถอน เร็ว 10 วินาที" href="www.google.com" target='_blank'>
                <img src="/header.webp" alt="Bunnyslot"/>
                </a>
                <div className={styles.wrapper_b}>
                  <a className={styles.tt_l + ' ' + styles.logo_m} href="www.google.com" target='_blank'>
                  <img alt="Bunnyslot" src="/headLine.webp" width="375" height="170"/>
                  </a>

                  <div className={styles.tt_l + ' ' + styles.tt_head_menu + ' ' + styles.m_mc}>
                    <div className={styles.wrapper_b}>
                        <ul /*id="menu-menu-mobile"*/ className={styles.nav}>
                          <li /*id="menu-item-66" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-66"*/>
                            <a href="/">หน้าหลัก</a>
                          </li>
                          <li /*id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"*/>
                            <a href="/register">สมัครสมาชิก</a>
                          </li>
                          <li /*id="menu-item-74" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"*/>
                            <a href="/gameslot">เกมส์สล็อต</a>
                          </li>
                          <li /*id="menu-item-206" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-206"*/>
                            <a href="/content">บทความ</a>
                          </li>
                          <li /*id="menu-item-207" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-207"*/>
                            <a href="/promotion">โปรโมชั่น</a>
                          </li>
                          <li /*id="menu-item-70" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"*/>
                            <a href="/jackpot">แจ็คพอต</a>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.m_pc}>
                <div className={styles.wrapper}>
                  <div className={styles.tt_l + ' ' + styles.tt_head_menu}>
                      <ul /*id="menu-menu-main"*/  className={styles.nav}>
                        <li /*id="menu-item-402" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-402"*/>
                          <a href="/">หน้าหลัก</a>
                        </li>
                        <li /*id="menu-item-405" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-405"*/>
                          <a href="/register">สมัครสมาชิก</a>
                        </li>
                        <li /*id="menu-item-406" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"*/>
                          <a href="/gameslot">เกมส์สล็อต</a>
                        </li>
                        <li /*id="menu-item-408" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-408"*/>
                          <a href="/content">บทความ</a>
                        </li>
                        <li /*id="menu-item-407" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-407"*/>
                          <a href="/promotion">โปรโมชั่น</a>
                        </li>
                        <li /*id="menu-item-404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"*/>
                          <a href="/jackpot">แจ็คพอต</a>
                        </li>
                        <li /*id="menu-item-404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"*/>
                          <a href="/contact">ติดต่อเรา</a>
                        </li>
                      </ul>
                  </div>
                </div> 
              </div>
            </div>
          </div> 

          <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.tt_txd}>
            <div className={styles.wrapper}>
              <div className={styles.tt_l + ' ' + styles.tt_xsl}/* Sliddddddddddddddd*/>
              
              </div>
            </div>
          </div>



          <div className={styles.wrapper_c}>
            <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.bg_home}>
              <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.sc_t}>
                <div className={styles.wrapper_c}>


                </div>
              </div>
              <div className={styles.tt_r + ' ' + styles.tt_b2x + ' ' + styles.bgtx2}>
                <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.tt_txt_seo}>
                  <h1><span className={styles.text_content}><span className={styles.text_content}>JUMBOSLOT เว็บรวมสล็อตทุกค่าย สุดจ๊วดมากๆ</span><br /></span></h1>
                  <p>JUMBOSLOT.COM ถ้ามีทุกสล็อตออนไลน์ที่คุณอยากเล่น มารวมไว้ที่นี่ให้คุณเล่นกันได้ง่ายๆ อยากเล่นบาคาร่า สล็อต ไฮโล เสือมังกร ป็อกเด้ง ยิงปลา หรือเกมพนันต่างๆ กับค่ายที่คุณชอบ <span className={styles.text_content}><strong>JUMBOSLOT.COM</strong></span> จัดให้ เว็บเดียวมีให้เล่นทุกค่ายเกม เล่นสล็อตกับ jumboslot ตอนนี้ รับโบนัส 60% ทันที โปรสุดแรงจ๊วดๆไปเลย ระบบฝากถอน Auto ทำงานได้ด้วยตัวเองได้เลย ถ้าทำไม่เป็น เรามีเจ้าหน้าที่คอยบริการตลอด 24 ชั่วโมง นึกถึงเว็บพนัน ให้นึกถึง JUMBOSLOT</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.text_content}><strong>JUMBOSLOT</strong></span> เว็บสล็อตที่สุดจ๊วดในขณะนี้ ยุคใหม่ของเว็บพนันที่ครบวงจรที่สุดในที่เดียว เป็นการรวมเอาค่ายสล็อตชั้นนำของโลกเข้ามาไว้ในเว็บเดียว ไม่ว่าจะเป็นแบรนด์ชั้นนำระดับโลก SA Gaming , AE Sexy หรือ Sexy Gaming ของเรานั้นเอง อีกทั้งยังมี Joker Gaming และ PG Slot Game ที่เป็นที่ขึ้นชื่อของสล็อตออนไลน์ พูดถึงสล็อตยังไงก็ต้องคิดถึงสองค่ายนี้ก่อนอันดับต้นๆ และยังมี WM Casino , Dream Gaming (DG) , Pretty Gaming , AMB Poker นี่เรายังขนมาไม่หมด สล็อตไหนดัง คนเล่นเยอะ เราเอามาให้เล่น ระบบการทำงานของเรารวดเร็ว ไม่ยุ่งยาก นอกจากฝากถอนเงินแค่ 10วินาทีแล้ว ระบบสล็อตก็ไม่ยุ่งยาก อยากเข้าเล่นค่ายไหน ก็เข้าเล่นได้เลย ไม่ต้องโยกเงินให้ยุ่งยาก กระเป๋าเดียว ใช้ได้ทุกค่าย ที่นี่เท่านั้น JUMBOSLOT</p>
                </div>
              </div>
              <div className={styles.tt_r + ' ' + styles.tt_b2x + ' ' + styles.bgtx2}>
                <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.tt_txt_seo}>
                  <p><span className={styles.text_content}><strong>JUMBOSLOT</strong></span></p>
                  
                    &nbsp;&nbsp;เดิมพันง่ายๆ ได้เงินเยอะ กับ เกมสล็อต(slot online) ที่ Jumboslot
          เว็บของเรามี เกมสล็อตหาเงิน ที่กำลังมาแรง จากค่ายชั้นนำทั้ง SLOTXO (สล็อตxo) PG SLOT(พีจีสล็อต) JOKER GAME (โจ็กเกอร์เกม) LIVE22(ไลฟ์22) 918KISS(918คิส) AMB Poker(เอเอ็มบี โปกเกอร์) เป็น เกมสล็อต ที่ผู้เล่นนิยมมาก ไม่ว่าท่านจะมีเงินมาก หรือเงินน้อย ก็สามารถเข้าเล่นสนุกกับ สล็อต ยิงปลา บิงโก หรือบาคาร่า ของเราได้อย่างมั่นใจ  ปลอดภัย และมั่นคงอย่างแน่นอน เพราะเราเปิดบริการมาแล้วมากกว่า 8ปี ดังนั้นท่านจึงมั่นใจได้เลยว่าเว็บของเราจะบริการให้ท่านประทับใจได้อย่างแน่นอน
                  
                  <p><img alt="สมัครสมาชิก-jumboslot-2" src="https://secureservercdn.net/160.153.138.53/evx.456.myftpupload.com/wp-content/uploads/2021/04/jumboslot-%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95.png"  className={styles.img11} /></p>

                  <p><img alt="สมัครสมาชิก-jumboslot-2" src="https://jumboslot.com/images/%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3%e0%b8%aa%e0%b8%a1%e0%b8%b2%e0%b8%8a%e0%b8%b4%e0%b8%81.webp" className={styles.img12}/></p>
                  
                </div>
              </div>
              <div className={styles.tt_r + ' ' + styles.tt_b2x + ' ' + styles.bgtx2}>
                <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.tt_txt_seo}>
                  <h1><span className={styles.text_content}><span className={styles.text_content}>ทำเงินง่าย ได้เงินจริง มีเครดิตฟรี ให้ท่านได้ทดลองเล่นกับ ฟรีเครดิต ของเรา</span><br /></span></h1>
                  
                  <p className={styles.text_align}><img alt="" src="https://secureservercdn.net/160.153.138.53/evx.456.myftpupload.com/wp-content/uploads/2021/04/line-jumboslot.jpg" className={styles.img13}/></p>
                  <p className={styles.text_align}><a href="https://lin.ee/8HwzfFD"><img alt="@line-jumboslot-new-01" src="https://jumboslot.com/images/Line@.webp" className={styles.img14}/></a></p>
                  
                  <p>&nbsp; &nbsp; ไม่ว่าจะ&nbsp;<strong><a href="https://www.jumboslot.com/register" rel="noreferrer noopener" target="_blank"><span className={styles.text_content}><strong>สมัครสมาชิก</strong></span></a>&nbsp;</strong>ฝาก-ถอนเงิน มีระบบ&nbsp;<strong>ฝาก ถอน True wallet</strong>&nbsp;ให้บริการอีกด้วย ซึ่งทำให้ท่านทำรายการได้ง่าย ๆ ด้วยระบบอัตโนมัติที่ทันสมัย ทำรายการได้ด้วยตัวเองตลอดเวลา รวดเร็วทันใจ หรือหากเกิดมีปัญหา ติดขัด สามารถ<a href="https://lin.ee/8HwzfFD" rel="noreferrer noopener" target="_blank"><span className={styles.text_content}><strong>ติดต่อแอดมิน</strong></span></a>ของเราได้ตลอดเวลา อย่างไม่มีวันหยุด ให้ประสบการณ์ ในการบริการที่น่าประทับใจ ตลอด 24 ชม. และยังมีทั้งฟรีเครดิต และโปรโมชั่นรองรับทุกช่วงเวลา สะดวกเวลาไหนเข้าเล่นได้เลย เช้า สาย บ่าย เย็น&nbsp;<strong>Jumboslot</strong>&nbsp;มี เกมสล็อต สล็อตออนไลน์ มือถือ ให้เล่นมากกว่า 200 เกม&nbsp;เพียงเป็นสมาชิก&nbsp;<strong>สล็อต</strong>&nbsp;กับเรา ก็เล่นได้อย่างไร้ขีดจำกัด ทุกธีม ทุกแนว พัฒนามาอย่างพิถีพิถัน เพื่อให้ตรงกับความชอบของลูกค้าโดยตรง&nbsp;ยืนยันได้ด้วยสมาชิกกว่า 150,000 คน และผู้ติดตามอีกกว่า 50,000 คน หากท่านไม่เชื่อขอให้ท่านลอง กดเข้ามาดูที่&nbsp;<strong><a href="https://lin.ee/8HwzfFD"><span className={styles.text_content}><strong>Line@</strong></span></a></strong>&nbsp;ของเราที่&nbsp;<strong>@JUMBOSV</strong>&nbsp;ของเราได้เลย</p>
                  
                </div>
              </div>
              <div className={styles.tt_r + ' ' + styles.tt_b2x + ' ' + styles.bgtx2}>
                <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.tt_txt_seo}>
                  <p className={styles.text_align}><img alt="" src="https://secureservercdn.net/160.153.138.53/evx.456.myftpupload.com/wp-content/uploads/2021/04/jumboslot-%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81-%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87.png" /></p>
                  <h1 className={styles.text_align}><span className={styles.text_content}><span className={styles.text_content2}>พบกับแจ็คพอตสล็อตแตกง่ายที่สุด!</span><br /></span></h1>
                  <p>แจ็คพอต&nbsp;<strong><a href="https://www.jumboslot.com/gameslot" rel="noreferrer noopener" target="_blank"><span className={styles.text_content}><strong>เกมสล็อต</strong></span></a></strong>&nbsp;แจกทุกช่วงเวลา ทุกชั่วโมงตลอดทั้งวัน ไม่ว่าจะเข้าเล่นตอนไหนก็ลุ้นได้ตลอด มีเกมมาย ที่เลือกเล่นได้ตามแนวของทุกคน อย่างอิสระ ทันใจตอบสนองรวดเร็วทุกการเข้าใช้งาน</p>

                  <p>รับรองว่าได้กลับไปตั้งตัวได้เลยแน่นอน เกมสล็อต เพราะค่ายต่างๆของเรา เป็นค่ายที่มาตราฐานสูง มีเกมคุณภาพดี ครองใจเหล่านักเดิมพันมาหลายปี เนื่องด้วยเป็น เกมสล็อต อันดับหนึ่ง ที่เล่นแล้วจ่ายเงินให้กับลูกค้า อย่างมหาศาล มีเงินหมุนเวียนตลอด</p>

                  <p>ใครที่กำลังตามหา เกมทำเงิน ที่ไม่อยากลงแรงให้เหนื่อย กำเงินมาหลักสิบ หลักร้อยบาท ก็สามารถ&nbsp;<em><strong><a href="https://www.jumboslot.com/promotion" rel="noreferrer noopener" target="_blank"><span className={styles.text_content}><strong>เล่นสล็อต พร้อมโปรโมชั่น</strong></span></a></strong></em>&nbsp;เดิมพันขั้นต่ำเพียงตาละ 1 บาท ก็เล่นได้ หมุนได้อย่างสะใจไม่มีข้อผูกมัด ถอนเงิน ได้ตลอดเวลาที่ต้องการ&nbsp;<strong><a href="https://www.jumboslot.com/register" rel="noreferrer noopener" target="_blank"><span className={styles.text_content}><strong>สมัครสมาชิก</strong></span></a></strong>&nbsp;<strong>Jumboslot</strong>&nbsp;ครั้งแรกรับโบนัส ทันที</p>

                  <p>และสามารถเลือกรับโบนัส หรือไม่รับก็ได้ตามที่สะดวก หากเลือกรับโบนัส ต้องทำเทิร์นตามที่เว็บไซต์กำหนด ให้ยอดถึงก่อนจึงจะสามารถถอนเงินได้ หากไม่รับโบนัส ไม่ต้องทำเทิร์น สามารถถอนได้เลย ไม่มีขั้นต่ำ ติดต่อสอบถามแอดมินได้ตลอด 24 ชั่วโมง ไม่มีวันหยุด</p>

                  <p className={styles.text_align}><img alt="" src="https://secureservercdn.net/160.153.138.53/evx.456.myftpupload.com/wp-content/uploads/2021/04/bigwin-roma-jumboslot.jpg" className={styles.img15} /></p>

                  <p className={styles.text_align}>อย่างในรูปนี้ จากทุน 30 บาท รับโบนัสฝากแรก 70 บาท เป็นเครดิต 100 บาท แต่เล่นเพียง BET ละ 10 บาท ท่านจะเห็นว่าสามารถทำแจ็คพอตได้มากมายหลายเท่า สามารถถอนออกได้ทันที</p>

                </div>
              </div>
            </div>
          </div>







          <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.footer}>
            <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.footer_cx}>
              <div className={styles.wrapper_c}>
                <div className={styles.tt_l + ' ' + styles.c_footer}>
                  <div className={styles.tt_l + ' ' + styles.tt_lix}>
                    <strong>สล็อตออนไลน์</strong>
                    <span className={styles.text_footer}><a href='/promotion_main'>Test1</a></span>
                  </div>
                  <div className={styles.tt_l + ' ' + styles.tt_lix + ' ' + styles.cent}>
                    <strong>โปรโมชั่นอัพเดท</strong>
                    <span className={styles.text_footer}><a href='/promotion_sub'>Test2</a></span>
                  </div>
                  <div className={styles.tt_l + ' ' + styles.tt_lix}>
                    <strong>อื่นๆ ที่เกี่ยวข้อง</strong>
                    <span className={styles.text_footer}><a href='/'> หน้าหลัก</a> </span>
                    <span className={styles.text_footer}><a href='/gameslot'> ทดลองเล่น</a> </span>
                    <span className={styles.text_footer}><a href='/content'> บทความ</a> </span>
                    <span className={styles.text_footer}><a href='/contact'> ติดต่อเรา</a> </span>
                    <span className={styles.text_footer}><a href='sitemap-jumboslot.xml' target="_blank"> Sitemap</a></span>
                    
                  </div>
                </div>
                
                <div className={styles.tt_r + ' ' + styles.copyright_footer}>
                  <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.game_ft + ' ' + styles.mb_20}>
                   <a href='www.link_contact.com' target='blank'><img src='/contact/SlotXO.webp' alt='#' /></a>
                   <a href='www.link_contact.com' target='blank'><img src='/contact/Live22.webp' alt='#' /></a>
                   <a href='www.link_contact.com' target='blank'><img src='/contact/PG Game.webp' alt='#' /></a>
                   <a href='www.link_contact.com' target='blank'><img src='/contact/Joker Game.webp' alt='#' /></a>
                   <a href='www.link_contact.com' target='blank'><img src='/contact/918Kiss.webp' alt='#' /></a>
                  </div>

                  <div className={styles.tt_l + ' ' + styles.tt_full + ' ' + styles.mb_10}>
                    <a href="www.link_line.com" target="_blank">
                      <img className={styles.img_line} src="/images/Line_add4.webp" alt="Bunnyslot"/>
                      <span className={styles.tx_li_f}> ID LINE  I <strong className={styles.tx_li}>@BUNNIESV</strong></span> 
                    </a>
                  </div>

                  Copyright 2021 © BunnieSlot.com All Rights Reserved. 
                </div>
              </div>
            </div> 
          </div> 
          <div className={styles.fix_footer}>
            <a href="/register"><span className={styles.link_ico + ' ' + styles.ico_1}><FontAwesomeIcon icon={faRightToBracket} /></span> <strong>สมัครสมาชิก</strong></a>
            <a href="/promotion"><span className={styles.link_ico + ' ' + styles.ico_2}><FontAwesomeIcon icon={faUserPlus} /></span> <strong>โปรโมขั่น</strong></a>
            <a href="/content"><span className={styles.link_ico + ' ' + styles.ico_3}><FontAwesomeIcon icon={faWallet} /></span> <strong>บทความ</strong></a>
            <a href="/gameplay"><span className={styles.link_ico + ' ' + styles.ico_4}><FontAwesomeIcon icon={faSackDollar} /></span> <strong>แจ็คพอต</strong></a>
            <a className={styles.last}  href="/contact"><span className={styles.link_ico + ' ' + styles.ico_5}><FontAwesomeIcon icon={faLine} /></span> <strong>ติดต่อเรา</strong></a>
          </div> 
      </main>
    </div>
  )
}

export default Home
