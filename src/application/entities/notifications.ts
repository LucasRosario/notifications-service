export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  //SETTER
  public set content(content: string) {
    this.props.content = content;
  }

  //GETER
  public get content(): string {
    return this.props.content;
  }
}
