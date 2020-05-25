const axios = require('axios');
require('dotenv').config();

module.exports = {
  get: (marketlist) => {
    let result = [];
    if (result) {
      result = marketlist.reduce((acc, cur) => {
        if (cur) {
          acc.push({
            address_name: cur.REFINE_LOTNO_ADDR,
            category_group_code: '',
            category_group_name: '',
            category_name: '',
            distance: '',
            id: '',
            phone: '',
            place_name: cur.CMPNM_NM,
            place_url: '',
            road_address_name: '',
            x: cur.REFINE_WGS84_LOGT,
            y: cur.REFINE_WGS84_LAT,
          });
        }
        return acc;
      }, []);
    }
    return result;
  },
};
