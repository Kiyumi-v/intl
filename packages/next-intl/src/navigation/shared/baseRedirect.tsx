import {redirect as nextRedirect} from 'next/navigation';
import {
  AllLocales,
  LocalePrefix,
  ParametersExceptFirst
} from '../../shared/types';
import {prefixPathname} from '../../shared/utils';

export default function baseRedirect(
  params: {
    pathname: string;
    locale: AllLocales[number];
    localePrefix?: LocalePrefix;
  },
  ...args: ParametersExceptFirst<typeof nextRedirect>
) {
  const localizedPathname =
    params.localePrefix === 'never'
      ? params.pathname
      : prefixPathname(params.locale, params.pathname);
  return nextRedirect(localizedPathname, ...args);
}
