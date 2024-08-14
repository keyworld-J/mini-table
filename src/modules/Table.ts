export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    fixed?: 'left' | 'right';
    width?:string;
  }
  
export interface TableProps<T> {
    columns: TableColumn[];
    data: T[];
    defaultPageSize: number;
  }
  