import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { colors, spacing } from '../../styles/variables';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Markdown = styled(ReactMarkdown)`
  background: ${colors.dark};
  padding: ${spacing.large};
  font-size: 1rem;

  a {
    color: ${colors.accent};
  }

  a:hover {
    text-decoration: underline;
  }

  pre {
    padding: ${spacing.medium};
    border: 1px solid ${colors.light};
    overflow: auto;
  }

  pre,
  code {
    background: ${colors.dark};
    padding: 2px;
    white-space: pre-wrap;
    word-break: break-all;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid ${colors.light};
  }

  td {
    padding: ${spacing.medium};
  }

  img {
    max-width: 100%;
  }
`
