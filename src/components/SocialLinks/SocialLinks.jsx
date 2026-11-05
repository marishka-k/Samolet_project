import { SOCIAL_LINKS } from '../../data/content';
import { cx } from '../../utils/cx';
import { VkIcon, ZenIcon, TelegramIcon } from '../Icons/Icons';
import styles from './SocialLinks.module.css';

const ICONS = { vk: VkIcon, zen: ZenIcon, telegram: TelegramIcon };

export default function SocialLinks({ className }) {
  return (
    <ul className={cx(styles.list, className)}>
      {SOCIAL_LINKS.map(({ id, label, href }) => {
        const Icon = ICONS[id];
        return (
          <li key={id}>
            <a className={styles.link} href={href} aria-label={label}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
