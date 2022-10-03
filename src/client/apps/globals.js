var dev_mode = true;
var db;

// Verify dbs before deployment

if (dev_mode) {
  db = {
    bridge: '12CZKvN4WVjygcFg0Wndav4eO97sv73YbrOTjSMywZDg',
    giglio: '1x_bhJcq1NO-25a2BxUuSNO-LK3EvXBNnlgglbmJUO1A',
    inmate: '1f9BGLw3a_KIg8FVYylN9Dr-rbnRlNXrXtkBxjxcOvCo',
    nolle: '15dYAMULkUI7Zfl7ZpIFik6gLnU92c4tnDGKc1FWB_QY',
    plea: '12-bs9sDS2duL5MDEZvE0WhOSRrV684HEPeDA9a6a6Ro',
    staff: '15Y9D2eavZ1lUAM4-PXtZeYb0cNSlt726NQLPLVZcj8A',
    warrant: '1qKSiSkuNw_95sqTySsqccsGVPoM4syobJ36Yv4ofaUs',
  };
} else {
  db = {
    bridge: '1gat8zLCiNXTnelxd2e88gBZvYM8lGjCJKSOuZdFmaJY',
    giglio: '18LUNEIOIHqTsc87raAiwHHnkcPMdzCBfl7gRsUnn2vA',
    inmate: '1f9BGLw3a_KIg8FVYylN9Dr-rbnRlNXrXtkBxjxcOvCo',
    nolle: '10YRgxl4UTgKIFjMXjV2-V6d_JGtjDftij5iTqeyGv-M',
    plea: '1oq1nOykOz_IbHw3F7U8Z6xg_TvIbBK4tmuTeZS3IDDQ',
    staff: '1enquD5KcXKVwWDQ7vvliCL55D07VhD0UDGMSyCdjoQU',
    warrant: '15al_f0n6W_vghyqC2w9kODFHIIeGYp0fuT_JmP5pEvM',
  };
}

export { dev_mode, db }