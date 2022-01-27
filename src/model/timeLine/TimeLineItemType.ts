type TimeLineItemType = {
  plantId: string;
  plantName: string;
  day: string;
  characterImageUrl: string;
  comment: string;
  onPressItem: (plantId: string) => void;
};

export default TimeLineItemType;
