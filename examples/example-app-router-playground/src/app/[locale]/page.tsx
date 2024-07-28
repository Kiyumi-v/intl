import {useTranslations} from 'next-intl';
import Navigation from '@/components/Navigation';

function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <Navigation />
      <p>{t('description')}</p>
      <p data-testid="RichText">
        {t.rich('rich', {important: (chunks) => <b>{chunks}</b>})}
      </p>
    </>
  );
}

function PageWrapper(children: any) {
  return function Page(props: any) {
    return children(props);
  };
}

export default PageWrapper(Index);
