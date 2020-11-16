import { TextLink, LinkButton } from '..';
import { Mod } from '../../services';

import { Wrapper, Content, Title, Spacer, ButtonsWrapper } from './mod-actions.styles';

type Props = {
  mod: Mod;
  isFullWidth: boolean;
};

export const ModActions: React.FunctionComponent<Props> = ({
  mod,
  isFullWidth,
}) => (
  <Wrapper isFullWidth={isFullWidth}>
    <Content>
      <div>
        <Title>{mod.manifest.name}</Title>
        <TextLink isExternal href={mod.repo}>
          by {mod.manifest.author}
        </TextLink>
        <p>{mod.manifest.description}</p>
        <div>
          <small>Downloaded {mod.downloadCount} times</small>
        </div>
      </div>
      <ButtonsWrapper>
        <Spacer />
        <LinkButton
          href="/mod-manager"
          variant="primary"
        >
          Install mod using Mod Manager
        </LinkButton>
        <Spacer />
        <LinkButton href={mod.downloadUrl}>
          <small>
            <div>Download mod files</div>
            <div>Version {mod.manifest.version}</div>
          </small>
        </LinkButton>
      </ButtonsWrapper>
    </Content>
  </Wrapper>
);
