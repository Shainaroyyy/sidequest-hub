import WorldLayout from "@/components/WorldLayout";
import QuestList from "@/components/QuestList";
import { socialQuests } from "@/data/socialQuests";

const SocialWorld = () => (
  <WorldLayout worldName="Social World">
    <QuestList worldId="social" worldEmoji="👥" quests={socialQuests} />
  </WorldLayout>
);

export default SocialWorld;
