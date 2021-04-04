import React from 'react';
import { Twemoji } from 'react-emoji-render';
import './history.css';

function History() {
  return (
    <div className="container">
      <h1>Baby Riku's History</h1>
      <table>
        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              Naps
            </th>
            <th>
              Feedings
            </th>
            <th>
              Diapers
            </th>
            <th>
              Notes
            </th>
            <th>
              Edit
            </th>
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              4/3/2021
            </td>
            <td>
              4
            </td>
            <td>
              4
            </td>
            <td>
              5
            </td>
            <td>
              <Twemoji text=':notebook_with_decorative_cover:' onlyEmojiClassName="table-emoji" />
            </td>
            <td>
              <Twemoji text=':pencil2:' onlyEmojiClassName="table-emoji" />
            </td>
            <td>
              <Twemoji text=':x:' onlyEmojiClassName="table-emoji" />  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History;
