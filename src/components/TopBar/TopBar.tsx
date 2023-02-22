import { TruckIcon } from '../common/SvgIcons/TruckIcon';
import { CheckCircleIcon } from '../common/SvgIcons/CheckCircleIcon';
import { PhoneIcon } from '../common/SvgIcons/PhoneIcon';
import { MailIcon } from '../common/SvgIcons/MailIcon';
import { FacebookIcon } from '../common/SvgIcons/FacebookIcon';
import { YoutubeIcon } from '../common/SvgIcons/YoutubeIcon';
import { TwitterIcon } from '../common/SvgIcons/TwitterIcon';

import style from './TopBar.module.css';

export const TopBar = () => {

  return (
    <div className={style.top}>
      <div className={style.topBoxItem}>
        <TruckIcon/>
        <p className={style.topBoxItemText}>Wysyłka <span className={style.spanFree}>gratis</span> od 80 zł</p>
      </div>
      <div className={style.topBoxItem}>
        <CheckCircleIcon/>
        <p className={style.topBoxItemText}><span className={style.spanGuarantee}>Gwarancja</span> jakości</p>
      </div>
      <div className={style.topBoxItem}>
        <PhoneIcon/>
        <p className={style.topBoxItemText}><a href="tel:+48-123-456-789">+48 123 456 789</a></p>
      </div>
      <div className={style.topBoxItem}>
        <a href="mailto:info@herbacianyzakatek.pl"><MailIcon/></a>
        <a href="https://facebook.com" target="_blank"><FacebookIcon/></a>
        <a href="https://youtube.com" target="_blank"><YoutubeIcon/></a>
        <a href="https://twitter.com" target="_blank"><TwitterIcon/></a>
      </div>
    </div>
  );
};