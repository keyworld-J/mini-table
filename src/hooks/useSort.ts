import React from 'react';
import { useState } from 'react';

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

export function useSort<T>(data: T[], config: SortConfig | null) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(config);

  const sortedData = React.useMemo(() => {
    if (sortConfig) {
      return [...data].sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return { sortedData, handleSort, sortConfig };
}
