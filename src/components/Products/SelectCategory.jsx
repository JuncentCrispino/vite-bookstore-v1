import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectCategory({ category, onCategorySelect, categories }) {
  return (
    <div className='flex justify-between gap-2'>
      <Select
        isClearable={true}
        placeholder='categories'
        options={categories.map(item => {
          return {
            value: item.name,
            label: item.name
          };
        })}
        onChange={onCategorySelect}
        value={category}
        className="basic-single w-[300px]"
        classNamePrefix="select"
        isSearchable={true}
        name="selectValue"

      />
    </div>

  );
}
