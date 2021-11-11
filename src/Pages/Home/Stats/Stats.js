import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
      <div className='stats-container'>
        <div class="stats">
          <i class="fas fa-home"></i>
          <div class="content">
            <h3>150+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="stats">
          <i class="fas fa-car"></i>
          <div class="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="stats">
          <i class="fas fa-users"></i>
          <div class="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>
      </div>
    );
};

export default Stats;