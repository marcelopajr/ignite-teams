import { useState } from 'react';
import { FlatList } from 'react-native';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState(['Team 1', 'Team 2', 'Team 3']);

  return (
    <Container>
      <Header />

      <Highlight title="Teams" subtitle="Play with your team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="No teams found" />}
      />

      <Button title="Create new team" />
    </Container>
  );
}
