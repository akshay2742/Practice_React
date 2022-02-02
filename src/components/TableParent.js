import React, { Component } from 'react';
import TableChild from './TableChild';

class TableParent extends Component {
  render() {
    return (<table>
        <tbody>
            <tr>
                <TableChild />      
            </tr>
        </tbody>
    </table>);
  }
}

export default TableParent;
