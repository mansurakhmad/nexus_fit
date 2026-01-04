export namespace BaseAlertTypes {
  export interface Messages {
    title: string;
    message: string;
  }
  export interface Props {
    isVisible: boolean;
    themeValue?: 'default' | 'error';
  }
}
