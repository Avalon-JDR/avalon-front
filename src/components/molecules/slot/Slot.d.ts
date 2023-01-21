export type SlotProps = {
  item: SlotItem | undefined;
  deleteItem?: (id: string) => void
};

export interface SlotItem {
  id: string;
  name: string;
  description: string;
  image: string;
}
