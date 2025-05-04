import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="New Group"
          subtitle="create a new group to add players"
        />

        <Button title="Create" />
      </Content>
    </Container>
  );
}
