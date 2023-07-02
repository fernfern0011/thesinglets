import React from 'react';
import styles from '/styles/components/dropdown.module.css';

const Dropdown = () => (
    <div>
        <select name="gender" className={styles.dropdown}>
        <option value="all">All</option>
        <option value="men">Men</option>
        <option value="woman">Woman</option>
      </select>

      <select name="brand" className={styles.dropdown}>
        <option value="Zara">Zara</option>
        <option value="Mango">Mango</option>
      </select>

      <select name="category" className={styles.dropdown}>
        <option value="category">Category</option>
        <option value="tops">Tops</option>
        <option value="bottoms">Bottoms</option>
      </select>

      <select name="colour" className={styles.dropdown}>
        <option value="colour">Colour</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
      </select>
    </div>
);

export default Dropdown;