import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
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

        <Input placeholder="Group name" />

        <Button title="Create" />
      </Content>
    </Container>
  );
}
