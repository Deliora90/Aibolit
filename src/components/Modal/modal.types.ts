export interface IModalProps {
  open: boolean;
  width?: string;
  height?: string;
}
export interface IModalEvents {
  onCancel: () => void;
  onOk?: () => void;
}
