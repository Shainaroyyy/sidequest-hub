import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { creativeQuests } from "@/data/creativeQuests";

const CreativeWorld = () => (
  <WorldLayout worldName="Creative World">
    <QuestList worldId="creative" worldEmoji="🎨" quests={creativeQuests} />
  </WorldLayout>
);

export default CreativeWorld;
