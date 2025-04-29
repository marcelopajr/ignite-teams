import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Teams" subtitle="Play with your team" />

      <GroupCard title="Ignite Group" />
    </Container>
  );
}
