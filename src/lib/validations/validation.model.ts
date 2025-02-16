export interface Data {
  succeeded: boolean;
  errorMessage?: string;
}

export interface FormData {
  succeeded: boolean;
  errors: {
    type: string;
    name: string;
  };
}
