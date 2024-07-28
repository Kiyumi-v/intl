import {locales} from '../navigation';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <nav style={{display: 'flex', gap: 10}}>
      {locales.map((locale) => (
        <NavigationLink key={locale} href="/" locale={locale}>
          {locale}
        </NavigationLink>
      ))}
    </nav>
  );
}
