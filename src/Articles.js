import React from 'react';
import ImageText from './ImageText';
import './Articles.css'
import {
    
} from 'reactstrap';

const Articles = (props) => {
    return (
    <div className="bulletin">
 <table>
      <thead>
        <tr>
          <th>no</th>
          <th >Title</th>
          <th>Author</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Title 111111111111111111111</td>
          <td>tony</td>
          <td>2019/11/29</td>
        </tr>
        <tr>
          <td>2</td>
          <td>title 222222222222222</td>
          <td>james</td>
          <td>2019/11/29</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Title 3333333333333333</td>
          <td>arthur</td>
          <td>2019/11/29</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Articles;