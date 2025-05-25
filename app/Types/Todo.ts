export interface Todo {
  id: string;
  todo: string;
  isChecked: boolean;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  group: string;
}
