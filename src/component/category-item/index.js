import React from 'react';

class CategoryItem extends React.Component {

  render(){
    return(
      <div className='category-item'>
        <div className='category-delete-div'>
          <ul>
            {this.props.category.map((item, i) => <li key={i}> item.title </li> )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CategoryItem;
