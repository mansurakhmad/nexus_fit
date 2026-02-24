export namespace BaseInputTypes {
  export interface Props {
    labelValue: string;
    isValid?: boolean;
    errorMessage?: string;
    name?: string;
    onlyDigits?: boolean;
    useGrouping?: boolean;
    min?: number;
    maxLength?: number;
  }
}
