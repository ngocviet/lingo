import FeedWrapper from "@/components/feed-wapper";
import StickyWrapper from "@/components/sticky-wrapper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>My sticky sidebar</StickyWrapper>
      <FeedWrapper>My feeed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
