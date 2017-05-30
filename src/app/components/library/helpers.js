const active = (path) => {
  if (location.pathname === path) {
    return 'active';
  }
};

module.exports = {
  active: active
};