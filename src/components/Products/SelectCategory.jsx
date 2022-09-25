import React from 'react';
import { Select } from '@mantine/core';

export default function SelectCategory({ category, onCategorySelect, categories }) {
  return (
    <div className='flex justify-between gap-2'>
      <Select
        placeholder='Category'
        searchable
        onSearchChange={onCategorySelect}
        clearable
        data={categories.map(item => item.name)}
        nothingFound="No options"
      />
    </div>

  );
}
