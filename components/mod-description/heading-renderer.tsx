import { Children, createElement } from 'react';
import Slugger from 'github-slugger';
import { PageSectionTitle } from '../page-section/page-section-title';

type Props = {
  level: number;
};

const flatten = (text: string, child: any): any => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

export const HeadingRenderer: React.FunctionComponent<Props> = (props) => {
  const children = Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = Slugger.slug(text);

  if (props.level === 2) {
    return <PageSectionTitle id={slug}>{props.children}</PageSectionTitle>;
  }

  return createElement('h' + props.level, { id: slug }, props.children);
};
