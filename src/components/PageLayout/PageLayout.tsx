import PageFooter from 'components/PageFooter/PageFooter';
import PageHeader from 'components/PageHeader/PageHeader';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <PageHeader />
      <article>{props.children}</article>
      <PageFooter />
    </>
  );
};

export default PageLayout;
