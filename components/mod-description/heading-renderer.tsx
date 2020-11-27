import { Children, createElement } from 'react';
import Slugger from 'github-slugger';
import { PageSectionTitle } from '../page-section/page-section-title';
import Head from 'next/head';

type Props = {
  level: number;
};

const flatten = (text: string, child: any): any => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

const PageTitle: React.FunctionComponent<{ text: string }> = ({ text }) => {
  const suffix = text.includes('Outer Wilds')
    ? 'Download and Install'
    : `Download and Install Outer Wilds Mod`;

  return (
    <Head>
      <title>
        {text} - {suffix}
      </title>
    </Head>
  );
};

export const HeadingRenderer: React.FunctionComponent<Props> = (props) => {
  const children = Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = Slugger.slug(text);

  if (props.level === 2) {
    return <PageSectionTitle id={slug}>{props.children}</PageSectionTitle>;
  }

  const newChildren = [
    ...children,
    ...(props.level === 1 ? [<PageTitle text={text} />] : []),
  ];

  return createElement('h' + props.level, { id: slug }, newChildren);
};
